---
name: 'figma-to-stylesheet'
agent: 'agent'
model: Claude Sonnet 4.6
description: 'Generate a stylesheet from the selected Figma frame.'
argument-hint: 'Name of the stylesheet to generate (e.g., "global-styles" or "typography-styles")'
---

`styleSheetName`: {$input:styleSheetName}

Generate a CSS stylesheet static resource from the currently selected Figma frame.

Use the `figma-transform` skill in **`stylesheet` mode**.
See [SKILL.md](../skills/figma-transform/SKILL.md) for the full workflow.