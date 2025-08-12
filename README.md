# React Movie App

A movie search and discovery web app built with **React**, **Tailwind CSS**, and **Appwrite**. This was my first React project.

## Cloning and Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/AsinOmal/-React-Movie-App.git
   cd -React-Movie-App

2. Install the dependencies:
   ```bash
   npm install

3. Create a .env.local file in the root with your TMDb API Key:
   VITE_TMDB_API_KEY = your_tmdb_api_key_here 

4. Run the Development Server:
    ```bash
    npm run dev


## Tech Stack

- React
- Tailwind CSS
- Appwrite (backend database and analytics)
- The Movie Database (TMDb) API for movie data

## Project Summary

- Fetches movie data from TMDb API for search and popular movies.

- Backend powered by Appwrite:
  - Stores trending movies.
  - Tracks search terms and counts for analytics.
  - Serves trending movies from its database.

- Features:
  - Search movies with debounce to reduce API calls.
  - Shows trending movies from Appwrite.
  - Displays popular movies by default.
  - Reusable `MovieCard` components to show movie details and posters.
  - Error handling for API failures or empty results.
  - Loading spinner during data fetch.
  
- Mobile-friendly UI styled using Tailwind CSS.

