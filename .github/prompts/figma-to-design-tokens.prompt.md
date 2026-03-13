---
name: 'figma-to-design-tokens'
agent: 'agent'
model: Claude Sonnet 4.6
description: 'Generate a design tokens stylesheet from the selected Figma frame.'
argument-hint: 'Name of the stylesheet to generate (e.g., "designTokens")'
---

`styleSheetName`: {$input:styleSheetName}

Generate a CSS design tokens static resource from the currently selected Figma frame.

Use the `figma-transform` skill in **`design-tokens` mode**.
See [SKILL.md](../skills/figma-transform/SKILL.md) for the full workflow.
