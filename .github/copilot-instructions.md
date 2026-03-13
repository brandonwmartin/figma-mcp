
# Copilot / Coding Agent Instructions

Use this as the **primary instruction set** when generating or refactoring components in this repo.

## 1. Project stack overview

- TypeScript/JavaScript components
- CSS Modules or global CSS in `/styles/`

---

## 2. Agent rules

- Read this entire document before generating code; all code must adhere to these guidelines.
- Do not add presumed "helpful" code unsupported by design or requirements.
- If the design does not specify a feature, do not add it.
- Generate only actual component code, not demo or test files.

---

## 3. Component architecture

### Naming and folder structure

- Use PascalCase for component names and filenames.
- Place each component in `/src/components/` as a single file (e.g., `MyComponent.tsx`) or as a folder if multiple files are needed.
- Optional: Add a CSS file with the same base name for component-scoped styles (e.g., `MyComponent.css`).
- Verify visual match to design:
    - No extra wrappers or layout drift
    - No inferred states or approximations
    - Proper alignment of text, buttons, images

### Props and variants
- Use props for all configurable options, including variants and states.
- Normalize variant values in code before comparison (e.g., lowercase, trim).

### Required structure

- Use semantic HTML elements or existing project components for layout and primitives.
- Avoid unnecessary wrapper elements; keep markup flat unless structure requires nesting.

### Figma Primitive → Component Mapping

When a Figma frame contains these primitives, map them to the corresponding HTML or project component:

| Figma Primitive | Component |
|---|---|
| avatar | `<img>` with alt or Avatar component |
| badge | `<span>` or Badge component |
| button | `<button>` or Button component |
| card | `<section>` or Card component |
| checkbox | `<input type="checkbox">` or Checkbox component |
| icon | `<svg>`/Icon component |
| input / text field | `<input>` or Input component |
| link | `<a>` |
| select / dropdown | `<select>` or Select component |
| spinner | Spinner component |
| textarea | `<textarea>` or Textarea component |

Prefer project components over raw HTML when available.

---

## 4. Styling rules

- Reference global styles and design tokens from `/styles/`; do not import directly into component CSS unless using CSS Modules.
- Prefer utility classes and design token variables before writing custom CSS.
- Custom CSS should be structural only (not visual design); use only when utility classes or tokens cannot achieve the layout or behavior.
- Use relative units (%, rem) or design tokens for padding, sizing, and spacing; avoid fixed pixel values.
- Prefer semantic design tokens (`--fg-primary`, `--bg-primary`) over primitive tokens (`--neutral-1000`, `--blue-900`).
- Do not use hardcoded color values as fallbacks for design tokens (e.g. `color: var(--fg-primary, #2f333d)`).
- Alphabetize CSS attributes within each selector block.
- Use shared base selectors for repeated typography or layout styles.
- Control element width via layout and utility classes, not CSS.
- Achieve height through vertical padding and font size, not explicit CSS values.
- The following styling choices are violations:
    - Setting explicit sizing values (`width`, `height`, `max-width`, `max-height`) in CSS.
    - Using inline styles.
    - Omitting appropriate utility classes when equivalents exist.
  
    If any of the above occur, the code must be corrected before finalizing the component.  

---

## 5. Clean code practices
- Write clean, well-organized code following modern best practices.
- Do not use comments to explain basic code functionality; code must be self-explanatory.
