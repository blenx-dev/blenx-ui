---
title: "Design Guidelines"
description: "Comprehensive design and visual guidelines for the Blenx component library — covering palette tokens, typography, spacing, layout, and component-specific rules."
category: "Fundamentals"
order: 3
keywords:
  - design guidelines
  - palette
  - visual language
  - spacing
  - typography
  - color tokens
---

## Overview

This document consolidates the design guidelines and palette choices that govern all Blenx UI components. These rules ensure visual consistency across every surface, control, and layout in the system.

## Color System

### Intent Palette

Every component that conveys meaning uses a shared set of intent colors:

| Intent  | Usage                                                                  |
| ------- | ---------------------------------------------------------------------- |
| Primary | Brand color for primary actions, active/selected states, brand accents |
| Success | Positive feedback, completed states, growth indicators                 |
| Warning | Caution, non-critical alerts, medium-priority states                   |
| Danger  | Destructive actions, errors, critical alerts                           |
| Info    | Informational states, neutral announcements                            |

**Rules:**

- Danger color (red) must only be used for destructive actions to preserve its semantic weight.
- Success, warning, danger, and info map directly to Alert component intent colors for cross-component consistency.
- Active segment colors in segmented controls and selected item highlights use the primary intent.

### Emphasis Levels

Visual hierarchy is communicated through color emphasis rather than size alone:

- **High emphasis** — primary content, headings, active controls
- **Medium emphasis** — secondary text, inactive controls
- **Low emphasis** — placeholders, disabled states, borders on subtle surfaces
- **Lowest emphasis** — track backgrounds, surface tints, disabled fills

**Rules:**

- Disabled text and controls reduce opacity uniformly — never remove content entirely, users need to understand the layout.
- Icon color matches the semantic intent of the surrounding text or control.
- Inactive tabs and segments use medium-emphasis text with no background treatment.

### Surface Colors

The surface system defines a stack of background layers:

| Variant  | Visual          | Use Case                             |
| -------- | --------------- | ------------------------------------ |
| Sunken   | Lowest emphasis | Card backgrounds, secondary surfaces |
| Default  | Page background | Main page, standard surface          |
| Raised   | Elevated        | Interactive cards, hovered states    |
| Elevated | Highest         | Modals, drawers, popovers, menus     |

**Rules:**

- Background color, not shadow, is the primary differentiator between surface levels in dark themes where shadows are less perceptible.
- All surface variants use the system border-radius scale consistently.
- The `elevation` prop corresponds to shadow depth — zero for flat surfaces, increasing in blur and spread for higher values.

### Borders

- Border width follows the `borderWidth` theme token scale.
- Border color uses the `border` or `borderSubtle` token depending on the component's emphasis level.
- Subtle borders define boundaries without competing with content.
- Focus rings use a 2px offset outline with the theme's `focusRing` token and must never be removed — they are critical for keyboard accessibility.

## Typography

### Type Scale

The type scale uses a modular scale with consistent ratios between levels:

| Token     | Typical Usage       | Weight  |
| --------- | ------------------- | ------- |
| `h1-h6`   | Headings            | 600-700 |
| `body1`   | Primary body text   | 400     |
| `body2`   | Secondary body text | 400     |
| `body3`   | Compact body text   | 400     |
| `caption` | Labels, metadata    | 400-500 |

**Rules:**

- Line height decreases as font size decreases: headings use tighter line height, body text uses more generous line height for readability.
- Font weight follows convention: headings use bold (600-700), body text uses regular (400), captions may use medium (500).
- Color contrast against all possible background surfaces must meet WCAG AA standards.
- Do not reduce opacity on text for visual effect — use the correct color token instead.

## Spacing & Sizing

### Spacing Scale

All components use a shared spacing scale based on a 4px/8px grid:

| Token     | Value |
| --------- | ----- |
| `none`    | 0     |
| `xxsmall` | 2px   |
| `xsmall`  | 4px   |
| `small`   | 8px   |
| `medium`  | 12px  |
| `large`   | 16px  |
| `xlarge`  | 64px  |
| `huge`    | 96px  |
| `massive` | 144px |

**Rules:**

