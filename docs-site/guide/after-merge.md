---
title: After approval
description: What happens after your Pat or registry pull request is approved.
---

# After approval

## Registry repository changes

When maintainers approve and merge your registry pull request:

1. The official `main` branch receives the change.
2. Any repository checks or Pages deployment run from the official repository.
3. Keep your fork in sync before starting your next contribution.

```bash
git fetch upstream
git switch main
git merge upstream/main
git push origin main
```

## Pat releases

For a Pat repository:

1. Confirm the `v*` tag points to the intended commit.
2. Open the GitHub Actions run for `kirn-pats-release.yml`.
3. Confirm the build completes.
4. Confirm the GitHub release contains the expected artifact.
5. Share the repository and release URL with maintainers if registration or organization membership is still pending.

## Install and verify

Consumers can install a registered Pat by name:

```bash
kirn i my-pat
```

They can also install by owner/repository or a full supported Git URL when appropriate.

