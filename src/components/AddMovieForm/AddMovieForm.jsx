import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AddMovieForm() {

  const [movieTitle, setMovieTitle] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [movieDescription, setMovieDescription] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ 
      type: 'FETCH_GENRES'
    });
  }, []);

  const genres = useSelector(store => store.genres)

  const handleSubmit = () => {
    console.log('clicked submit');
    const movieToAdd = {
      title: movieTitle,
      poster: posterUrl,
      description: movieDescription,
      genreId: selectedGenre
    }

    console.log('movieToAdd', movieToAdd);
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
        <select value={selectedGenre} onChange={event => {setSelectedGenre(event.currentTarget.value)}}>
          {genres.map(genre => {
            return (
              <option key={genre.id} value={genre.id}>{genre.name}</option>
            )
          })}
        </select>
        <button type="button" onClick={handleSubmit}>SUBMIT</button>
        <button type="button">CANCEL</button>
      </form>
    </>
  )
}

export default AddMovieForm;