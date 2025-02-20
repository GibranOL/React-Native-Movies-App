# React Native Movies App

This mini project is pretty similar on what we did at the last sesion we had, it was really helpful. 

A simple React Native project (using Expo) that lists and searches for movies and TV shows from [The Movie Database (TMDb)](https://www.themoviedb.org/).

## Features

- **Three tabs** using React Navigation:
  - Movies (with a dropdown for now playing, popular, top rated, upcoming)
  - Search (with an input field and dropdown for movie / tv / multi)
  - TV Shows (with a dropdown for airing_today, on_the_air, popular)
- **More Details** screen: each item has a button that triggers another GET request to display full details (overview, popularity, poster, etc.).

	2.	Install dependencies:
    yarn install
Estructure:
src
 ┣ components
 ┃ ┣ containers
 ┃ ┃ ┣ MoviesContainer.js
 ┃ ┃ ┣ TVShowsContainer.js
 ┃ ┃ ┗ SearchContainer.js
 ┃ ┣ screens
 ┃ ┃ ┗ MoreDetails.js
 ┃ ┣ navigation
 ┃ ┃ ┣ NavBar.js
 ┃ ┃ ┗ ...
 ┃ ┗ stacks
 ┃   ┗ AppStack.js
 ┣ config
 ┃ ┗ apiConfig.js
 ┣ services
 ┃ ┗ api.js
App.js
README.md