- Padding inside components follows a consistent rhythm — use the same token for header, body, and footer within a component.
- Spacing gaps follow the 4px/8px grid system used throughout the theme.
- The space between related controls should be tighter than the space between unrelated groups.

### Sizing

- Button height is consistent at each size tier across the entire application — all medium buttons are the same height regardless of label length.
- Icon-only buttons have the same dimensions as text buttons at the same size to maintain alignment in toolbars.
- Input heights match Button heights of the corresponding size, ensuring alignment when the two appear side by side.
- Avatars should be uniformly sized within a given context.
- Touch targets must be at least 44x44 CSS points for interactive elements.

## Layout

### Grid & Alignment

- Grid gaps follow the theme's spacing scale for visual consistency with other layout components.
- Column counts should decrease predictably at breakpoints — a four-column grid becomes three, then two, then one.
- Items in a grid should have consistent min-widths to prevent single-column items from becoming too wide on large screens.
- Alignment properties should be used intentionally to create visual order, not as defaults for every grid.
- Responsive props follow the same breakpoint order: `base` → `sm` (640px) → `md` (768px) → `lg` (1280px) → `xl` (1536px).

### Containers

- Container has no visible styles of its own — no background, border, or shadow.
- On mobile viewports, Container effectively has no max-width constraint, allowing content to use the full screen width minus padding.
- Box introduces no visual styles by default; it is a transparent wrapper that only applies what you explicitly define.

### Stack

- Stack uses no background, border, or padding of its own — it is purely a layout container.
- Default alignment is `center` for HStack (aligning items vertically) and `stretch` for VStack (making children fill the cross-axis width).
- Wrapped HStacks should have consistent row-gap and column-gap values.

## Interaction & Motion

### Animation Timing

| Context                 | Duration   |
| ----------------------- | ---------- |
| Slide-in (sheet/drawer) | 200-300ms  |
| Collapse / expand       | 200ms      |
| Switch toggle           | 200ms      |
| Dialog open / close     | 200ms      |
| Indeterminate spinner   | Continuous |

**Rules:**

- All animations use CSS transforms rather than animating layout properties for better performance.
- Animation speed for indeterminate progress should be calm — fast animations create a sense of urgency.
- Toggle state transitions should be instant since they represent immediate mode changes.

### Hover & Focus

- Hover and focus states share the same visual treatment so mouse and keyboard users see the same feedback.
- Focus outlines must be visible and high-contrast, not relying solely on color changes.
- The active state is a slightly darker shade of the hover background.
- Disabled states reduce opacity uniformly and suppress all interactive feedback.

### Elevation

- Elevation (box-shadow) is reserved for interactive cards that lift on hover; static informational cards use a border instead.
- Menu, popover, command palette, select dropdown, and sheet surfaces all use elevated elevation tokens with subtle shadows.
- The backdrop for modals, dialogs, and drawers darkens the page content to focus attention on the overlay.

## Component-Specific Guidelines

### Accordion

Use the accordion as a scannable content structure rather than a content-hiding mechanism. Distinguish between collapsed and expanded states through chevron rotation and subtle background or border changes on the active item. Padding inside panels should be generous enough to accommodate content without feeling cramped when expanded. Maintain consistent spacing between items — typically equal to or greater than the internal padding of a panel to reinforce the grouping.

### Alert

Alerts occupy the full width of their container with sufficient padding to distinguish them from surrounding content. The left border accent and icon color match the intent. Dismissible alerts place the close button in the top-right corner, visually separated from the message content. Text contrast within alerts must meet WCAG AA standards.

### Alert Dialog

The backdrop should be darker and less transparent than a standard dialog backdrop to convey urgency. Center the dialog in the viewport and cap its width to prevent long line lengths. The confirm button aligns to the right, following the action–cancel order convention. Use danger color for the confirm button only when the action is destructive.

### Autocomplete

The popover should match the input width for a seamless visual connection. Highlight the matching substring in each suggestion. The loading state shows a subtle spinner or skeleton inside the popover. Keep the suggestion list to five to eight visible items.

### Avatar

