import React, { useContext, useState } from 'react'
import { Col, Button } from 'react-bootstrap'
import { MovieContext } from './App.js'
import './Card.css'

const Card = ({movies}) => {
  const {trigger, setTrigger, query} = useContext(MovieContext);
  const [watched, setWatched] = useState('all')
  console.log(watched)
  let filteredMovies = movies.filter(movie => {
    // console.log(movie.watch_status)
    if(watched === 'not') {
      if(query.length > 0) {
        return movie.title.toLowerCase().includes(query.toLowerCase()) && !movie.watch_status;
      } else {
        return !movie.watch_status;
      }
    } else if(watched === 'watched') {
      console.log(movie.watch_status)
      if(query.length > 0) {
        
        return movie.title.toLowerCase().includes(query.toLowerCase()) && movie.watch_status;
      } else {
        return movie.watch_status;
      }
    } else {
      if(query.length > 0) {
        return movie.title.toLowerCase().includes(query.toLowerCase()) 
      } else {
        return true;
      }
    } 
  })

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/movies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(res => setTrigger(!trigger));
  }

  const handlePatch = (id, status) => {
    fetch(`http://localhost:8080/movies/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        id: id,
        watch_status: !status
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => setTrigger(!trigger));
  }

  return (  
    <>  
      <div>
        <div>
          <label>Watched</label>
          <input type="radio" name="watched" value="watched" onClick={() => setWatched('watched')}/>
          <label>All</label>
          <input type="radio" name="watched" value="all" onClick={() => setWatched('all')}/>
          <label>Not Watched</label>
          <input type="radio" name="watched" value="not" onClick={() => setWatched('not')}/>
        </div>
      </div>
      {filteredMovies.map(movie => {
        return <Col key={movie.id} className="column" xs="12" sm="6" md="3">
          <div className="movie-card">
            <h3>{movie.title}</h3>
            <Button variant="warning" onClick={() => handlePatch(movie.id, movie.watch_status)}>
              {movie.watch_status ? <span>Watched</span> : <span>Not Watched</span>}
            </Button>
            <Button variant="danger" onClick={() => handleDelete(movie.id)}>Delete</Button>
          </div>
        </Col>
      })}
    </>
  );
}
 
export default Card;