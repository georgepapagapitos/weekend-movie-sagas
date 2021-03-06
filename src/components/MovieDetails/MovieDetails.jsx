import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';

function MovieDetails() {

  useEffect(() => {
    dispatch({ 
      type: 'FETCH_DETAILS',
      payload: movieId
    });
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();
  const movieId = useParams(":id");
  const movieDetails = useSelector(store => store.details);
  console.log('movie genres in MovieDetails', movieDetails.genres);

  const handleClick = () => {
    dispatch({
      type: 'CLEAR_DETAILS'
    });
    history.push('/');
  }
  
  return (
    <>
      <h1>{movieDetails.title}</h1>
      <img src={movieDetails.poster} />
      <p>{movieDetails.description}</p>
      <button type="button" onClick={handleClick}>BACK</button>
    </>
  )
}

export default MovieDetails;