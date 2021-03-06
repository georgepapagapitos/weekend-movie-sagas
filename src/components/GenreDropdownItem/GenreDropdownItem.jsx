function GenreDropdownItem({ genre }) {
  return (
    <option value={genre.id}>{genre.name}</option>
  )
}

export default GenreDropdownItem;