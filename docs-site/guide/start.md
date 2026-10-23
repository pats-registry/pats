---
title: Start here
description: Understand the Pets registry and choose the correct contribution path.
---

# Start here

Pets are reusable packages for the Kirn ecosystem. A Pet is developed in its own repository, built and released from that repository, and then discovered through the Pets registry.

## Two contribution paths

### Publish a new Pet

Use this path when you have a package to share:

1. Create a Pet project with `kirn new pets <petname>`.
2. Push that project to your own GitHub repository.
3. Run its tests and build checks.
4. Create a `v*` tag.
5. Let the generated `kirn-pets-release.yml` workflow build and publish the release.
6. Follow the maintainer’s registration or organization-invitation instructions.

Continue with [Create your Pet](/guide/create-pet).

### Improve this registry repository

Use this path for documentation, registry tooling, workflow, or policy changes:

1. Fork [`pets-registry/pets`](https://github.com/pets-registry/pets).
2. Clone your fork and add the upstream remote.
3. Create a focused branch.
4. Make and test the change.
5. Push the branch to your fork.
6. Open a pull request against `pets-registry/pets:main`.

Continue with [Fork and clone](/guide/fork-and-clone).

## A rule worth remembering

Do not add a Pet by manually inserting an entry into `registry.toml`. The repository README defines it as an index-only file; Pet registration follows the release and maintainer workflow.