Avatars should be uniformly sized within a given context. The status indicator is a solid circle with a subtle ring that matches the background. Group overlap exposes 60–70% of each adjacent avatar. Initials use the same font weight as surrounding text with sufficient contrast against the background fill.

### Badge

Badge overlap should be intentional but not obstructive. Text badges require more horizontal padding than count badges. Border radius is fully rounded for count badges (pill shape) but slightly less rounded for text badges. Maintain consistent badge placement across the application.

### Breadcrumbs

The separator should be visually lightweight to avoid competing with links. The current page label uses the same text color as the page heading but a lighter font weight. Collapsed items expand the full trail on click or hover. Ensure interactive items have a visible hover state and meet minimum touch target size on mobile. The entire component should occupy no more than 40px of vertical space.

### Button

Button height is consistent at each size tier across the entire application. The loading spinner is a circular indeterminate animation centered where the start icon would appear. Focus outlines must be visible and high-contrast. Icon-only buttons match text button dimensions at the same size. Disabled state opacity is uniform across all variants.

### Calendar

The date grid uses a clean, scannable layout with consistent cell sizes. Today's date is visually distinct (outlined circle) without being confused with the selected date. Selected dates use the primary intent color; range selections use a lighter tint with emphasized endpoints. Disabled dates have reduced opacity without disappearing entirely. Month navigation controls are prominent but not overpowering.

### Card

Card renders with a border and the `"sunken"` surface variant by default. Use `variant="raised"` for elevation on interactive or featured cards. The `interactive` prop adds hover background and focus-visible styles. Padding (`p="medium"`) is applied consistently across `Card`, `CardHeader`, `CardBody`, and `CardFooter`. The title-to-description spacing follows the Text component's internal rhythm, tighter than the card's outer padding.

### Checkbox

The checkbox box should be at least 20px × 20px at the default size. Checked and indeterminate states use the primary intent color with a white checkmark or dash. Focus outlines appear around the entire control including the label. Disabled checkboxes reduce opacity but remain legible. Validation error styling wraps both the checkbox and its label.

### Color Picker

The popover should be wide enough to comfortably accommodate the saturation panel, hue slider, and input fields. Preset swatches are arranged in a grid with equal spacing and a visible border for white or light colors. The saturation-brightness panel has a crosshair cursor. All interactive elements within the popover must be keyboard accessible.

### Color Swatch

The circular shape has a consistent diameter relative to accompanying text. Borders on light colors use a neutral gray that provides contrast without competing. Multiple swatches in a row have equal gaps matching the swatch radius. The swatch maintains a 1:1 aspect ratio.

### Combobox

The input clearly shows focus and open popover state with a visible outline or ring. Filtered options highlight the matching substring. Selected items in multi-select mode use the same chip styling as Badge with a dismiss button. The popover matches the input width. The option list scrolls to keep the active option visible during keyboard navigation.

### Command (Palette)

The command palette is centered on screen with a backdrop that dims the underlying content. The search input is auto-focused when opened. Search results scroll within a fixed-height container — typically six to eight visible items. Active item highlighting uses the primary intent color. Group headers use uppercase, smaller, or lighter text. Keyboard shortcut display is right-aligned within each item.

### Container

Container has no visible styles of its own — no background, border, or shadow. It is purely a layout constraint tool. The space between the container edge and the viewport edge is consistent across all pages. On mobile viewports, Container has no max-width constraint, allowing content to use the full screen width minus padding.

### Data Table

Table rows use alternating or subtle hover backgrounds for readability. Column headers are sticky when scrolling vertically. Sort indicators clearly show the active sort direction with an arrow icon. Selected rows have a distinct background color that is visible but not distracting. Pagination controls show the total count and allow direct page input. The page size selector offers options appropriate to the data density — 10, 25, 50, and 100 are standard. Loading states preserve the table structure to prevent layout shift.

### Date Picker

The input field clearly shows its purpose with a calendar icon on the right side. The selected date is formatted in a human-readable pattern consistent with the rest of the application. The popover arrow points to the input field. The calendar aligns with the input's left edge or center depending on available space. The "Today" button is prominent for quick reset navigation.

### Dialog

