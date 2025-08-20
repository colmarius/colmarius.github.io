# GitHub Repository Setup Instructions

## Required Manual Steps

After pushing the GitHub Action workflow, you need to configure your GitHub repository settings:

### 1. Enable GitHub Actions

1. Go to your repository on GitHub.com
2. Navigate to **Settings** > **Actions** > **General**
3. Ensure "Allow all actions and reusable workflows" is selected

### 2. Configure GitHub Pages

1. In your repository, go to **Settings** > **Pages**
2. Under "Source", select **GitHub Actions**
3. Save the settings

### 3. Verify Custom Domain (if using)

1. In **Settings** > **Pages**
2. Under "Custom domain", ensure `marius-colacioiu.com` is set
3. Enable "Enforce HTTPS"

### 4. Permissions Check

The workflow file already includes the necessary permissions:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

## Test Deployment

1. Push any commit to the main branch
2. Go to **Actions** tab in your repository
3. Watch the "Deploy to GitHub Pages" workflow run
4. Check that the site deploys successfully

## Troubleshooting

- If the action fails, check the workflow logs in the Actions tab
- Ensure the repository has GitHub Pages enabled
- Verify the custom domain DNS is correctly configured

## Next Steps

Once configured, every push to main will automatically deploy your site!
