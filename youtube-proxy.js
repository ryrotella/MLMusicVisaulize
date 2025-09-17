#!/usr/bin/env node
/**
 * Simple YouTube Audio Proxy Server
 * 
 * Install dependencies:
 * npm install express cors ytdl-core
 * 
 * Run with:
 * node youtube-proxy.js
 * 
 * Then update your app to use: http://localhost:3001
 */

const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ 
        status: 'YouTube Audio Proxy Server Running',
        endpoints: {
            '/audio/:videoId': 'Stream audio for a video ID',
            '/info/:videoId': 'Get video metadata'
        }
    });
});

// Get video info
app.get('/info/:videoId', async (req, res) => {
    try {
        const { videoId } = req.params;
        
        if (!ytdl.validateID(videoId)) {
            return res.status(400).json({ error: 'Invalid video ID' });
        }
        
        const info = await ytdl.getInfo(videoId);
        const videoDetails = info.videoDetails;
        
        res.json({
            title: videoDetails.title,
            author: videoDetails.author.name,
            duration: videoDetails.lengthSeconds,
            thumbnail: videoDetails.thumbnails[videoDetails.thumbnails.length - 1].url,
            description: videoDetails.shortDescription
        });
        
    } catch (error) {
        console.error('Error getting video info:', error);
        res.status(500).json({ error: 'Failed to get video information' });
    }
});

// Stream audio
app.get('/audio/:videoId', async (req, res) => {
    try {
        const { videoId } = req.params;
        
        if (!ytdl.validateID(videoId)) {
            return res.status(400).json({ error: 'Invalid video ID' });
        }
        
        // Set headers for audio streaming
        res.header('Content-Type', 'audio/mpeg');
        res.header('Accept-Ranges', 'bytes');
        
        // Create audio stream with highest quality audio
        const audioStream = ytdl(videoId, {
            filter: 'audioonly',
            quality: 'highestaudio',
            format: 'mp4'
        });
        
        // Pipe the audio stream to response
        audioStream.pipe(res);
        
        audioStream.on('error', (error) => {
            console.error('Stream error:', error);
            res.status(500).json({ error: 'Failed to stream audio' });
        });
        
    } catch (error) {
        console.error('Error streaming audio:', error);
        res.status(500).json({ error: 'Failed to stream audio' });
    }
});

// Get audio URL (for use with HTML5 audio element)
app.get('/audio-url/:videoId', async (req, res) => {
    try {
        const { videoId } = req.params;
        
        if (!ytdl.validateID(videoId)) {
            return res.status(400).json({ error: 'Invalid video ID' });
        }
        
        const info = await ytdl.getInfo(videoId);
        const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
        
        if (audioFormats.length > 0) {
            // Get the best quality audio format
            const bestAudio = audioFormats[0];
            res.json({
                url: bestAudio.url,
                quality: bestAudio.audioBitrate,
                container: bestAudio.container
            });
        } else {
            res.status(404).json({ error: 'No audio formats found' });
        }
        
    } catch (error) {
        console.error('Error getting audio URL:', error);
        res.status(500).json({ error: 'Failed to get audio URL' });
    }
});

app.listen(PORT, () => {
    console.log(`🎵 YouTube Audio Proxy Server running on http://localhost:${PORT}`);
    console.log(`📡 CORS enabled for all origins`);
    console.log(`🎧 Use /audio/:videoId to stream audio`);
    console.log(`📋 Use /info/:videoId to get video metadata`);
});