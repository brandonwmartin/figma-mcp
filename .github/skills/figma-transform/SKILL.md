# Skill: Figma Transform

Converts the currently selected Figma frame into a Salesforce artifact. This skill is the shared workflow brain invoked by all `figma-to-*.prompt.md` files in `.github/prompts/`. Prompt files are thin launchers; all Figma workflow logic lives here and in the reference files below.

---

## Supported modes

| Mode | Output artifact |
|---|---|
| `component` | Web Component bundle |
| `stylesheet` | CSS static resource |
| `design-tokens` | CSS custom properties static resource |

---

## Invariant tool sequence

Always call these three MCP tools **before generating any output**, in this order:

1. `get_design_context` — layer hierarchy, component properties, auto-layout constraints
2. `get_variable_defs` — all Figma variables and token aliases scoped to the frame
3. `get_screenshot` — visual snapshot used for post-generation fidelity verification

Do not skip any tool. Do not generate output before all three calls have returned.

---

## Name resolution

Resolve the output artifact name before writing any code.

- Use the argument value if provided by the invoking prompt.
- Otherwise, ask the user before proceeding:

> **What would you like to name this [component / stylesheet]?**
> Figma frame name: **`[FrameName]`**
> Reply with a custom name or **"default"** to use `[FrameName]`.

---

## Mode dispatch

Load the corresponding reference file for the active mode:

| Mode | Reference file |
|---|---|
| `component` | [`references/mode-component.md`](references/mode-component.md) |
| `stylesheet` | [`references/mode-stylesheet.md`](references/mode-stylesheet.md) |
| `design-tokens` | [`references/mode-design-tokens.md`](references/mode-design-tokens.md) |

Shared MCP tool contracts and common static resource output format live in [`references/shared-figma-tooling.md`](references/shared-figma-tooling.md).

---

## Governing constraints

All output must comply with `.github/copilot-instructions.md`. That file is repo law and takes precedence over any inference or convenience choice made during this skill's execution.
