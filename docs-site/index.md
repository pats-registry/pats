---
layout: home
title: Pets Registry Docs
titleTemplate: Publish a Kirn Pet
description: End-to-end instructions for creating, releasing, and proposing Kirn Pets.
hero:
  name: Pets
  text: ship useful building blocks
  tagline: Create a Pet, release it from your own repository, and help the Kirn ecosystem discover it.
  actions:
    - theme: brand
      text: Start the guide
      link: /guide/start
    - theme: alt
      text: Fork workflow
      link: /guide/fork-and-clone
features:
  - icon: ①
    title: Create in your repo
    details: Use Kirn's Pet scaffold so your source, metadata, tests, and release workflow stay together.
    link: /guide/create-pet
    linkText: Create a Pet
  - icon: ②
    title: Release from GitHub
    details: Push your Pet, create a v* tag, and let the generated workflow build release artifacts.
    link: /guide/validate
    linkText: Validate and release
  - icon: ③
    title: Propose changes clearly
    details: Fork this registry, make a focused branch, and open a pull request with useful evidence.
    link: /guide/pull-request
    linkText: Open a pull request
---

<div class="step-card"><strong>Important:</strong> the <code>pets</code> repository is an index and contribution hub. Do not hand-edit <code>registry.toml</code> to add a Pet; the registry is populated through the release and maintainer workflow described below.</div>

## The complete path

```mermaid
flowchart LR
  A[Create Pet] --> B[Push your repo]
  B --> C[Tag v*]
  C --> D[Auto Build and Release]
  D --> E[Maintainer review]
  E --> F[Discover with kirn i]
```

Start with [Start here](/guide/start) for prerequisites, or jump directly to the [fork and clone workflow](/guide/fork-and-clone).

## What you will need

- Git and a GitHub account.
- A working Kirn toolchain.
- Permission to push to your fork.
- A Pet with a clear name, README, license, and runnable tests.
