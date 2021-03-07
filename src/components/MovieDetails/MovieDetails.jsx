import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';

import './MovieDetails.css';

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

  const handleEdit = () => {
    dispatch({
      type: 'SET_EDIT_MOVIE',
      payload: movieDetails
    })
    history.push(`/edit/${movieDetails.id}`);
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
      <button type="button" onClick={handleEdit}>EDIT</button>
    </>
  )
}

export default MovieDetails;