The backdrop is semi-transparent — dark enough for separation but light enough to perceive page context. Dialog content has consistent padding across header, body, and footer. The header border-bottom and footer border-top visually separate content sections. The close button is positioned in the top-right corner of the dialog header. The dialog is vertically centered with a maximum height that leaves margin from the viewport edges.

### Drawer

The drawer slides in with a smooth animation over 200–300ms. The backdrop is present for right, left, and bottom drawers but can be omitted for top drawers used as notification panels. A subtle border or shadow on the leading edge helps it feel like a surface sliding over the page. The close button is in the header, consistent with Dialog placement. On mobile, drawers typically use the full viewport width or height minus safe area insets.

### Field

Labels use a font weight distinct from the input text — typically semibold or medium. The label and control are vertically aligned when using horizontal layout. Error messages use the danger intent color with an icon and appear in the same position for every field to prevent layout shift. Help text uses a smaller font size and a muted color. The required indicator (asterisk) is the same color as the label.

### Grid

Grid gaps follow the theme's spacing scale. Column counts decrease predictably at breakpoints — a four-column grid becomes three, then two, then one. Items have consistent min-widths to prevent single-column items from becoming too wide on large screens. The grid does not introduce scrollbars unless explicitly configured. Alignment properties are used intentionally to create visual order.

### Icon

Icons align with the baseline of adjacent text. The icon bounding box matches the text line height at each size tier. Use consistent stroke weight across the same interface tier. Icon color matches the semantic intent of the surrounding text or control. Disabled icons use the same reduced opacity as disabled text. The clickable area of an icon-only button is larger than the icon itself, achieved through the parent Button's padding.

### Icon Button

Icon buttons inherit the same color mapping as text buttons in the variant system. The default state uses a transparent background. Hover and active states apply a subtle background fill. Danger variants use red tones only for destructive actions. Disabled icon buttons reduce opacity uniformly and suppress all interactive feedback.

### Input

Input height and padding match Button heights of the corresponding size, ensuring side-by-side alignment. Validation colors use the same token palette as Alert components. Focus rings use a 2px offset outline with the theme's focus-ring color and must never be removed.

### Input Group

The group container uses the same border radius and stroke color as the inner Input, with adornments visually inset to avoid doubling borders. The height is determined by the Input size prop. Padding inside adornments is tighter than the Input itself — typically 8px horizontal versus 12px for the input text area.

### Menu

The menu surface uses elevated elevation tokens with a subtle shadow. Item height matches the medium button height. Hover and focus states share the same visual treatment. The active state is a slightly darker shade of the hover background.

### OTP Field

Each slot is large enough to display the full character without clipping. Spacing between slots is generous enough to distinguish individual positions while keeping the group visually cohesive. Focus ring treatment applies only to the active slot using the system's focus ring token. Completed slots maintain their default appearance to avoid implying a success state prematurely.

### Popover

The popover surface is visually distinguishable from page content through elevation shadow and background color, but does not obscure the trigger. Corner radius matches the surface component's default. The arrow indicator, when enabled, points to the center of the trigger. Padding inside the popover follows the surface padding scale.

### Progress

The track color uses the lowest emphasis token to avoid competing with content. The fill color uses the brand or success token for positive connotation. Animation speed for indeterminate mode should be calm. The corner radius of both track and fill match. Border radius on the bar should be half the height for a pill shape.

### Radio

The radio indicator uses a filled circle for selected state and an empty circle for unselected state. Label text is placed to the right of the indicator in left-to-right locales. Disabled radios reduce opacity and suppress the hover state. Focus-visible styles appear on the radio indicator, not the label.

### Scroll Area

The scrollbar thumb uses a low-emphasis color token with rounded corners. Track width is narrow — 6px to 8px — to minimize content occlusion. The hover state of the thumb is slightly wider and more opaque. The corner where horizontal and vertical scrollbars meet is visually handled.

### Segmented Control

The active segment uses a surface color with sufficient contrast against inactive segments. Inactive segments use a low-emphasis background with medium-emphasis text. The border between segments remains visible in both light and dark themes. The overall height matches the corresponding button size. The control fills its container width when `fullWidth` is set.

### Select

