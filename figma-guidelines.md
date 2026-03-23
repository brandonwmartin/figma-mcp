# Figma Best Practices for Optimal Code Generation

Follow these guidelines when designing in Figma to ensure components generate clean, maintainable code.

## Layout & Responsiveness

1. Design with constraints, not fixed sizes
    - Avoid arbitrary fixed widths/heights unless necessary
    - Use:
      - Hug (content-driven)
      - Fill (container-driven)
    - Define:
      - Min/max widths where needed
      - Wrapping behavior

2. Design for multiple breakpoints
    - At minimum:
      - Mobile
      - Tablet
      - Desktop
    - But don't just resize artboards. Show:
      - How components reflow
      - What wraps vs stacks
      - What disappears or changes priority

3. Everything should use Auto Layout
    - No loose frames unless absolutely necessary
    - Every component = structured layout system
    - Use it intentionally
      - Define:
         - Direction (row/column)
         - Spacing (no manual padding hacks)
         - Alignment (center, start, space-between, etc.)
      - Avoid:
         - Random nested frames
         - Magic spacing values

4. Don't fake layouts visually
    - No "eyeballed" spacing
    - No manual alignment instead of proper constraints

5. Be explicit about layout intent
    - Use Flex (Auto Layout) when:
      - Linear layouts (rows/columns)
      - Nav bars, buttons, cards
      - Content-driven sizing
    - Use Grid when:
      - 2D layouts (rows AND columns)
      - Card grids, galleries, dashboards
    - Define grid systems clearly
      - Column count (e.g., 12-col)
      - Gutter size
      - Margins
      - Max width

## Tokens & Variables

1. Use design tokens for EVERYTHING reusable
    - Colors
    - Typography
    - Spacing
    - Border radius
    - Shadows

2. Name tokens like code, not like vibes
    - ❌ Blue / Nice / Light
    - ✅ color.background.primary
    - ✅ spacing.md
    - ✅ radius.sm

3. Use variables for theming + states
    - Light / dark mode
    - Brand themes
    - Component states (hover, active, disabled)

## Components & Variants

1. Components must be truly reusable
    - No one-off components
    - If duplicated → it should be a component

2. Use variants properly
    - Combine states into one component:
      - size: sm / md / lg
      - state: default / hover / disabled
      - type: primary / secondary
    
3. Use properties for dynamic content
    - Text fields should be properties
    - Same for images, icons, etc.

4. Use Figma slots for flexible content areas
    - E.g. card media, card footer, etc.

## Content

1. Use real content (or realistic constraints)
    - No lorem ipsum for layout-critical areas
    - Test:
      - Long text
      - Short text
      - Missing content

2. Design for edge cases
    - Empty states
    - Error states
    - Loading states
    - Overflow

## Naming & Structure

1. Name layers like a dev would
    - card/header/title
    - button/icon/left
    - nav/item/active

2. Keep hierarchy clean
    - Avoid:
        - Deep unnecessary nesting
        - Ambiguous frame names like “Frame 123”

## Spacing System

1. Define a clear spacing scale
    - 4px, 8px, 16px, 32px, etc.
    - Use tokens for spacing values
    - Use consistent spacing throughout
    - Don't eyeball spacing between elements

2. Apply spacing via layout, not positioning
    - Use Auto Layout padding + gap
    - Avoid manual offsets

## Dev-friendly details

1. Define interaction intent
    - Hover states
    - Focus states
    - Animations (even roughly)

2. Avoid absolute positioning
    - Especially inside components
    - It breaks responsiveness and code generation

## Common Pitfalls
- ❌ Mixed spacing systems (8px + random values)
- ❌ Components that break when text changes
- ❌ Manual alignment instead of auto layout
- ❌ One-off “custom” component versions
- ❌ Hardcoded (or even primitive token) colors instead of semantic tokens
- ❌ Visually aligned but structurally broken layouts

## Nice-to-haves for better dev handoff

1. Include developer notes as annotations in Figma
    - Expected behavior
    - Grid vs flex intent
    - Truncation rules
    - Scroll behavior

2. Create a “stress test” page

    Show components with:
    - Long text
    - Empty states
    - Different screen sizes