import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('ADD_MOVIE', addMovie);
}

function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get('/api/movie');
    console.log('get all:', movies.data);
    yield put({ type: 'SET_MOVIES', payload: movies.data });
  } catch {
      console.log('get all error');
  } 
}

function* fetchGenres() {
  try {
    const genres = yield axios.get('/api/genre')
    yield put({ 
      type: 'SET_GENRES', 
      payload: genres.data
    })
  }
  catch(err) {
    console.log('error getting genres', err);
  }
}

function* addMovie(action) {
  try {
    yield axios.post('/api/movie', action.payload);
    yield put({ type: 'FETCH_MOVIES' });
  }
  catch(err) {
    console.log('error in addMovie', err);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    case 'SELECT_MOVIE':
      console.log('select movie', state)
      console.log('id to compare', action.payload)
      return state.filter(movie => movie.id == action.payload);
    default:
      return state;
  }
}

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

const editMovie = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EDIT_MOVIE':
      return action.payload;
    case 'EDIT_ONCHANGE':
      return {
        ...state,
        [action.payload.property]: action.payload.value
      };
    case 'EDIT_CLEAR': 
      return {};
    default:
      return state;
  }
}

// Create one store that all components can use
const store = createStore(
    combineReducers({
        movies,
        genres,
        editMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
