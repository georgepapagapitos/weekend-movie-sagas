import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

function MovieDetails() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ 
      type: 'FETCH_DETAILS',
      payload: movieId
    });
  }, []);
  
  const movieId = useParams(":id");
  const movieDetails = useSelector(store => store.details);

    return (
    <>
      <h1>{movieDetails.title}</h1>
      <img src={movieDetails.poster} />
      <p>{movieDetails.description}</p>
      <Link to="/"><button type="button">BACK</button></Link>
    </>
  )
}

export default MovieDetails;