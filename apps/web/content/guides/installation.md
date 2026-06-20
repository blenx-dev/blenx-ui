---
title: "Installation"
description: "Add Blenx to your project via the CLI registry. One command installs the component, its dependencies, and all required primitives."
category: "Getting Started"
keywords:
  - installation
  - CLI
  - registry
  - setup
  - dependencies
status: "stable"
navigation:
  group: guides
  order: 1
  link: "/docs/guides/installation"
---
# Installation

Blenx components are distributed through a registry and installed using the shadcn CLI. Components are copied directly into your project as source code, giving you full ownership over implementation, styling, and customization.

## Prerequisites

Before installing components, ensure your project has:

* React 18 or newer
* StyleX configured in your build pipeline
* A project initialized with the shadcn CLI

If you have not yet configured shadcn, follow the official setup process first.

## Configure the Blenx Registry

Add the Blenx registry to your `components.json` file:

```json
{
  "registries": {
    "@blenx": "https://blenx-ui.vercel.app/reg"
  }
}
```

Once configured, the shadcn CLI can discover and install components from the Blenx registry.

## Install Components

Add components directly from the registry:

```bash
npx shadcn@latest add @blenx/button
```

Install multiple components:

```bash
npx shadcn@latest add @blenx/button @blenx/dialog
```

The CLI automatically resolves registry dependencies and installs any required components, blocks, utilities, and primitives.

## What Gets Installed

When a component is added, the registry provides:

* Component source files
* Required primitives
* Registry metadata
* Supporting utilities
* Installation instructions

Files are written directly into your project and can be modified freely.

## Dependency Resolution

Blenx components are built from composable primitives.

For example, installing a Dialog may also install:

* Box
* Surface
* Text
* Stack
* Button

Dependencies are resolved automatically by the registry. You only install the component you need.

## Project Structure

A typical installation may generate files similar to:

```txt
components/
├── ui/
│   ├── button.tsx
│   ├── dialog.tsx
│   └── ...
├── blocks/
└── lib/
```

The exact structure depends on your shadcn configuration and registry settings.

Blenx does not require a specific directory layout.

## Updating Components

Registry-installed components are source snapshots.

Because you own the code, updates are not automatically applied. When a new version becomes available, rerun the install command and review the generated diff before applying changes.

```bash
npx shadcn@latest add @blenx/button
```

This ensures you stay in control of updates and customizations.

## Next Steps

Install your first component and explore the generated source code.

Then continue to:

* Components
* Blocks
* Theming
* Design Tokens

to learn how Blenx components are composed and customized.
