import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useEffect, useState, createContext} from 'react'
import Home from './Home.js'
import Details from './Details.js'
import Navbar from './Navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const MovieContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [trigger, setTrigger] = useState(false);
  const [movie, setMovie] = useState(null);
  const [watched, setWatched] = useState('all');

  useEffect(() => {
    fetch('http://localhost:8080/movies')
      .then(res => res.json())
      .then(data => {
        setMovies(data);
      })
  }, [trigger])

  return (
    <Router>
      <MovieContext.Provider value={ {
        movies, setMovies,
        query, setQuery,
        trigger, setTrigger,
        movie, setMovie,
        watched, setWatched,
      } }>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/details/:id" element={<Details/>}></Route>
        </Routes>
      </MovieContext.Provider>
    </Router>
  );
}

export default App;
