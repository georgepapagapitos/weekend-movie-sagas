import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';

function MovieDetails() {

  const dispatch = useDispatch();
  const history = useHistory();
  const movieIdParams = useParams(':id');
  console.log('movieId', movieIdParams.id);
  
  useEffect(() => {
    dispatch({ 
      type: 'SELECT_MOVIE',
      payload: movieIdParams.id
    });
  }, []);

  const movieDetails = useSelector(store => store.movies[0]);
  console.log('movieDetails', movieDetails);

  const handleClick = () => {
    history.push('/');
  }
  
  return (
    <>
      <h1>{movieDetails.title}</h1>
      <img src={movieDetails.poster} />
      <ul>
        {movieDetails.genres.map(genre => {
          return (
            <li key={genre}>{genre}</li>
          )
        })}
      </ul>
      <p>{movieDetails.description}</p>
      <button type="button" onClick={handleClick}>BACK</button>
    </>
  )
}

export default MovieDetails;