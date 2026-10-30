---
title: Fork and clone
description: Fork the Pats registry, clone your fork, and configure upstream.
---

# Fork and clone

This is the repeatable starting point for a pull request to the registry repository.

## 1. Fork on GitHub

Open the [Pats registry repository](https://github.com/pats-registry/pats), select **Fork**, keep your account as the owner, and create the fork.

Your fork will look like:

```text
https://github.com/YOUR-USERNAME/pats
```

Replace `YOUR-USERNAME` in the commands below with your GitHub username.

## 2. Clone your fork

```bash
git clone https://github.com/YOUR-USERNAME/pats.git
cd pats
```

## 3. Add the official repository as upstream

```bash
git remote add upstream https://github.com/pats-registry/pats.git
git remote -v
```

You should see:

- `origin` pointing to your fork.
- `upstream` pointing to `pats-registry/pats`.

## 4. Start from current main

```bash
git fetch upstream
git switch main
git reset --hard upstream/main
```

Only use `reset --hard` here if you have no uncommitted work on your local `main` branch. Create a branch before making changes.

