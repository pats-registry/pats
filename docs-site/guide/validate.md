---
title: Validate locally
description: Test and build a Pet before pushing or tagging it.
---

# Validate locally

Run checks from the root of your Pet repository.

## Run tests

```bash
kirn test
```

Fix every failure before publishing. Include new tests for behavior that your Pet adds.

## Build the Pet

```bash
kirn build pets
```

The build should complete without missing files, undeclared dependencies, or platform assumptions that are not documented.

## Inspect the release workflow

Confirm the generated file exists:

```bash
test -f .github/workflows/kirn-pets-release.yml
```

Review its trigger and permissions before pushing. The workflow runs from your Pet repository and publishes a tagged release artifact.

## Review the final diff

```bash
git status
git diff
```

Check that the diff contains only the Pet source, docs, tests, metadata, and intended workflow changes.

