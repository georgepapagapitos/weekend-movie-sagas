import { useHistory } from 'react-router';

function MovieItem({ movie }) {

  const history = useHistory();

  const handleClick = (event) => {
    console.log('clicked!', event.target);
    history.push(`/api/details/${movie.id}`);
  }

  return (
    <div>
      <h3>{movie.title}</h3>
      <img src={movie.poster} alt={movie.title} onClick={handleClick}/>
    </div>
  )
}

export default MovieItem;