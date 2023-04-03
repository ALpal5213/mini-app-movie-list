import React, { useContext } from 'react'
import { MovieContext } from './App.js'



const Home = () => {
  const {movies, setMovies, query} = useContext(MovieContext);
  let filteredMovies = movies.filter(movie => {
    if(query.length > 0) {
      return movie.title.includes(query);
    } else {
      return true;
    }
    
  })

  return (  
    <>
      <h1>List of Movies</h1>
      {filteredMovies.map(movie => {
        return <div key={movie.id}>{movie.title}</div>
      })}
    </>
  );
}
 
export default Home;