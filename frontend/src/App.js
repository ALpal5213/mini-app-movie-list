import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import React, { useEffect, useState, createContext} from 'react'
import Home from './Home.js'
import Navbar from './Navbar.js'
import './App.css';

export const MovieContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch('http://localhost:8080/movies')
      .then(res => res.json())
      .then(data => {
        setMovies(data);
      })
  }, [])

  return (
    <Router>
      <MovieContext.Provider value={ {
        movies, setMovies,
        query, setQuery,
      } }>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </MovieContext.Provider>
    </Router>
  );
}

export default App;
