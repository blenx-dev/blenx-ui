export const guideMarkdown = `# Blenx UI Package Guide

Blenx UI is a React component library built with Vanilla Extract, Base UI, and Phosphor Icons.

## Packages

The library is split into three packages:

- **\`@blenx-dev/theme\`** — design tokens (colors, spacing, typography, shadows, etc.) as a Vanilla Extract contract + theme implementations.
- **\`@blenx-dev/core\`** — 45+ primitive components (Button, Text, Box, Dialog, Menu, etc.), the \`baseSprinkles\` atomic CSS utility system, and palette/intent color patterns.
- **\`@blenx-dev/datatable\`** — data table component built on \`@tanstack/react-table\` using \`@blenx-dev/core\` components.

## Import Conventions

\`\`\`tsx
// Core components (named exports only, no defaults):
import { Button, Text, Box, HStack, VStack } from "@blenx-dev/core";

// Individual component for tree-shaking:
import { Dialog } from "@blenx-dev/core/components/Dialog";

// Icons (from Phosphor Icons):
import { Star, Gear } from "@phosphor-icons/react";

// Theme tokens (for .css.ts files):
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

// Sprinkles (for .css.ts files):
import { baseSprinkles } from "@blenx-dev/core";

// Palette classes & vars (for recipe-based palette support):
import { paletteVars, primaryPalette } from "@blenx-dev/core";
\`\`\`

Components never use \`default\` exports. Every component is a named export from its own file and re-exported through the barrel index at \`@blenx-dev/core\`.

## Layout Components

- **\`Box\`** — generic layout element (renders as \`<div>\`). Accepts ALL \`baseSprinkles\` props directly (\`display\`, \`flex\`, \`direction\`, \`align\`, \`justify\`, \`gap\`, \`padding\`, \`margin\`, \`width\`, \`height\`, \`position\`, \`overflow\`, \`zIndex\`, etc.). Supports \`render\` prop for custom root elements via \`@base-ui/react/use-render\`.
- **\`Stack\`** — opinionated flex row with \`gap="md"\`. Passed-through sprinkles override defaults.
- **\`HStack\`** — horizontal stack (\`direction="row"\`). Same API as Stack.
- **\`VStack\`** — vertical stack (\`direction="column"\`). Same API as Stack.
- **\`Grid\`** — CSS grid with \`columns\` prop (1-12) and \`Grid.Item\` for spans.

\`\`\`tsx
// Box with sprinkles props:
<Box display="flex" direction="column" align="center" gap="sm" padding="md">
  <span>Content</span>
</Box>

// Stack variants:
<HStack align="center" gap="xs">
  <Button>Save</Button>
  <Button variant="outline">Cancel</Button>
</HStack>
<VStack gap="lg" padding="xl">
  <Text variant="h2">Title</Text>
  <Text>Body content</Text>
</VStack>

// Grid:
<Grid columns={3} gap="md">
  <Grid.Item span={1}>Left</Grid.Item>
  <Grid.Item span={2}>Right</Grid.Item>
</Grid>
\`\`\`

## Typography

- **\`Text\`** — renders semantic heading/body elements via the \`variant\` prop:
  - \`h1\`–\`h6\`: heading levels (renders as \`<h1>\`–\`<h6>\`)
  - \`body1\`, \`body2\`, \`body3\`, \`body4\`: paragraph sizes
  - \`p\`, \`div\`: neutral text containers
  - \`caption\`, \`code\`: special-purpose
  - Also accepts sprinkles props (except \`fontSize\` which is controlled by variant) plus \`fontWeight\` as a standalone prop.

\`\`\`tsx
<Text variant="h1">Page Title</Text>
<Text variant="body1" color="secondary">Supporting text</Text>
<Text variant="caption" fontWeight="medium">Label</Text>
\`\`\`

## Sprinkles System (\`baseSprinkles\`)

\`baseSprinkles\` is an atomic CSS utility layer powered by \`@vanilla-extract/sprinkles\`. It generates single-purpose classes that are deduplicated across the bundle.

**Using sprinkles in .css.ts files:**

\`\`\`ts
import { baseSprinkles } from "@blenx-dev/core";

// Pure sprinkles:
export const myStyle = baseSprinkles({
  display: "flex",
  align: "center",
  gap: "sm",
  padding: "md",
});

// Mixed sprinkles + custom styles:
export const myStyle = style([
  baseSprinkles({
    display: "flex",
    position: "relative",
    overflow: "hidden",
  }),
  style({
    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
    selectors: {
      "&:hover": { opacity: 0.8 },
    },
  }),
]);
\`\`\`

**Using sprinkles as component props:**

Components like Button, Text, and Box accept sprinkles properties directly via \`applyBaseSprinkles()\`.

\`\`\`tsx
<Box gap="sm" align="center" padding="md">
\`\`\`

**Sprinkles properties reference:**

| Category | Properties | Values |
|---|---|---|
| Layout | \`width\`, \`maxWidth\`, \`height\`, \`maxHeight\`, \`minWidth\`, \`minHeight\` | \`"full"\`, \`"fit"\`, \`"auto"\`, \`"0"\` |
| Spacing | \`padding\`/\`p\`, \`px\`/\`py\`, \`margin\`/\`m\`, \`mx\`/\`my\`, sides, \`gap\` | \`"none"\`, \`"xxs"\`–\`"xxxl"\`, \`"0"\`–\`"48"\` |
| Flex/Grid | \`display\`, \`direction\`, \`align\`, \`justify\`, \`flex\`, \`grow\`, \`shrink\`, \`flexWrap\` | \`"flex"\`, \`"center"\`, \`"between"\`, \`1\` |
| Position | \`position\`, \`top\`, \`bottom\`, \`left\`, \`right\`, \`zIndex\`, \`overflow\`, \`userSelect\`, \`pointerEvents\` | \`"relative"\`, \`"absolute"\`, \`"sticky"\`, \`"hidden"\`, \`"none"\` |
| Color | \`color\`, \`backgroundColor\`, \`borderColor\`, \`borderTopColor\`, \`opacity\` | \`"primary"\`, \`"secondary"\`, \`"subtle"\`, \`"0.64"\`, \`"0.8"\` |
| Font | \`fontSize\`, \`fontWeight\`, \`fontFamily\`, \`lineHeight\`, \`letterSpacing\`, \`textAlign\`, \`whiteSpace\`, \`textTransform\`, \`textDecoration\` | \`"sm"\`, \`"md"\`, \`"semibold"\`, \`"inherit"\`, \`"nowrap"\`, \`"uppercase"\` |
| Border | \`borderWidth\`, \`borderTopWidth\`, sides, \`borderStyle\`, \`borderTopStyle\`, \`borderRadius\`/\`radius\`, corners | \`"thin"\`, \`"medium"\`, \`"solid"\`, \`"md"\`, \`"full"\` |
| Misc | \`cursor\`, \`boxShadow\`, \`outline\`, \`appearance\`, \`backdropFilter\` | \`"pointer"\`, \`"sm"\`, \`"none"\`, \`"none"\`, \`"blur4px"\` |

**When to use sprinkles vs. raw style():**
- **Use sprinkles** for: layout, typography, spacing, alignment, border widths, cursor, opacity, visibility, text styling.
- **Use raw \`style()\`** for: selectors (\`:hover\`, \`:focus\`, \`&:disabled\`), keyframes/animation, clip-path, SVG attributes, custom properties (\`vars\`), gradients, box-shadow with custom values, transitions, media queries, \`@supports\`.

## Theme System

The theme contract provides two token categories:

**\`semanticVars\`** — context-aware tokens that change with light/dark theme:
- \`semanticVars.background.{default, subtle}\`
- \`semanticVars.surface.{default, raised, overlay, floating}\`
- \`semanticVars.text.{primary, secondary, disabled, inverse}\`
- \`semanticVars.border.{default, subtle, strong}\`
- \`semanticVars.focus.ring\`
- \`semanticVars.color.{primary, secondary, neutral, success, warning, danger, info}\` — each with sub-keys: \`{ default, hover, active, bg, bgHover, bgActive, fg, text, textActive, border }\`

**\`tokenVars\`** — static design tokens (consistent across themes):
- \`tokenVars.spacing.{none, xxs, xs, sm, md, lg, xl, xxl, xxxl, huge, massive, 0-48}\`
- \`tokenVars.fontSize.{xxs, xs, sm, md, lg, xl, xxl, xxxl, display, displayLg, hero}\`
- \`tokenVars.fontWeight.{regular, medium, semibold, bold, extrabold}\`
- \`tokenVars.borderRadius.{default, none, full, xxs-xxxl}\`
- \`tokenVars.borderWidth.{hairline, thin, medium, thick, heavy}\`
- \`tokenVars.shadow.{sm, md, lg, xl}\`
- \`tokenVars.duration.{instant, fast, normal, slow, slower, lazy}\`
- \`tokenVars.easing.{linear, standard, enter, exit, spring, bounce}\`
- \`tokenVars.font.{sans, body, mono}\`
- \`tokenVars.lineHeight.{tight, snug, normal, relaxed, loose}\`
- \`tokenVars.letterSpacing.{tight, snug, normal, wide, wider, widest}\`

## Palette / Intent Color Pattern

When adding theme-driven color support (\`palette\`, \`intent\`) to a component, follow this pattern:

1. Declare scoped CSS vars with \`createVar()\` (\`packages/core/src/utils/pallete-styles.css.ts\`):
\`\`\`ts
export const paletteVars = {
  bg: createVar(), fg: createVar(), border: createVar(),
  hoverBg: createVar(), hoverFg: createVar(),
  activeBg: createVar(), activeFg: createVar(),
  focusRing: createVar(), selectedBg: createVar(), selectedFg: createVar(),
};
\`\`\`

2. Define palette classes that assign \`semanticVars.color.*\` tokens:
\`\`\`ts
export const primaryPalette = style({
  vars: {
    [paletteVars.bg]: semanticVars.color.primary.default,
    [paletteVars.fg]: semanticVars.color.primary.textActive,
    [paletteVars.hoverBg]: semanticVars.color.primary.hover,
  },
});
\`\`\`

3. In the component recipe, add a \`palette\` variant dimension:
\`\`\`ts
palette: {
  primary: primaryPalette,
  neutral: neutralPalette,
  success: successPalette,
  // ...
},
\`\`\`

4. Hover/pressed/active states reference \`paletteVars\` directly.

5. Pass palette value to the recipe: \`recipe({ size, variant, palette })\`

## Component Architecture Patterns

**Base UI primitives:** Components use \`@base-ui/react\` for headless behavior.

\`\`\`tsx
import { Button as ButtonPrimitive } from "@base-ui/react/button";
\`\`\`

**\`applyBaseSprinkles\` pattern:** Components that accept sprinkles as props use this utility:

\`\`\`tsx
type MyComponentProps = useRender.ComponentProps<"div"> & BaseSprinkles;

function MyComponent({ render, className, ...props }: MyComponentProps) {
  const [sprinkleClass, htmlProps] = applyBaseSprinkles(props);
  return useRender({
    defaultTagName: "div",
    render,
    props: { ...htmlProps, className: clsx(sprinkleClass, className) },
  });
}
\`\`\`

**Recipe variant pattern:** Styles use \`@vanilla-extract/recipes\`:

\`\`\`ts
export const componentRecipe = recipe({
  base: [baseSprinkles({ /* common */ }), style({ /* custom base */ })],
  variants: {
    size: { sm: baseSprinkles({ ... }), lg: style({ ... }) },
    variant: { solid: { ... }, outline: { ... } },
  },
});

// Usage:
const cn = clsx(componentRecipe({ size, variant }), sprinkleClass, className);
\`\`\`

## Icon Usage

Icons come from \`@phosphor-icons/react\`:

\`\`\`tsx
import { Sun, Moon, X, Check, ChevronDown } from "@phosphor-icons/react";

<Icon size="sm"><Star weight="bold" /></Icon>
\`\`\`

The \`Icon\` wrapper applies sizing via the \`size\` prop (maps to \`fontSize\` sprinkles).

## Writing New Components

1. Create \`ComponentName/\` directory under \`packages/core/src/components/\`.
2. Create three files: \`component-name.css.ts\` (Vanilla Extract styles), \`component-name.tsx\` (React component), \`index.ts\` (barrel re-export).
3. Add barrel re-export to \`packages/core/src/components/index.ts\`.
4. Naming: kebab-case file names, PascalCase component names, camelCase style exports.
5. Prefer \`@blenx-dev/core\` components over raw HTML when composing layouts.

## State Management

- **Global state**: Use zustand stores with \`create()\`, exported as hooks.
- **Scoped state**: Use \`createContext\` from \`zustand-utils\` with the Provider pattern.
- **No React Context + useReducer** for global/store state.
`;
