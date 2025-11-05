# Update PR Title and Description

When user links this file, execute the following workflow:

1. Review changes:
   - Run `git log main..HEAD --oneline`
   - Run `git diff main --stat`
   - Analyze the changes to identify features

2. Commit and push (if needed):
   - Run `git add .`
   - Generate commit message from staged changes
   - Run `git commit -m "[generated-message]"`
   - Run `git push -u origin [branch-name]`

3. Generate PR update:
   - Create concise title summarizing main features
   - Write brief description with bullet points per feature
   - Keep it simple and succinct

4. Update PR:
   - Run `gh pr edit --title "[new title]" --body "[new description]"`

Execute these steps automatically when this file is attached.
