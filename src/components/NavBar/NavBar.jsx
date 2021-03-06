import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
    <nav>
      <Link to="/"><p>Home</p></Link>
      <Link to="/api/add"><p>Add Movie</p></Link>
    </nav>
    </>
  )
}

export default NavBar;