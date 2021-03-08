import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function EditForm() {

  useEffect(() => {
    dispatch({
      type: 'FETCH_GENRES'
    })
    dispatch({ 
      type: 'SELECT_MOVIE',
      payload: movieId
    });
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();

  const genres = useSelector(store => store.genres);
  const movieToEdit = useSelector((store) => store.movies);

  const [movieTitle, setMovieTitle] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [movieDescription, setMovieDescription] = useState('');
  const [selectedGenre, setSelectedGenre] = useState([]);

  const movieId = useParams(':id');

  return (
    <>
      <h1>Edit Movie</h1>
      <h2>{movieToEdit.title}</h2>
      <img src={movieToEdit.poster}/>
      <form>
        <input 
          type="text"
          placeholder="Enter movie title..."
          value={movieTitle}
          onChange={(event) => {setMovieTitle(event.target.value)}}
        />
        <input
          type="text"
          placeholder="Enter poster image URL..."
          value={posterUrl}
          onChange={(event) => {setPosterUrl(event.target.value)}}
        />
        <textarea 
          rows="4"
          cols="50"
          placeholder="Enter movie description..."
          value={movieDescription}
          onChange={(event) => {setMovieDescription(event.target.value)}}
        />
        <select defaultValue="Choose a genre..." onChange={event => {setSelectedGenre(event.currentTarge.value)}}>
          <option disabled>Choose a genre...</option>
          {genres.map(genre => {
            return (
              <option key={genre.id} value={genre.id}>{genre.name}</option>
            )
          })}
        </select>
        <button type='button'>Update Movie</button>
      </form>
    </>
  );
}

export default EditForm;