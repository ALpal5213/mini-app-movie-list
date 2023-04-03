import React, { useContext, useState, useRef } from 'react'
import { Container, Row, Col, OverlayTrigger, Button } from 'react-bootstrap'
import { MovieContext } from './App.js'
import Card from './Card.js'
import AddMovie from './AddMovie.js'
import "./Home.css"

const Home = () => {
  const {movies, setMovies, query} = useContext(MovieContext);

  let filteredMovies = movies.filter(movie => {
    return query.length > 0 ? movie.title.toLowerCase().includes(query.toLowerCase()) : true;
  })

  return (  
    <>
      <h1>List of Movies</h1>
      
      <Container fluid="md">
        <Row>
          
        </Row>
        <Row>
          <Col className="flex">
            <OverlayTrigger trigger="click" placement="bottom" overlay={<AddMovie/>}>
              <Button id="add-button" variant="dark">Add Movie</Button>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row>
          <Card movies={filteredMovies}/>
        </Row>
      </Container>
    </>
  );
}
 
export default Home;