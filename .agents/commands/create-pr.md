# Create PR

When user links this file, execute the following workflow:

1. Check current branch and show changes:
   - Run `git branch --show-current`
   - Run `git diff main` to show changes
   - Run `git log main..HEAD --oneline` to show commits

2. If not on a feature branch:
   - Generate feature name
   - Create branch: `git checkout -b feature/[name]`

3. Commit and push:
   - Run `git add .`
   - Generate commit message from staged changes
   - Run `git commit -m "[generated-message]"`
   - Run `git push -u origin [branch-name]`

4. Create PR:
   - Generate PR title from branch name and commits
   - Generate PR description from commits and diff
   - Run `gh pr create --title "[generated-title]" --body "[generated-description]"`

Execute these steps automatically when this file is attached.
