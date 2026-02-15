# Git Setup Guide for Softech Website 🚀

## Step 1: Add Git to PATH (One-time setup)

Since Git is installed at `D:\Software\Git`, you need to add it to your system PATH:

### Option A: Restart Your Terminal
1. Close your current terminal/PowerShell
2. Open a new terminal
3. Git should now work (the installer usually adds it to PATH)

### Option B: Add to PATH Manually (if Option A doesn't work)
1. Press `Windows + R`
2. Type `sysdm.cpl` and press Enter
3. Go to "Advanced" tab
4. Click "Environment Variables"
5. Under "System variables", find "Path"
6. Click "Edit"
7. Click "New"
8. Add: `D:\Software\Git\bin`
9. Click OK on all windows
10. Restart your terminal

## Step 2: Configure Git (First Time Only)

Open a new terminal and run these commands:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Replace with your actual name and email.

## Step 3: Initialize Git Repository

In your project folder (D:\Desktop\Startup), run:

```bash
# Initialize Git repository
git init

# Check status
git status
```

## Step 4: Make Your First Commit

```bash
# Add all files to staging
git add .

# Create first commit
git commit -m "Initial commit: Softech AI website with Next.js"

# View commit history
git log
```

## Step 5: Connect to GitHub (Optional)

### Create a GitHub Repository
1. Go to https://github.com
2. Click "New repository"
3. Name it: `softech-website`
4. Don't initialize with README (you already have files)
5. Click "Create repository"

### Link Your Local Repository to GitHub

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/softech-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Common Git Commands

### Check Status
```bash
git status
```

### Add Files
```bash
# Add specific file
git add filename.js

# Add all files
git add .

# Add all files in a folder
git add app/
```

### Commit Changes
```bash
git commit -m "Your commit message"
```

### View History
```bash
git log
git log --oneline
```

### Create a Branch
```bash
git branch feature-name
git checkout feature-name

# Or create and switch in one command
git checkout -b feature-name
```

### Switch Branches
```bash
git checkout main
git checkout feature-name
```

### Merge Branches
```bash
# Switch to main branch
git checkout main

# Merge feature branch
git merge feature-name
```

### Push to GitHub
```bash
git push origin main
```

### Pull from GitHub
```bash
git pull origin main
```

## Your .gitignore File

Your project already has a `.gitignore` file that excludes:
- `node_modules/` - Dependencies (don't commit these)
- `.next/` - Build files
- `.env.local` - Your API keys (IMPORTANT: never commit this!)
- `.DS_Store` - Mac system files
- `*.log` - Log files

## Recommended Workflow

### Daily Development
```bash
# 1. Check what changed
git status

# 2. Add your changes
git add .

# 3. Commit with a message
git commit -m "Add interactive portfolio feature"

# 4. Push to GitHub (if using)
git push origin main
```

### Feature Development
```bash
# 1. Create feature branch
git checkout -b add-contact-form

# 2. Make changes and commit
git add .
git commit -m "Add contact form validation"

# 3. Switch back to main
git checkout main

# 4. Merge feature
git merge add-contact-form

# 5. Delete feature branch (optional)
git branch -d add-contact-form
```

## Quick Start Commands

Run these in order to get started:

```bash
# 1. Initialize repository
git init

# 2. Add all files
git add .

# 3. First commit
git commit -m "Initial commit: Softech AI website"

# 4. Check status
git status
```

## Troubleshooting

### "git is not recognized"
- Restart your terminal
- Or add `D:\Software\Git\bin` to PATH (see Step 1)

### "Please tell me who you are"
- Run the git config commands from Step 2

### "Permission denied" on GitHub
- Make sure you're logged into GitHub
- Use HTTPS URL or set up SSH keys

### Undo Last Commit (keep changes)
```bash
git reset --soft HEAD~1
```

### Undo Changes to a File
```bash
git checkout -- filename.js
```

### View Differences
```bash
git diff
git diff filename.js
```

## Best Practices

1. ✅ Commit often with clear messages
2. ✅ Never commit `.env.local` (API keys)
3. ✅ Use branches for new features
4. ✅ Pull before you push (if working with others)
5. ✅ Write meaningful commit messages
6. ✅ Review changes before committing (`git status`, `git diff`)

## Example Commit Messages

Good:
- "Add interactive portfolio modal"
- "Fix navbar scroll effect"
- "Update day mode colors to purple gradient"
- "Implement animated statistics counter"

Bad:
- "update"
- "fix"
- "changes"
- "asdf"

---

## Next Steps

1. Restart your terminal
2. Run `git --version` to verify it works
3. Configure your name and email
4. Initialize your repository
5. Make your first commit!

**Your project is ready for version control!** 🎉
