import React, { useContext, useState, useRef } from 'react'
import { Container, Row, Col, OverlayTrigger, Button } from 'react-bootstrap'
import { MovieContext } from './App.js'
import Card from './Card.js'
import AddMovie from './AddMovie.js'
import "./Home.css"

const Home = () => {
  const {movies, setMovies} = useContext(MovieContext);

  return (  
    <>
      <h1>List of Movies</h1>
      <Container fluid="md">
        <Row>
          <Col className="flex">
            <OverlayTrigger trigger="click" placement="bottom" overlay={<AddMovie/>}>
              <Button id="add-button" variant="dark">Add Movie</Button>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row>
          <Card movies={movies}/>
        </Row>
      </Container>
    </>
  );
}
 
export default Home;