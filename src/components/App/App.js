import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from '../NavBar/NavBar';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieList from '../MovieList/MovieList';
import AddMovieForm from '../AddMovieForm/AddMovieForm';
import EditForm from '../EditForm/EditForm';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />      
        <Route exact path="/">
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route exact path="/details/:id">
          <MovieDetails />
        </Route>
        
        {/* Add Movie page */}
        <Route exact path="/add">
          <AddMovieForm />
        </Route>

        <Route exact path="/edit/:id">
          <EditForm />
        </Route>

      </Router>
    </div>
  );
}


export default App;
