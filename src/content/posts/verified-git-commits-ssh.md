---
title: 'How to Sign Git Commits with SSH Keys'
description: 'A practical guide to setting up verified commits on GitHub using SSH keys—simpler than GPG and you probably already have the key.'
pubDate: 2025-11-06
tags: ['git', 'github', 'security']
draft: false
---

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

```bash
ls -la ~/.ssh
```

Look for `id_ed25519.pub`, `id_rsa.pub`, or similar. If you don't have one:

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

### 2. Add SSH Key to GitHub as Signing Key

```bash
# Copy your public key
cat ~/.ssh/id_ed25519.pub  # or id_rsa.pub
```

Then:

1. Go to GitHub → Settings → SSH and GPG keys
2. Click "New SSH key"
3. **Important:** Select type as **"Signing Key"** (not Authentication)
4. Paste your public key and save

Note: You can use the same key for both authentication and signing—just add it twice with different types.

### 3. Configure Git

```bash
git config --global gpg.format ssh
git config --global user.signingkey ~/.ssh/id_ed25519.pub  # or id_rsa.pub
git config --global commit.gpgsign true
```

That's it! Every commit is now automatically signed.

## Avoid Passphrase Prompts

If you're asked for your SSH passphrase on every commit, add your key to macOS keychain:

```bash
# Add key to ssh-agent with keychain
ssh-add --apple-use-keychain ~/.ssh/id_rsa
```

Create/edit `~/.ssh/config`:

```text
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa
```

Now you'll only enter the passphrase once (or never if already in keychain).

## Verify It Works

Make a test commit:

```bash
git commit --allow-empty -m "Test signed commit"
git log --show-signature -1
```

Push to GitHub and check for the "Verified" badge next to your commit.

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

## Why This Matters

This is like HTTPS was a decade ago—optional until it wasn't. Organizations can require signed commits through branch protection rules. Security tools flag unsigned commits. And when supply chain attacks happen, signed commits are the only way to prove what's legitimate.

You're not setting this up for today. You're setting it up for when it matters.

---

**Credits:** Inspired by [Nick Taylor's article](https://www.nickyt.co/blog/anyone-can-commit-code-as-you-on-github-heres-how-to-stop-them-2in7/) on GPG commit signing, adapted for the simpler SSH approach.
