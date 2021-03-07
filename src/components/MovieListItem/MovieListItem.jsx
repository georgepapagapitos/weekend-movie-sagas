import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

function MovieListItem({ movie }) {

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (event) => {
    console.log('clicked!', movie.id);
    history.push(`/details/${movie.id}`);
  }

  return (
    <div className="movie-card" onClick={handleClick}>
      <h3>{movie.title}</h3>
      <img className="movie-poster" src={movie.poster} alt={movie.title}/>
    </div>
  )
}

export default MovieListItem;