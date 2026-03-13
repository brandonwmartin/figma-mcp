
# Mode: Component

Governs output when the `figma-transform` skill runs in `component` mode for this project.

---


## Output


Emit a complete component in a dedicated folder under `/src/components/`:

- `/src/components/<ComponentName>/<ComponentName>.tsx` (or `.ts`/`.js` as appropriate)
- Optional: `/src/components/<ComponentName>/<ComponentName>.css` for component-scoped styles
- A Storybook story file: `/src/components/<ComponentName>/<ComponentName>.stories.tsx` (or `.stories.ts`/`.stories.js` as appropriate)

Follow project conventions for file structure, props, and styling. Reference design tokens from `/styles/` for all color, spacing, and typography values.

---


## Figma-to-Component translation

- Use `get_design_context` to read the layer structure and determine the correct HTML elements or project-specific components. Map all Figma primitives to semantic HTML or existing components as appropriate.
- Use `get_variable_defs` to identify which design tokens to reference in the component's CSS. Do not hard-code values that should be token references.
- Use layout information from `get_design_context` to set flex/grid/box layout properties. Do not introduce unnecessary wrapper elements.

---


## Fidelity check

After generating the component, review the `get_screenshot` output and confirm:

- No extra wrappers or unexpected layout drift
- Text styles, spacing, and alignment match the design
- All interactive primitives use the correct semantic HTML or project components
