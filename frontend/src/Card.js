import React, { useContext } from 'react'
import { Col, Button } from 'react-bootstrap'
import { MovieContext } from './App.js'
import './Card.css'

const Card = ({movies}) => {

  const {trigger, setTrigger} = useContext(MovieContext);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/movies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(res => setTrigger(!trigger));
  }

  return (  
    <>
   
      {movies.map(movie => {
        return <Col key={movie.id} className="column" xs="12" sm="6" md="3">
          <div className="movie-card">
            <h3>{movie.title}</h3>
            <Button variant="danger" onClick={() => handleDelete(movie.id)}>Delete</Button>
          </div>
        </Col>
      })}
    </>
  );
}
 
export default Card;