
# Mode: Design Tokens

Governs output when the `figma-transform` skill runs in `design-tokens` mode.

---


## Output

Emit a CSS file containing custom properties (design tokens). Place this file in the `/styles/` directory at the project root. See [`shared-figma-tooling.md`](shared-figma-tooling.md) for the file structure.

---


## CSS generation rules

- Use `get_variable_defs` as the primary source. Map every variable to a `--token-name` custom property defined on `:root`.
- Group tokens by category using CSS comments (e.g., `/* color */`, `/* spacing */`, `/* typography */`).

---

## Token hierarchy

Treat tokens as two layers:

**Primitive tokens** use raw values:

```css
:root {
    /* color */
    --color-blue-500: #327DBA;

    /* spacing */
    --spacing-4: 1rem;
}
```

**Semantic tokens** reference primitives via `var()`, never raw values:

```css
:root {
    --fg-brand: var(--color-blue-500);
    --bg-primary: var(--color-neutral-0);
}
```

Rules:

- Emit aliased Figma variables as `var(--alias-name)`. Never resolve the alias to its raw value.
- Never place a raw value in a semantic token, even as a fallback.
- Primitive token names follow the pattern `--category-scale` (e.g., `--color-blue-500`, `--spacing-4`).
- Semantic token names are descriptive and role-based (e.g., `--fg-primary`, `--bg-brand`).
