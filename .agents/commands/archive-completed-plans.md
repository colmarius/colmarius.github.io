# Archive Completed Plans

When user links this file, execute the following workflow:

1. Find all completed plans in `.agents/plans/completed/`

2. For each completed plan:
   - Read the plan file to extract goal/title
   - Generate succinct commit message from plan's title and goal
   - Delete the plan file: `git rm [plan-file-path]`
   - Commit with message: `Plans: archive [plan-name]` with body summarizing the plan goal
   - Continue to next plan

## Commit Message Format

**Title**: `Plans: archive [plan-name]`

**Body**: One-line summary of what the plan accomplished

**Example**:

```text
Plans: archive add-contact-section

Added contact section with email and social links to homepage
```

Execute these steps automatically when this file is attached.
