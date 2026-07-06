---
title: "Avatar"
description: "Avatar displays user profile images with automatic fallback to initials when the image fails to load or is not provided."
navigation:
  group: components
  order: 5
---

## Overview

Avatar displays user profile images with automatic fallback to initials when the image fails to load or is not provided. It is built on Base UI Avatar primitives, which handle image loading states and fallback rendering accessibly. Use Avatar to represent people in user lists, comment threads, team grids, and chat interfaces.

## Demo

<DemoRenderer registryName="avatar" />

## Installation

<Installation registryName="avatar" />

## Usage

Avatar is a composite of `Avatar`, `AvatarImage`, and `AvatarFallback` sub-components. Wrap `AvatarImage` with a `src` and `alt` prop inside the root `Avatar`, and provide `AvatarFallback` as a child to display initials or an icon when the image is loading or fails. The `size` prop on `Avatar` maps to pre-defined dimensions (`sm`, `md`, `lg`, `xl`) with corresponding font sizes. The `radius` prop controls border radius rounding. The component handles the image loading lifecycle internally — it shows the fallback while the image loads, transitions to the image on success, and reverts to the fallback on error.

## API Reference

<ApiReference />

## Limitations

Avatar does not support image cropping or editing workflows. It accepts pre-processed images only. The component does not include a status indicator or presence dot — integrate with your presence system separately.
