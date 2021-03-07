import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function EditForm() {

  const genres = useSelector(store => store.genres);

  const [movieTitle, setMovieTitle] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [movieDescription, setMovieDescription] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const movieId = useParams(':id');

  useEffect(() => {
    dispatch({ 
      type: 'SELECT_MOVIE',
      payload: movieId
    });
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();

  const editMovie = useSelector((store) => store.editMovie);
  console.log('edit movie', editMovie);
  
  return (
    <>
      <h1>Edit Movie</h1>
      <h2>{editMovie.title}</h2>
      <img src={editMovie.poster}/>
      <form>
        <input 
          type="text"
          placeholder="Enter movie title..."
        />
        <input
          type="text"
          placeholder="Enter poster image URL..."
        />
        <textarea 
          rows="4"
          cols="50"
          placeholder="Enter movie description..."
        />
        <select defaultValue="Choose a genre..." onChange={event => {setSelectedGenre(event.currentTarget.value)}}>
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