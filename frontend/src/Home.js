import React, { useContext } from 'react'
import { MovieContext } from './App.js'



const Home = () => {
  const {movies, setMovies} = useContext(MovieContext);


  return (  
    <>
      <h1>List of Movies</h1>
      {movies.map(movie => {
        return <div key={movie.id}>{movie.title}</div>
      })}
    </>
  );
}
 
export default Home;