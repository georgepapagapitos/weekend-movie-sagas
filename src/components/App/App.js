import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from '../NavBar/NavBar';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieList from '../MovieList/MovieList';
import AddMovieForm from '../AddMovieForm/AddMovieForm';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />      
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/api/details/:id">
          <MovieDetails />
        </Route>
        
        {/* Add Movie page */}
        <Route path="/api/add">
          <AddMovieForm />
        </Route>

      </Router>
    </div>
  );
}


export default App;