The chevron icon uses the system's low-emphasis color to avoid competing with the selected value. The custom dropdown surface elevation matches Menu and Popover. Option height is calibrated for comfortable touch targeting at the medium size. The focus ring applies to the trigger element and matches the Input focus ring treatment.

### Separator

The separator line width follows the theme's border-width token. Color uses the border color token at the appropriate emphasis level. Horizontal separators span the full width of their container by default. Vertical separators match the height of their container or a specified length. Margins follow the spacing scale relative to the content it divides.

### Sheet

The sheet surface uses the highest elevation token. The slide-in animation completes in 200–300ms. The backdrop uses a semi-transparent overlay. Panel width follows the spacing scale: small for compact forms, medium for standard content, large for content-heavy panels. Left and right sheets use consistent width across the application.

### Slider

The track height is thin relative to the thumb size so the thumb is the primary interactive target. The filled portion uses the brand color; the unfilled portion uses a low-emphasis surface color. The thumb is at least 44×44 points for touch interaction. Focus-visible rings appear around the thumb during keyboard interaction. Tick marks align with step positions.

### Spinner

The spinner color uses the current text color by default, adapting to the parent element's color context. Stroke width is proportional to size. Animation uses CSS transforms rather than animating SVG attributes. The spinner must not flicker or pulse — only rotation is permitted. The component has no background or padding of its own.

### Splitter

The handle width is at least 8px for cursor-based interaction, wider for touch targets. The grip indicator is subtle — a small ridge or dotted line centered in the handle area. The handle hover state uses a highlight color. Panel backgrounds can optionally differ to visually distinguish content areas. The collapse/expand animation completes within 200ms.

### Stack

Stack uses no background, border, or padding of its own. Spacing gaps follow the 4px/8px grid system. Wrapped HStacks have consistent row-gap and column-gap values. Default alignment is `center` for HStack and `stretch` for VStack.

### Surface

Surface variants map to the theme's layer system. Border radius follows the system scale consistently. The `elevation` prop corresponds to shadow depth — zero for flat surfaces, increasing in spread and blur for higher values. Background color, not shadow, is the primary differentiator between surface levels in dark themes.

### Switch

The switch track is wide enough to clearly accommodate the thumb in both positions. The checked state uses the brand color for the track; the unchecked state uses a low-emphasis neutral color. The thumb is always white or the surface background color. The transition animation completes in 200ms. The label uses the body text size and is positioned to the right of the switch in left-to-right layouts.

### Table

Row height is consistent within the table with sufficient padding for touch targeting in action columns. Horizontal borders between rows provide clear separation without the visual weight of vertical borders. Header cells use a subtle background that distinguishes them from data rows. The sort indicator icon uses the system's low-emphasis color when inactive and the brand color when the column is actively sorted.

### Tabs

The active tab indicator can be an underline, a filled background, or an outlined treatment — but it must be consistent across all tabs in the application. The indicator animates smoothly when switching between tabs. Inactive tabs use lower-emphasis text color and no background treatment. The tab panel has sufficient padding to feel distinct from the tab list. Horizontal tabs are preferred for most layouts.

### Text

The type scale uses a modular scale with consistent ratios between levels. Line height decreases as font size decreases. Font weight follows convention: headings use bold (600-700), body text uses regular (400), captions may use medium (500). Color contrast against all possible background surfaces meets WCAG AA standards.

### Textarea

The textarea height is sufficient to display at least three lines of text at the chosen font size. Padding and font size match the Input component of the corresponding size. The resize handle is visible and located at the bottom-right corner. Validation colors and focus ring treatment match the Input component exactly.

### Toggle

The pressed state uses a filled or colored treatment that clearly differentiates from the unpressed outline or ghost treatment. The transition between states is instant since it represents an immediate mode change. Toggle height and width match adjacent toolbar buttons. The active state is visually contained within the button bounds.

### Toggle Group

Toggle Group distributes space evenly among toggles for a balanced appearance. Spacing between toggles is tighter than spacing between groups to visually associate related toggles. Selected toggles use a consistent active treatment across the group. The group container has no background or border — visual grouping is achieved through proximity and consistent heading placement.
