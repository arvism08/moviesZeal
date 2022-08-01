import React from 'react';

const Movie = ({ movie, selectMovie }) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"

    function truncateString(str, num) {
        // If the length of str is less than or equal to num
        // just return str--don't truncate it.
        if (str.length <= num) {
            return str
        }
        // Return str truncated with '...' concatenated to the end of str.
        return str.slice(0, num) + '...'
    }

    return (
        <div onClick={() => selectMovie(movie)} className={"movie"}>

            <div className="movie-title tooltip">
                <div class="top">
                    <h3>{movie.title}</h3>
                    <h5>Release date: {movie.release_date}</h5>
                    <p>{truncateString(movie.overview, 80)}</p>
                    <i></i>
                </div>

                {movie.poster_path &&
                    <img src={IMAGE_PATH + movie.poster_path} alt={movie.title} />
                }
                <div className={"flex between movie-infos"}>
                    <h5 className={"movie-title"}>{movie.title}</h5>
                    {movie.vote_average ? <span className={"movie-voting"}>{movie.vote_average}</span> : null}
                </div>
            </div>
        </div>
    );
};


export default Movie;