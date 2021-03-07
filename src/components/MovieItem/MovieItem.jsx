import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

function MovieItem({ movie }) {

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (event) => {
    console.log('clicked!', movie);
    dispatch({ 
      type: 'FETCH_DETAILS',
      payload: movie
    });
    history.push(`/api/details/${movie.id}`);
  }

  return (
    <div>
      <h3>{movie.title}</h3>
      <img className="movie-poster" src={movie.poster} alt={movie.title} onClick={handleClick}/>
    </div>
  )
}

export default MovieItem;