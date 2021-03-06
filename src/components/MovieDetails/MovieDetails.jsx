import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function MovieDetails() {

  const dispatch = useDispatch();
  const movieId = useParams(":id");
  const movie = useSelector(store => store.details);

  useEffect(() => {
    dispatch({ 
      type: 'FETCH_DETAILS',
      payload: movieId
    });
  }, []);

    return (
    <>
      <h1>{movie.title}</h1>
      <img src={movie.poster} />
      <p>{movie.description}</p>
    </>
  )
}

export default MovieDetails;