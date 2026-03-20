
# Copilot / Coding Agent Instructions

Use this as the **primary instruction set** when generating or refactoring components in this repo.

## 1. Project stack overview

- TypeScript/JavaScript components
- CSS Modules or global CSS in `/styles/`
- BEM naming convention for component class names
- Tailwind `@apply` used inside BEM selectors to compose utility styles

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
- Add a CSS file with the same base name for component-scoped styles (e.g., `MyComponent.css`).
- Use BEM naming for all component class names: `block`, `block__element`, `block--modifier`.
- Apply Tailwind utilities inside BEM selectors using `@apply`; do not use Tailwind utility classes directly in markup.
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

### Placeholder imagery
- Use placeholder images (e.g., `https://placehold.co/400x200`) for media elements.

---

## 4. Styling rules

### BEM + Tailwind @apply hybrid

- All component styles live in the component's CSS file using BEM-named selectors.
- Use `@apply` inside BEM selectors to compose Tailwind utilities; do not put Tailwind utility classes directly in markup.
- Use CSS custom properties (`var(--token)`) for values that `@apply` cannot express (e.g., design tokens, dynamic values).
- For modifier and state variants, use BEM modifier classes (e.g., `.button--primary`) in the CSS file alongside `@apply`.

### Tokens and units

- Reference global styles and design tokens from `/styles/`; do not import them directly into component CSS unless using CSS Modules.
- Prefer semantic design tokens (`--fg-primary`, `--bg-primary`) over primitive tokens (`--neutral-1000`, `--blue-900`).
- Do not use hardcoded color values as fallbacks for design tokens (e.g. `color: var(--fg-primary, #2f333d)`).
- Use relative units (%, rem) or design tokens for padding, sizing, and spacing; avoid fixed pixel values.

### CSS authoring

- Alphabetize CSS attributes within each selector block.
- Use shared base selectors for repeated typography or layout styles.
- Control element width via layout context, not explicit CSS.
- Achieve height through vertical padding and font size, not explicit CSS values.

### Violations

The following are violations that must be corrected before finalizing a component:

- Tailwind utility classes placed directly in markup instead of via `@apply` in the CSS file.
- Non-BEM class names on component elements.
- Setting explicit sizing values (`width`, `height`, `max-width`, `max-height`) in CSS.
- Using inline styles.  

---

## 5. Clean code practices
- Write clean, well-organized code following modern best practices.
- Do not use comments to explain basic code functionality; code must be self-explanatory.
