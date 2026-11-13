let pyodide = null;
let pending = null;
self.onmessage = async (event) => {
  const message = event.data;
  if (message.type === "init") {
    try {
      importScripts(message.baseUrl + "pyodide.js");
      pyodide = await self.loadPyodide({ indexURL: message.baseUrl });
      self.postMessage({ type: "ready" });
    } catch (error) {
      self.postMessage({
        type: "failed",
        message: String((error && error.message) || error),
      });
    }
    return;
  }
  if (message.type === "input") {
    if (pending) {
      const resolve = pending;
      pending = null;
      resolve(message.value);
    }
    return;
  }
  if (message.type === "run") {
    const queue = message.inputs ? message.inputs.slice() : null;
    let stdout = "";
    pyodide.setStdout({
      batched: (text) => {
        stdout += text + "\n";
        self.postMessage({ type: "write", text: text + "\n" });
      },
    });
    pyodide.setStderr({
      batched: (text) => self.postMessage({ type: "write", text: text + "\n" }),
    });
    pyodide.setStdin({ stdin: () => "" });
    self.compSchoolReadInput = (prompt) => {
      if (queue) {
        return queue.length
          ? Promise.resolve(queue.shift())
          : Promise.reject(
              new Error(
                "The test gave all of its input, but the program asked for more.",
              ),
            );
      }
      return new Promise((resolve) => {
        pending = resolve;
        self.postMessage({
          type: "ask",
          prompt: String(prompt == null ? "" : prompt),
        });
      });
    };
    let error = null;
    try {
      const result = await pyodide.runPythonAsync(message.code);
      error = typeof result === "string" ? result : null;
    } catch (caught) {
      error = String((caught && caught.message) || caught);
    }
    self.postMessage({ type: "done", stdout, error });
  }
};
