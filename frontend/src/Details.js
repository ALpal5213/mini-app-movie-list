import React, { useContext, useState, useEffect } from 'react'
import { MovieContext } from './App.js'
import { Button } from 'react-bootstrap'

const Details = () => {
  const {trigger, setTrigger, movie} = useContext(MovieContext);
  const [update, setUpdate] = useState(movie.watch_status);

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
    .then(res => {
      setTrigger(!trigger)
      setUpdate(!update)
    });
  }

  return (  
    <>
      <h2>{movie.title}</h2>
      <div>Other details</div>
      <Button variant="warning" onClick={() => handlePatch(movie.id, movie.watch_status)}>
        {update ? <span>Watched</span> : <span>Not Watched</span>}
      </Button>
    </>
  );
}
 
export default Details;