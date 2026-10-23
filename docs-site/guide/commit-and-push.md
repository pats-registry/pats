---
title: Commit and push
description: Create a branch, commit your Pet, and push it to GitHub.
---

# Commit and push

You can use this flow for your Pet repository or for a change to a fork of the registry.

## 1. Create a branch

```bash
git switch -c add-my-pet
```

Choose a name that describes the change, such as `docs/clarify-installation` or `pet/add-my-pet`.

## 2. Commit the change

```bash
git add .
git commit -m "feat: add my-pet"
```

Keep commits focused. Never commit a GitHub token, private key, password, or local build cache.

## 3. Push to your fork

For a fork of the registry:

```bash
git push -u origin add-my-pet
```

For your own Pet repository, push to the repository you created:

```bash
git remote add origin https://github.com/YOUR-USERNAME/my-pet.git
git push -u origin main
```

## 4. Publish a release tag

After your Pet is on GitHub and checks pass, create a SemVer-style tag:

```bash
git tag v0.1.0
git push origin v0.1.0
```

The Pet repository’s workflow listens for `v*` tags and builds the release.

