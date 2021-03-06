import { useDispatch } from 'react-redux';

function MovieItem({ movie }) {

  const dispatch = useDispatch();

  const handleClick = (event) => {
    console.log('clicked!', event.target);
    dispatch({
      type: 'IMAGE_CLICK',
      payload: movie.id
    });
  }

  return (
    <div>
      <h3>{movie.title}</h3>
      <img src={movie.poster} alt={movie.title} onClick={handleClick}/>
    </div>
  )
}

export default MovieItem;