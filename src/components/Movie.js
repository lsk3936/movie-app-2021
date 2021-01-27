import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ year, genres, title, summary, posters }){
    return (
        <div className="movie">
            <Link 
                to={{
                    pathname: '/movie-detail',
                    state: { year, genres, title, summary, posters },
                }}
            >
                <img src={posters} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                    {genres.map((genre, index) => {
                        return (
                        <li key={index} className="movie__genre">
                            {genre}
                            </li>
                            );
                    })} 
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </Link>
        </div>
    );

}

Movie.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    posters: PropTypes.string.isRequired,
};


export default Movie;