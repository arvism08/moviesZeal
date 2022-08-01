const MOVIE_API = "https://api.themoviedb.org/3/"
const SEARCH_API = MOVIE_API + "search/movie"
const DISCOVER_API = MOVIE_API + "discover/movie"
const API_KEY = process.env.REACT_APP_API_KEY
const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280"

export {MOVIE_API,SEARCH_API,DISCOVER_API,API_KEY,BACKDROP_PATH};