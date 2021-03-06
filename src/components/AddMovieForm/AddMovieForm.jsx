import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import GenreDropdownItem from '../GenreDropdownItem/GenreDropdownItem';

function AddMovieForm() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ 
      type: 'FETCH_GENRES'
    });
  }, []);

  const genres = useSelector(store => store.genres)

  console.log('genres', genres);

  return (
    <>
      <form>
        <input type="text" placeholder="Enter movie title..." />
        <input type="text" placeholder="Enter poster image URL..." />
        <textarea rows="4" cols="50" placeholder="Enter movie description..." />
        <select>
          {genres.map(genre => {
            return (
              <GenreDropdownItem key={genre.id} genre={genre}/>
            )
          })}
        </select>
      </form>
    </>
  )
}

export default AddMovieForm;