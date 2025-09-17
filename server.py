#!/usr/bin/env python3
"""
Simple HTTP server for TranscribeAudioLive project
Run with: python3 server.py
Then open: http://localhost:8000
"""

import http.server
import socketserver
import os
import sys

PORT = 8000

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.path.dirname(os.path.realpath(__file__)), **kwargs)
    
    def end_headers(self):
        # Add CORS headers to allow YouTube API
        self.send_header('Cross-Origin-Opener-Policy', 'same-origin-allow-popups')
        self.send_header('Cross-Origin-Embedder-Policy', 'require-corp')
        super().end_headers()

def main():
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"🎵 TranscribeAudioLive server starting...")
        print(f"🌐 Open your browser to: http://localhost:{PORT}")
        print(f"📁 Serving files from: {os.path.dirname(os.path.realpath(__file__))}")
        print(f"🛑 Press Ctrl+C to stop the server")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print(f"\n👋 Server stopped")

if __name__ == "__main__":
    main()