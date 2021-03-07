import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import './MovieListItem.css';

function MovieListItem({ movie }) {

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (event) => {
    console.log('clicked!', movie.id);
    history.push(`/details/${movie.id}`);
  }

  return (
    <div className="card" onClick={handleClick}>
      <h3>{movie.title}</h3>
      <hr/>
      <img className="movie-poster" src={movie.poster} alt={movie.title}/>
    </div>
  )
}

export default MovieListItem;