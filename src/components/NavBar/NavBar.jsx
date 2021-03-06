import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/api/add">Add Movie</Link>
    </nav>
    <header>
      <h1>The Movies Saga!</h1>
    </header>
    </>
  )
}

export default NavBar;