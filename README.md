# TranscribeAudioLive

A real-time music visualization app that paints lyrics and mood on screen as YouTube songs play, expressing the "interiority" of music.

🔗 **Live Demo**: [https://YOUR_USERNAME.github.io/transcribe-audio-live](https://YOUR_USERNAME.github.io/transcribe-audio-live)

## Features

- 🎵 **YouTube Integration** - Search and play videos with automatic lyric detection
- 📝 **Lyric Database** - Fetches real lyrics using LRCLib API
- 🎨 **Real-time Visualization** - Mood-based colors and dynamic lyric display
- ⏱️ **Synchronized Lyrics** - Time-synced lyric display during playback
- ✍️ **Interactive Canvas** - Draw and paint over the visualization
- 🤖 **AI Transcription** - Advanced audio processing with Replicate API
- 📱 **Manual Input** - Enter song title/artist manually for any audio

## Quick Start

### Online Version (Recommended)
Simply visit the [live demo](https://YOUR_USERNAME.github.io/transcribe-audio-live) - no setup required!

### Local Development

**Option A: Python Server**
```bash
python3 server.py
```

**Option B: Node.js Server**
```bash
npx http-server -p 8000 --cors
```

**Option C: Live Server (VS Code)**
Install "Live Server" extension, right-click `index.html` and select "Open with Live Server"

### YouTube Audio Proxy (Optional)
For enhanced YouTube features, start the proxy server:

```bash
npm install express cors ytdl-core
node youtube-proxy.js
```

Then open: http://localhost:8000

## Features

- 🎵 YouTube integration with search functionality
- 🎨 Real-time mood-based color visualization
- ✍️ Interactive drawing canvas
- 📝 Dynamic lyrics display
- 🤖 AI-powered transcription (planned)

## Usage

1. Search for a song (try "september earth wind and fire" or "demo")
2. Click the video to play
3. Watch the mood-based visualization
4. Enable drawing to add your own artistic touches

## Known Issues

- Some YouTube videos may be restricted from embedding
- The app works best when served via HTTP (not file://)
- Permissions policy warnings are normal and don't affect functionality

## Development Phases

- ✅ Phase 1: YouTube Integration
- 🔄 Phase 2: AI Model Integration (in progress)  
- ⏳ Phase 3: Visual Canvas System
- ⏳ Phase 4: Real-time Synchronization
- ⏳ Phase 5: User Experience Polish