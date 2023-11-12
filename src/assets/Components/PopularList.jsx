import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const PopularList = () => {
  const [movies, setMovies] = useState([]);
  const imageSize = 'w342';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=5055e07195673a9612bbdc62e8fe3e7c&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error('Error fetching popular movies:', error));
  }, []);

  const getImageUrl = (path) => {
    return `https://image.tmdb.org/t/p/${imageSize}${path}`;
  };

  return (
    <section className='popular-page'>
      {movies.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <img
              src={getImageUrl(movie.poster_path)}
              alt={movie.title}
            />
            <div className='movie-info'>
              <h1>{movie.title}</h1>
              <p>Released {movie.release_date}</p>
            </div>
          </Link>
      ))}
    </section>
  );
};

export default PopularList;
