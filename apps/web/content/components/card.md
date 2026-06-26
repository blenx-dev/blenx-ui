---
title: "Card"
description: "Card is a surface-level container that groups related content and actions into a single visual unit."
navigation:
  group: components
  order: 11
---

## Overview

Card is a surface-level container that groups related content and actions into a single visual unit. It provides sub-components for header, body, footer, title, and description, enabling structured layouts without manual arrangement. Use cards to present discrete pieces of content — user profiles, dashboard widgets, product listings, and detail panels.

## Demo

<DemoRenderer registryName="card" />

## Installation

<Installation registryName="card" />

## Source Code

<SourceCode registryName="card" />

## Usage

Wrap content in `Card`, then compose with `CardHeader`, `CardBody`, and `CardFooter` as needed. `CardTitle` and `CardDescription` go inside `CardHeader` to establish the card's heading hierarchy and supplementary text. The header typically contains the title and any primary actions, the body holds the main content, and the footer houses secondary actions or metadata.

`Card` renders a `Surface` with `variant="sunken"`, a border, and `p="medium"` padding by default. `CardHeader`, `CardBody`, and `CardFooter` also apply `p="medium"` padding automatically. Pass the `variant` prop to switch between surface styles — `"default"`, `"outline"`, `"raised"`, or `"sunken"`. Set `interactive` to add hover and focus-visible styles for clickable cards. All sub-components forward their underlying element props (`BoxProps` for header/body, `HStackProps` for footer, `TextProps` for title/description), giving you access to spacing, layout, and color sprinkles.

## Composition

Card is a container for virtually any other component. Use it with `DataTable` inside the body for data-dense cards, with `Field` for form cards, and with `Button` in the footer for action cards. Multiple cards should be laid out using `Grid` for responsive columns or `Stack` for vertical lists. Card composes with `Badge` in the header or footer for status indicators, and with `Avatar` in the header for user cards. `CardFooter` renders an `HStack`, so children are laid out in a horizontal row by default — use `justify` and `gap` props to control alignment and spacing. Avoid nesting cards inside cards — the visual hierarchy becomes ambiguous and border stacking looks unpolished.

## Design Guidelines

Card renders with a border and the `"sunken"` surface variant by default, providing a subtle background that defines boundaries without competing with content. Use `variant="raised"` to add elevation for interactive or featured cards. The `interactive` prop adds hover background and focus-visible outline styles for clickable cards — combine it with `variant="raised"` for a lift-on-hover effect. Padding (`p="medium"`) is applied consistently across `Card`, `CardHeader`, `CardBody`, and `CardFooter`. Override padding on individual sub-components by passing `p` or `padding` props. The title-to-description spacing follows the `Text` component's internal rhythm, tighter than the card's outer padding to reinforce the heading hierarchy.

## API Reference

<ApiReference />

## Limitations

Card does not support collapsible or expandable sections internally — use Accordion within the body for that pattern. Cards have a fixed layout within their container; they do not reflow content based on viewport beyond standard responsive breakpoints. Card also does not manage overflow behavior — if content exceeds the card bounds, implement scrolling or truncation manually. Cards are not interactive by default; pass the `interactive` prop to add hover background and focus-visible styles, then wire up click handlers externally.
