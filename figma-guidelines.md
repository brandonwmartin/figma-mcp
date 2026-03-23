# Figma Design Checklist

## Layout & Responsiveness
- [ ] Use Hug or Fill sizing — avoid arbitrary fixed widths/heights
- [ ] Define min/max widths and wrapping behavior where needed
- [ ] Design for mobile, tablet, and desktop — show reflow, not just resized artboards
- [ ] Every component uses Auto Layout with explicit direction, spacing, and alignment
- [ ] No loose frames, manual offsets, or eyeballed spacing
- [ ] Use Auto Layout (Flex) for linear layouts; use Grid for 2D layouts
- [ ] Grid systems define column count, gutter, margins, and max width

## Tokens & Variables
- [ ] All colors, typography, spacing, radii, and shadows use design tokens
- [ ] Tokens are named semantically (`color.background.primary`, `spacing.md`) — not by appearance (`Blue`, `Nice`)
- [ ] Variables are used for light/dark mode, brand themes, and component states

## Components & Variants
- [ ] No one-off components — if it's duplicated, it's a component
- [ ] Variants cover all states in one component (size, state, type)
- [ ] Text, images, and icons are component properties — not hardcoded
- [ ] Flexible content areas use Figma slots (e.g. card media, card footer)

## Content
- [ ] Real or realistic content used — no lorem ipsum in layout-critical areas
- [ ] Tested with long text, short text, and missing content
- [ ] Empty, error, loading, and overflow states are designed

## Naming & Structure
- [ ] Layers named like a dev would (`card/header/title`, `button/icon/left`)
- [ ] No deep unnecessary nesting or ambiguous frame names like "Frame 123"

## Spacing
- [ ] Spacing follows a defined scale (e.g. 4, 8, 16, 32px)
- [ ] Spacing applied via Auto Layout padding/gap — no manual positioning

## Dev Handoff
- [ ] Hover, focus, and animation intent defined
- [ ] No absolute positioning inside components
- [ ] Developer annotations added for behavior, grid/flex intent, truncation, and scroll
- [ ] A stress test page exists showing long text, empty states, and multiple screen sizes

## Common Pitfalls
- ❌ Mixed spacing systems
- ❌ Components that break when text changes
- ❌ Manual alignment instead of Auto Layout
- ❌ One-off component versions
- ❌ Primitive or hardcoded colors instead of semantic tokens
- ❌ Visually aligned but structurally broken layouts
