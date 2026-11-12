---
name: reactbits
description: Add React Bits animated components to a React project through the shadcn registry. Use when a shadcn-compatible project needs text animations, animated content, backgrounds or interactive components from reactbits.dev.
---

# reactbits

React Bits is a shadcn-compatible component registry. It is not a standalone skill package and not a remote MCP server. Components are copied into the project by the shadcn CLI.

Source: https://www.reactbits.dev/get-started/mcp

## Registry

Merge this key into the project's existing `components.json`. Never overwrite the file and never drop registries that are already there.

```json
{
  "registries": {
    "@react-bits": "https://reactbits.dev/r/{name}.json"
  }
}
```

If the project has no `components.json`, it is not shadcn-compatible yet. Run `npx shadcn@latest init` first, then merge the key.

## Item names

Verified against `https://reactbits.dev/r/registry.json` on 2026-11-12: 1,274 items covering 419 component titles.

- Components: `<Title>-<JS|TS>-<CSS|TW>`, for example `BlurText-TS-TW` or `AnimatedContent-JS-CSS`. `TS` or `JS` selects the language. `TW` selects Tailwind and `CSS` selects plain CSS.
- Sound items: `<Title>-<JS|TS>`, for example `SoundEngine-TS`.

Pick the variant that matches the project: TypeScript or JavaScript, Tailwind or plain CSS. Always confirm the exact name with `search` or `view` before adding. Never guess a name.

## Workflow

Commands verified against the shadcn CLI help on 2026-11-12.

```bash
npx shadcn@latest search @react-bits -q "blur"
npx shadcn@latest view @react-bits/BlurText-TS-TW
npx shadcn@latest add @react-bits/BlurText-TS-TW
```

1. Search the registry and choose the item.
2. View it to check its files and dependencies.
3. Add it, then install any dependency the CLI reports.
4. Import it, run the app and verify it visually in a browser.

## MCP

shadcn ships an MCP server configured with `npx shadcn@latest mcp init`. See https://ui.shadcn.com/docs/mcp. It is a local stdio server. Hosted Hoplite runs only remote HTTP or SSE MCP servers, so use the CLI workflow above there. Use the shadcn MCP only in a client that supports stdio servers.
