# 🚀Video Player Application 🧡!

This is a React-based video player application built with Vite. The app fetches videos from the YouTube API and provides a customizable and responsive video player experience. It incorporates various features, including custom video controls, volume adjustments, full-screen options, mute/unmute functionality, country-wise video fetching, and a day/night mode.
Fetching the most popular videos of Youtube of different countries, by default Indian videos are stored in redux store as soon as different country is selected, the fetch API fetches the most popular videos of that country and stores or overrides the videos of current one, and so on. There is also a drag and dro functionality which reorders the sequence of videos as fetched earlier, but it is stored until the new videos of differnt country comes and replace them.

## Technologies Used

- React: JavaScript library for building user interfaces.
- Vite: Fast and opinionated web development build tool.
- Redux Toolkit: State management library for predictable state containers.
- Tailwind CSS: Utility-first CSS framework for styling.
- YouTube API: Used for fetching video data.

## Features

- Custom Controls: Tailored video playback controls for an intuitive user experience.
- Autoplay: Implemented autoplay, allowing videos to start automatically and pause when they reach the end.
- Responsive Design: Ensures a smooth viewing experience across various devices.
- Dynamic Video Fetching: Fetches and displays videos based on the user's country, providing localized content.
- Advanced Controls: Users can adjust volume, toggle full-screen mode, and mute/unmute videos.
- Day/Night Mode: Enhances user comfort with a toggleable day and night mode.
  
## Third Part Libraries used in Application
 - React Player for playing the videos and add own custom functionalities.
 - react-dnd and react-dnd-html5-backend are popular libraries to drag and drop the videos.

## Setup

1. Clone the repository:

   ```bash```
   git clone https://github.com/Syed-Mohd-Azam/Video-Player-Project.git
   
2. Install dependencies:
   
   ->  cd video-player-project    
   ->  npm install

3. Start the application:
   
   npm run dev

4. Open the app in your browser at http://localhost:5173
   
  ## Usage
Navigate through the application and explore the various video playback features.
Adjust volume, enter full-screen mode, and toggle between mute and unmute.
Explore videos based on your country, and switch between day and night modes.
## Project Link

🎉Project Link on Netlify: https://mellow-piroshki-4e2159.netlify.app/

## Happy Coding💻 !
