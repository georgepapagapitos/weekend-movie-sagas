import { Link } from 'react-router-dom';

import './NavBar.css';

function NavBar() {
  return (
    <div className="topnav">
      <nav>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/add">Add Movie</Link>
        <Link className="link" to="/admin">Admin</Link>
      </nav>
    </div>
  )
}

export default NavBar;