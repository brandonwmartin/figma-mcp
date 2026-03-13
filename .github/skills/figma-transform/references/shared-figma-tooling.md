# Shared Figma Tooling

## MCP tool contracts

### `get_design_context`

Returns the layer hierarchy, auto-layout settings, component properties, and spacing and sizing constraints for the selected frame. Use this as the structural source of truth when deciding layout and component selection.

### `get_variable_defs`

Returns all Figma variables (primitives and aliases) scoped to the selected frame. Use this as the authoritative token source in `stylesheet` and `design-tokens` modes, and to identify which design tokens to reference in CSS in `component` mode.

### `get_screenshot`

Returns a visual snapshot of the selected frame. Call this **after** generating output, then verify the result against the screenshot — confirm alignment, spacing, text styles, and component choices match before declaring the task complete.

---

## Common static resource output format


Both `stylesheet` and `design-tokens` modes produce a CSS file. Each file should be placed directly inside the `/styles/` directory at the project root — not in a subfolder:

- `<name>.css`
