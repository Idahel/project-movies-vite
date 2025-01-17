import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5055e07195673a9612bbdc62e8fe3e7c&language=en-US`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
  };

  const rating = movie.vote_average.toFixed(1);

  return (
    <article className='detail-page'>
    <div className='background' style={backgroundStyle}>
      <div className='summary'>
        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
        <div className='details'>
          <h1>
            <span className='title'>{movie.title}</span>
            <span className='rating'>⭐️ {rating}</span>
          </h1>
          <p>{movie.overview}</p>
        </div>
      </div>
      <Link to="/" className="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
          <path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fillRule="evenodd"></path>
        </svg>
        Movies
      </Link>
    </div>
    </article>
  );
};

export default Detail;
