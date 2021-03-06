import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router';

function AddMovieForm() {

  const genres = useSelector(store => store.genres)

  const [movieTitle, setMovieTitle] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [movieDescription, setMovieDescription] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({ 
      type: 'FETCH_GENRES'
    });
  }, []);

  const handleSubmit = () => {
    console.log('clicked submit');

    if(movieTitle && posterUrl && movieDescription && selectedGenre) {
      const movieToAdd = {
        title: movieTitle,
        poster: posterUrl,
        description: movieDescription,
        genreId: selectedGenre
      };
      console.log('movieToAdd', movieToAdd);
      dispatch({
        type: 'ADD_MOVIE',
        payload: movieToAdd
      })

      history.push('/');
    } else {
      alert('Please complete the form.');
    }    
  }

  return (
    <>
      <h1>Add A Movie</h1>
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
        <select defaultValue="Choose a genre..." onChange={event => {setSelectedGenre(event.currentTarget.value)}}>
          <option disabled>Choose a genre...</option>
          {genres.map(genre => {
            return (
              <option key={genre.id} value={genre.id}>{genre.name}</option>
            )
          })}
        </select>
        <button type="button" onClick={handleSubmit}>SUBMIT</button>
        <button type="button" onClick={() => history.push('/')}>CANCEL</button>
      </form>
    </>
  )
}

export default AddMovieForm;