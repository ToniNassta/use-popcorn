# usePopcorn 🍿

A small React app for searching movies and keeping track of the ones you've watched.

> This project was built while following **"The Ultimate React Course"** by Jonas Schmedtmann on Udemy. The idea and design come from the course; I built it to practice React.

## Features

- Search movies by title using the OMDb API
- View movie details: poster, plot, cast, director, IMDb rating
- Rate movies with a custom star rating component
- Keep a list of watched movies, saved in local storage
- See a summary of your watched movies (average ratings, runtime)
- Keyboard shortcuts: Enter focuses the search bar, Escape closes the movie details

## What I practiced

- `useState`, `useEffect`, `useRef`
- Fetching data with cleanup (`AbortController`)
- Custom hooks (`useMovies`, `useLocalStorage`, `useKey`)
- Component composition and reusable components

## Tech

React, OMDb API, CSS

## Screenshots

![Search and movie list](screenshots/use-popcorn-searchMovie.png)
![Watched movies](screenshots/use-popcorn-watched-movies.png)
