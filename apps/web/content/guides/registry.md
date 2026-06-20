---
title: "Registry"
description: "Blenx uses a shadcn-style component registry. Components are copied into your project as source files—you own them, customize them, and version them alongside your app code."
category: "Advanced"
order: 6
keywords:
  - registry
  - CLI
  - shadcn
  - component distribution
  - dependency resolution
  - versioning
  - custom registry
  - source files
status: "stable"
navigation:
  group: guides
  order: 6
---


# Registry

Blenx is distributed through a shadcn-compatible registry.

Instead of installing components from an npm package, components are added directly to your project as source code. This approach gives you complete ownership over implementation, styling, and composition while still providing a simple installation experience.

## What Is a Registry?

A registry is a collection of component definitions that can be consumed by the shadcn CLI.

When you run:

```bash
npx shadcn@latest add @blenx/button
```

the CLI fetches the component definition from the Blenx registry, resolves its dependencies, and writes the source files directly into your application.

Unlike traditional npm packages, the resulting component becomes part of your codebase.

## Why Use a Registry?

Traditional UI libraries are consumed through package imports:

```tsx
import { Button } from "@some-library/react";
```

This approach is convenient but can become restrictive when your design system evolves.

Registry-based distribution takes a different approach.

When you install a component:

* The source code is copied into your project
* You can modify any implementation detail
* Styling is fully customizable
* Components can be refactored alongside your application
* There is no vendor lock-in

You own the code from day one.

## Registry vs npm Packages

### npm Package

```txt
Application
    │
    ▼
UI Library Package
```

Updates are automatic, but customization is often limited.

### Registry Installation

```txt
Application
    │
    ▼
Copied Component Source
```

Updates are manual, but ownership and flexibility are significantly higher.

## Dependency Resolution

Components rarely exist in isolation.

A Dialog may depend on:

* Button
* Surface
* Text
* Box
* Stack

The registry describes these relationships and the shadcn CLI resolves them automatically during installation.

You install one component and the required building blocks are added alongside it.

## Registry Categories

The Blenx registry contains several types of assets:

### Components

Reusable UI elements such as:

* Button
* Dialog
* Input
* Select
* DatePicker

### Blocks

Higher-level compositions intended for application screens and workflows.

Examples include:

* Authentication forms
* Empty states
* Error states
* Settings pages

### Primitives

Foundational layout and design system building blocks.

Examples include:

* Box
* Stack
* Grid
* Surface
* Container
* Text

## Component Ownership

One of the core principles of Blenx is ownership.

After installation:

* Components belong to your application
* You can rename them
* You can restructure directories
* You can replace implementation details
* You can adopt your own coding standards

The registry is a distribution mechanism, not a runtime dependency.

## Building Your Own Registry

The same registry architecture can be used internally within organizations.

Many teams create private registries to distribute:

* Design system components
* Internal application blocks
* Shared templates
* Company-specific workflows

Because Blenx follows the shadcn registry specification, components can be distributed using the same tooling and developer experience.

## When Should You Use a Registry?

Registry-based distribution works best when:

* Components require customization
* Teams maintain a design system
* Source ownership is important
* Applications evolve independently

For utilities, helper functions, and libraries that rarely change, traditional npm packages are often a better fit.

The registry model is optimized for UI components, where flexibility and ownership provide the greatest value.
