Concept: Music as an expression of interiority of humans

Goal: Using YouTube Player Api, have a user input or search for a song. Play the song and send lyrics to the model. As the song is playing, in real time, paint the lyrics/mood of music on screen to match how they’re being expressed by singer. 

Framework: Vanilla JS, HTML, CSS

Process: 

1. Input -> Youtube Video
    1. User search - iframe?
    2. Or input ID number
    3. Display song, artist, and album cover
2. Call Models from Replicate
    1. Advise on best models for this task
        1. Voice/Audio to Text
        2. Real-Time Transcription
        3. Allow choice of different languages (translation)
        4. Color/Painting Generation (painting on canvas)
        5. Maybe shapes?
    2. Use Replicate Proxy (at bottom of outline; point 4)
3. Output
    1. Lyrics in fun patter that wrap around screen
    2. Paint with colors that relate to mood/feel of song
    3. User can also draw/edit alongside models
4. Use Dan O’s Replicate Proxy and refer to function below
* 
* async function askWord(word, location) {
*     const url = "https://itp-ima-replicate-proxy.web.app/api/create_n_get";
*     //Get Auth Token from: https://itp-ima-replicate-proxy.web.app/
*     let authToken = "";
* 
*     let prompt = "a json list of 5 words related to " + word + " with no extra words or punctuation";
*     document.body.style.cursor = "progress";
*     const data = {
*         model: "openai/gpt-5",
*         input: {
*             prompt: prompt,
*         },
*     };
*     console.log("Making a Fetch Request", data);
*     const options = {
*         method: "POST",
*         headers: {
*             "Content-Type": "application/json",
*             Accept: 'application/json',
*             'Authorization': `Bearer ${authToken}`,
*         },
*         body: JSON.stringify(data),
*     };
*     const raw_response = await fetch(url, options);
*     //turn it into json
*     const json_response = await raw_response.json();
*     console.log("json_response", json_response);
*     document.body.style.cursor = "auto";
*     let parsedResponse = JSON.parse(json_response.output.join(""));
*     let responseCount = parsedResponse.length;
*     let orbit = { x: 0, y: 0 };
*     for (let i = 0; i < responseCount; i++) {
*         let textResponse = parsedResponse[i];
*         let radius = 100;
*         orbit.x = location.x + radius * Math.cos(i * 2 * Math.PI / responseCount);
*         orbit.y = location.y + radius * Math.sin(i * 2 * Math.PI / responseCount);
*         drawWord(textResponse, orbit);
*     }
*     inputBoxDirectionX = 1;
*     inputBoxDirectionY = 1;
* }

	  Phase 1: YouTube Integration
  - Implement YouTube Player API
  - Create search functionality or direct video ID input
  - Display song metadata (title, artist, album cover)

  Phase 2: AI Model Integration
  - Set up Replicate API connection using Dan O's proxy
  - Implement voice/audio to text transcription
  - Add real-time transcription capabilities
  - Include language translation options
  - Integrate color/painting generation based on mood analysis

  Phase 3: Visual Canvas System
  - Create dynamic lyrics display with creative patterns
  - Implement mood-based color painting on canvas
  - Add shape generation capabilities
  - Enable user drawing/editing alongside AI visuals

  Phase 4: Real-time Synchronization
  - Sync transcription with audio playback
  - Coordinate visual effects with lyrics timing
  - Ensure smooth real-time performance

  Phase 5: User Experience Polish
  - Refine interface and interactions
  - Optimize performance
  - Add user controls and customization options