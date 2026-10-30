---
title: Start here
description: Understand the Pats registry and choose the correct contribution path.
---

# Start here

Pats are reusable packages for the Kirn ecosystem. A Pat is developed in its own repository, built and released from that repository, and then discovered through the Pats registry.

## Two contribution paths

### Publish a new Pat

Use this path when you have a package to share:

1. Create a Pat project with `kirn new pats <patname>`.
2. Push that project to your own GitHub repository.
3. Run its tests and build checks.
4. Create a `v*` tag.
5. Let the generated `kirn-pats-release.yml` workflow build and publish the release.
6. Follow the maintainer’s registration or organization-invitation instructions.

Continue with [Create your Pat](/guide/create-pat).

### Improve this registry repository

Use this path for documentation, registry tooling, workflow, or policy changes:

1. Fork [`pats-registry/pats`](https://github.com/pats-registry/pats).
2. Clone your fork and add the upstream remote.
3. Create a focused branch.
4. Make and test the change.
5. Push the branch to your fork.
6. Open a pull request against `pats-registry/pats:main`.

Continue with [Fork and clone](/guide/fork-and-clone).

## A rule worth remembering

Do not add a Pat by manually inserting an entry into `registry.toml`. The repository README defines it as an index-only file; Pat registration follows the release and maintainer workflow.
