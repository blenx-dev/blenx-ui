# StyleX Rules

This project follows the conventions in `stylex-authoring.md`.

## Import Pattern for UI Components

Use barrel imports for components. The package's `exports` field resolves these to the pre-built dist bundle (no Stylex source processing needed):

```tsx
import { Container, Text, Surface, VStack, HStack, Separator, Box } from "@blenx-dev/ui";
import { Spinner } from "@blenx-dev/ui";
```

## Import Pattern for Theme Tokens

Import theme tokens from `@blenx-dev/ui/theme/` — these resolve to source files via tsconfig paths for type safety and Stylex processing:

```tsx
import { theme } from "@blenx-dev/ui/theme/contract.stylex";
import { fontSize, spacing, lineHeight, fontWeight, fonts, letterSpacing, borderRadius } from "@blenx-dev/ui/theme/tokens.stylex";
```

Use these token vars in `stylex.create()` instead of CSS `var(--xxx)` strings. Only use `var(--xxx)` when a token is not defined (e.g. animation names).

Mapping guide:
- `var(--font-mono)` → `fonts.mono`
- `var(--font-size-small)` → `fontSize.small`
- `var(--leading-relaxed)` → `lineHeight.relaxed`
- `var(--contentSecondary)` → `theme.contentSecondary`
- `var(--font-weight-semibold)` → `fontWeight.semibold`
- `var(--space-4)` → `spacing["4"]`
- `var(--border)` → `theme.border`
- `var(--tracking-tight)` → `letterSpacing.tight`

When a CSS var is used inside a shorthand (e.g. `1px solid var(--border)`), split into longhand properties (`borderWidth`, `borderStyle`, `borderColor`).

## Import Pattern for Local Components

Use the `@` alias or relative paths:

```tsx
import { DocsLayout } from "@/components/docs-layout";
import { Header } from "@/components/header";
```

## Export Pattern

- Prefer **named exports** — use `export { name }` at the end of the file.
- Default exports only when mandatory (e.g., TanStack Router `createFileRoute` components must export `Route` as a named const).
- All exports must be at the end of the file.
