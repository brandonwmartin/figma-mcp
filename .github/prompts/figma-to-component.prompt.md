---
name: 'figma-to-component'
agent: 'agent'
model: Claude Sonnet 4.6
description: 'Generate a reusable component from the selected Figma frame.'
argument-hint: 'componentName'
---

`componentName`: {$input:componentName}

Generate a reusable component for this project from the currently selected Figma frame.

Use the `figma-transform` skill in **`component` mode**.
See [SKILL.md](../skills/figma-transform/SKILL.md) for the full workflow.