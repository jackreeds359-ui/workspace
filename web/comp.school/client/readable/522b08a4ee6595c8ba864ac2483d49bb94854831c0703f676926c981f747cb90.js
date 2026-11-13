import { t, m as o, a as i } from "./App-Cywbl0vP.js";
import "./index-OXn7GuU2.js";
async function m(n, a) {
  const { question: r } = n,
    s = t(n, a),
    [e] = await o({
      parentQuestion: r.parent_question ?? 0,
      paperId: n.source.paperId,
      subQuestions: [
        {
          questionId: r.question_id,
          ref: i(n.source.paperId, r),
          content: r.content,
          answer: r.answer,
          marks: r.marks,
          rawAnswer: s,
          studentAnswer: s,
          commandWord: r.command_word ?? "",
          responseMode: "text",
          drawingPngBase64: null,
        },
      ],
    });
  if (!e) throw new Error("AI marking returned no mark.");
  return {
    mark: Math.max(0, Math.min(n.marks, Math.round(e.mark))),
    verdict: e.verdict ?? "",
    rationale: e.rationale ?? "",
    credited: e.whatWasCredited ?? [],
    missing: e.whatWasMissing ?? [],
    assessedText: a.trim(),
  };
}
export { m as markTellMeWhyWithAi };
