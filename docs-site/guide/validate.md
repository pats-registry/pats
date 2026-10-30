---
title: Validate locally
description: Test and build a Pat before pushing or tagging it.
---

# Validate locally

Run checks from the root of your Pat repository.

## Run tests

```bash
kirn test
```

Fix every failure before publishing. Include new tests for behavior that your Pat adds.

## Build the Pat

```bash
kirn build pats
```

The build should complete without missing files, undeclared dependencies, or platform assumptions that are not documented.

## Inspect the release workflow

Confirm the generated file exists:

```bash
test -f .github/workflows/kirn-pats-release.yml
```

Review its trigger and permissions before pushing. The workflow runs from your Pat repository and publishes a tagged release artifact.

## Review the final diff

```bash
git status
git diff
```

Check that the diff contains only the Pat source, docs, tests, metadata, and intended workflow changes.

