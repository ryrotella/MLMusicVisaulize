# Deployment Guide

## Step-by-step GitHub Pages Deployment

### 1. Initialize Git and Create Repository

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: TranscribeAudioLive with lyric database integration"

# Create GitHub repository at github.com/new
# Repository name: transcribe-audio-live
# Make it Public
# Don't initialize with README

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/transcribe-audio-live.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to repository Settings
2. Click "Pages" in sidebar
3. Source: "Deploy from a branch" 
4. Branch: "main" / "/ (root)"
5. Click "Save"

### 3. Your App Will Be Live At:

```
https://YOUR_USERNAME.github.io/transcribe-audio-live
```

### 4. Update README.md

Replace "YOUR_USERNAME" in README.md with your actual GitHub username.

### 5. Future Updates

```bash
# Make changes
git add .
git commit -m "Description of changes"
git push
```

Your site will automatically update within a few minutes!

## Important Notes

- GitHub Pages serves static files directly
- The app will work fully on GitHub Pages
- YouTube proxy (youtube-proxy.js) won't work on GitHub Pages (needs server)
- Core features (lyrics, visualization, drawing) work perfectly
- For YouTube audio proxy, users need to run locally

## Features Working on GitHub Pages ✅

- ✅ YouTube video embedding and playback
- ✅ Lyric database integration (LRCLib API)
- ✅ Manual song info input
- ✅ Synchronized lyric display
- ✅ Mood visualization and canvas drawing
- ✅ Audio file upload and playback
- ✅ Real-time transcription (with API token)

## Features Requiring Local Setup ⚠️

- ⚠️ YouTube audio proxy (enhanced audio access)
- ⚠️ Advanced audio capture from YouTube

The core experience is fully functional on GitHub Pages!