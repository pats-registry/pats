---
title: Registry rules
description: Understand what registry.toml means and what must not be edited by hand.
---

# Registry rules

The `pats` repository is the name-to-repository index for Kirn package discovery.

## What belongs here

- `registry.toml` — registry metadata and index state.
- `README.md` — repository-level explanation.
- Contribution, policy, and documentation changes.
- Maintainer-managed registry automation.

## What does not belong here

- Pat source code.
- A copied release workflow for every Pat.
- Secrets or release credentials.
- Hand-edited Pat entries that bypass the release workflow.

The Pat repository owns its source, tests, metadata, release workflow, and tagged artifacts. The registry resolves names to those repositories and release outputs.

## Install forms

```bash
kirn i <name>
kirn i <user>/<repo>
kirn i https://git-host/<user>/<repo>
```

The exact resolver behavior follows the Kirn toolchain version you are using.

