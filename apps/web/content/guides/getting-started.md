---
title: "Getting Started"
description: "Install Blenx, configure your environment, and build your first component in under five minutes."
category: "Getting Started"
order: 1
keywords:
  - installation
  - setup
  - registry
  - CLI
  - first component
  - dependency chain
status: "stable"
navigation:
  group: guides
  order: 1
---
## Overview

Blenx is a StyleX-powered React component library distributed through a registry-first architecture. Components are installed directly into your application as source code using the shadcn CLI.

Unlike traditional component libraries, Blenx does not require you to import components from a runtime package. When you add a component, the source files are copied into your project, giving you full ownership over implementation, styling, and composition.

## Prerequisites

Before installing components, ensure your project has:

* React 18 or newer
* StyleX configured in your build pipeline
* The shadcn CLI installed

Blenx components are designed around StyleX and its compile-time styling model.

## Configure the Registry

Add the Blenx registry to your `components.json` configuration:

```json
{
  "registries": {
    "@blenx": "https://blenx-ui.vercel.app/reg"
  }
}
```

Once configured, the shadcn CLI can discover and install components directly from the Blenx registry.

## Install Your First Component

Install a component using the shadcn CLI:

```bash
npx shadcn@latest add @blenx/button
```

Install multiple components:

```bash
npx shadcn@latest add @blenx/button @blenx/dialog
```

The CLI automatically resolves registry dependencies and installs any required primitives.

## What Gets Installed

When a component is added, the registry provides:

* Component source code
* Required primitives
* Theme dependencies
* Registry metadata
* Installation instructions

The resulting files are written directly into your project and can be modified freely.

## Why Registry-First?

Blenx follows the same ownership model popularized by shadcn/ui:

* No runtime component dependency
* Full source ownership
* Easy customization
* No vendor lock-in
* Simple upgrades through registry updates

Every component becomes part of your codebase rather than a black-box dependency.

## Next Steps

Install a component and explore the generated source files.

Then continue to:

* Theming
* Design Tokens
* Primitives
* Registry Architecture

to learn how Blenx components are composed and customized.
