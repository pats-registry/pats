---
title: Open the pull request
description: Submit a clear pull request from your fork to the official Pats registry.
---

# Open the pull request

Use a pull request when you are proposing a change to `pats-registry/pats`.

## 1. Open GitHub

Visit your pushed branch:

```text
https://github.com/YOUR-USERNAME/pats/tree/add-my-pat
```

GitHub normally shows a **Compare & pull request** button. Select it, or open the **Pull requests** tab and choose **New pull request**.

## 2. Select the repositories

Set the comparison to:

- Base repository: `pats-registry/pats`
- Base branch: `main`
- Head repository: `YOUR-USERNAME/pats`
- Compare branch: `add-my-pat`

## 3. Write a useful description

Include:

- What changed.
- Why the change belongs in the registry repository.
- How you tested it.
- A link to the Pat repository and tagged release, if you are publishing a Pat.
- Any maintainer action still needed.

Example:

```text
## Summary
Adds documentation for the my-pat publishing workflow.

## Verification
- kirn test
- kirn build pats
- Reviewed .github/workflows/kirn-pats-release.yml

## Pat repository
https://github.com/YOUR-USERNAME/my-pat
```

## 4. Submit and respond

Select **Create pull request**. Keep the branch available while review is in progress, respond to requested changes, and push follow-up commits to the same branch. Do not close and recreate the PR for ordinary revisions.

