---
title: "Field"
description: "Field wraps form controls with label, help text, and error message layout, providing consistent form structure and accessible associations."
navigation:
  group: components
  order: 22
---

## Overview

Field wraps form controls with label, help text, and error message layout, providing consistent form structure and accessible associations. It acts as the single source of truth for form field metadata — every interactive input in a form should be wrapped in Field to ensure proper labeling and validation feedback. Use Field everywhere you place a form control — text inputs, selects, checkboxes, radio groups, date pickers, and custom form widgets.

## Demo

<DemoRenderer registryName="field" />

## Installation

<Installation registryName="field" />

## Usage

Field is a collection of sub-components: `Field`, `FieldLabel`, `FieldItem`, `FieldDescription`, `FieldError`, `FieldControl`, and `FieldValidity`. Wrap form controls in `Field` and use `FieldLabel` for the accessible label, `FieldItem` to wrap the control, `FieldDescription` for help text, and `FieldError` for validation messages. The `required`, `invalid`, and `valid` props are passed to `Field` directly (inherited from Base UI Field primitives), which sets `aria-required`, `aria-invalid`, and other ARIA attributes on the associated control via `FieldControl`.

## API Reference

<ApiReference />

## Limitations

Field is a thin wrapper over Base UI Field primitives and relies on the Base UI validation system. The component does not handle form-level validation logic or submission — integrate with your form library for that. Field does not manage field grouping for radio groups or checkbox groups beyond wrapping each individual control — use a parent container with a group label for grouped controls.
