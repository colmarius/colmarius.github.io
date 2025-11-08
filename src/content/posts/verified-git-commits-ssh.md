---
title: 'How to Sign Git Commits with SSH Keys'
description: 'A practical guide to setting up verified commits on GitHub using SSH keys—simpler than GPG and you probably already have the key.'
pubDate: 2025-11-04
tags: ['Git', 'GitHub', 'Security']
difficulty: 'beginner'
readingTime: '10-15 min'
draft: false
order: 7
---

> **📖 Quick Start**
>
> - **Who it's for:** Developers who want verified commits
> - **Time to complete:** 10-15 minutes
> - **Prerequisites:** SSH key (or 2 min to create one)
> - **Expected outcome:** All commits automatically signed and verified on GitHub
> - **Next step:** Optional—let Amp verify your setup

Anyone can commit code as you on GitHub. All they need is your name and email from `git config`. The only difference? No "Verified" badge.

The solution: **sign your commits**. And the easiest way? Use the SSH key you already have.

## Why Sign Commits?

- **Proves authenticity:** cryptographically proves you made the commit
- **Supply chain security:** prevents impersonation in open source projects
- **Compliance:** required in regulated industries and some organizations
- **Trust:** GitHub displays a "Verified" badge on signed commits

## SSH vs GPG Signing

**GPG (traditional way):**

- Install GPG tools
- Generate separate keys
- Manage passphrases
- More complex setup

**SSH (simpler way):**

- Use existing SSH key
- No extra tools needed
- Same key for push/pull and signing
- Three commands to set up

## Setup in 3 Steps

### 1. Check Your SSH Key

**macOS/Linux:**

```bash
ls -la ~/.ssh
```

**Windows (PowerShell):**

```powershell
dir C:\Users\YourUsername\.ssh
```

Look for `id_ed25519.pub`, `id_rsa.pub`, or similar. If you don't have one:

**macOS/Linux:**

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

**Windows (PowerShell):**

```powershell
ssh-keygen -t ed25519 -C "your_email@example.com"
```

### 2. Add SSH Key to GitHub as Signing Key

**macOS/Linux:**

```bash
# Copy your public key
cat ~/.ssh/id_ed25519.pub  # or id_rsa.pub
```

**Windows (PowerShell):**

```powershell
# Copy your public key
type C:\Users\YourUsername\.ssh\id_ed25519.pub
```

Then:

1. Go to GitHub → Settings → SSH and GPG keys
2. Click "New SSH key"
3. **Important:** Select type as **"Signing Key"** (not Authentication)
4. Paste your public key and save

Note: You can use the same key for both authentication and signing—just add it twice with different types.

### 3. Configure Git

**macOS/Linux:**

```bash
git config --global gpg.format ssh
git config --global user.signingkey ~/.ssh/id_ed25519.pub  # or id_rsa.pub
git config --global commit.gpgsign true
```

**Windows:**

```bash
git config --global gpg.format ssh
git config --global user.signingkey C:/Users/YourUsername/.ssh/id_ed25519.pub
git config --global commit.gpgsign true
```

**Note:** On Windows, use forward slashes (`/`) in the key path, not backslashes.

That's it! Every commit is now automatically signed.

## Avoid Passphrase Prompts

If you're asked for your SSH passphrase on every commit:

**macOS:**

```bash
# Add key to ssh-agent with keychain
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

Create/edit `~/.ssh/config`:

```text
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
```

**Linux:**

```bash
# Start ssh-agent and add key
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

Add to `~/.bashrc` or `~/.zshrc` to persist:

```bash
if [ -z "$SSH_AUTH_SOCK" ]; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_ed25519 2>/dev/null
fi
```

**Windows:**

Git for Windows includes ssh-agent. Ensure it's running:

```powershell
# Start ssh-agent (if not running)
Start-Service ssh-agent
Set-Service -Name ssh-agent -StartupType Automatic

# Add your key
ssh-add C:\Users\YourUsername\.ssh\id_ed25519
```

Now you'll only enter the passphrase once per session (or never if already cached).

## Verify It Works

Make a test commit:

```bash
git commit --allow-empty -m "Test signed commit"
git log --show-signature -1
```

Push to GitHub and check for the "Verified" badge next to your commit.

> **🔨 Try It Now: Let Amp Validate Your Setup**
>
> **Task:** Use Amp to verify your SSH signing configuration
>
> **Prompt:**
>
> ```text
> Check my git config to verify SSH commit signing is set up correctly.
>
> Verify:
> 1. gpg.format is set to ssh
> 2. user.signingkey points to my SSH public key
> 3. commit.gpgsign is true
> 4. The signing key file exists
>
> Show me the current config and flag any issues.
> ```
>
> **Verification:**
>
> - Amp reads your .gitconfig
> - Confirms all settings are correct
> - Identifies any missing configuration
>
> **Expected outcome:** Confidence that your setup is correct, or specific instructions to fix issues.

## Troubleshooting

### "error: gpg failed to sign the data"

**macOS/Linux:**

```bash
# Verify key path
git config --global user.signingkey

# Should match your public key location
ls -la ~/.ssh/id_ed25519.pub
```

**Windows:**

```powershell
# Verify key path
git config --global user.signingkey

# Should match your public key location (with forward slashes)
dir C:\Users\YourUsername\.ssh\id_ed25519.pub
```

Use forward slashes in path: `C:/Users/YourUsername/.ssh/id_ed25519.pub`

### Passphrase prompts on every commit

See the "Avoid Passphrase Prompts" section above.

### Commits not showing as "Verified" on GitHub

1. Ensure you added the key as a "Signing Key" (not just Authentication)
2. Check the email in your commits matches your GitHub email:

   ```bash
   git config --global user.email
   ```

3. Push commits and wait 30 seconds for GitHub to verify
4. Verify the key is still active in GitHub Settings → SSH and GPG keys

## Your .gitconfig

Here's what the relevant section should look like:

```ini
[user]
  name = Your Name
  email = your.email@example.com
  signingkey = /Users/you/.ssh/id_rsa.pub

[commit]
  gpgsign = true

[gpg]
  format = ssh
```

## Enforce Signed Commits (GitHub)

Require signed commits via branch protection:

1. Go to repo Settings → Branches
2. Add branch protection rule for `main` (or your default branch)
3. Check "Require signed commits"
4. Save changes

Now unsigned commits will be rejected on push.

**Note:** Make sure all collaborators have signing configured before enabling this, or they won't be able to push.

## Why This Matters

This is like HTTPS was a decade ago—optional until it wasn't. Organizations can require signed commits through branch protection rules. Security tools flag unsigned commits. And when supply chain attacks happen, signed commits are the only way to prove what's legitimate.

You're not setting this up for today. You're setting it up for when it matters.

---

**Related:**

- [Coding with Agents in 2025](/posts/coding-with-agents-2025) — Overview of coding with AI agents
- [What is an Agent?](/posts/what-is-an-agent) — Understanding AI coding agents

**Credits:** Inspired by [Nick Taylor's article](https://www.nickyt.co/blog/anyone-can-commit-code-as-you-on-github-heres-how-to-stop-them-2in7/) on GPG commit signing, adapted for the simpler SSH approach.
