
# Mode: Stylesheet

Governs output when the `figma-transform` skill runs in `stylesheet` mode.

---


## Output

Emit a CSS file for utility classes and references to design tokens. Place this file in the `/styles/` directory at the project root. See [`shared-figma-tooling.md`](shared-figma-tooling.md) for the file structure.

---


## CSS generation rules

- Map Figma type styles to CSS utility classes based on the type scale. Do not create custom CSS rules for typography.
- For color styles, reference design tokens. Do not create custom CSS rules for colors.
- Reference design tokens defined in the project's `/styles/` directory. Do not hard-code values that should be token references.
