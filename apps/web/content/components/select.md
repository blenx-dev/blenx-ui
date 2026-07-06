---
title: "Select"
description: "Select presents a list of options from which the user chooses one value."
navigation:
  group: components
  order: 35
---

## Overview

Select presents a list of options from which the user chooses one value. It provides a custom dropdown implementation with option groups, placeholder text, disabled states, and validation feedback. Use selects when the user must choose from multiple options (typically more than five) and space constraints make radio buttons or segmented controls impractical.

## Demo

<DemoRenderer registryName="select" />

## Installation

<Installation registryName="select" />

## Usage

Select renders a trigger button with a dropdown menu built on Base UI Select primitives. It supports `<optgroup>` for categorizing options with group labels via `SelectGroup` and `SelectGroupLabel`. The `placeholder` displays instructional text when no option is selected. Validation styling mirrors the Input component's error state treatment. Sub-components include `SelectRoot`, `SelectLabel`, `SelectTrigger`, `SelectValue`, `SelectIcon`, `SelectPopup`, `SelectItem`, `SelectGroup`, and `SelectGroupLabel`.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["ArrowUp", "ArrowDown", "Enter", "Escape"]} aria={["role", "aria-expanded", "aria-labelledby"]} />

## Limitations

Multi-select is not supported; for multiple selections, use a Checkbox group or a Tag-based multi-select pattern. Select does not support search or filtering of options, making it unsuitable for lists exceeding 30 items without an external search mechanism.
