import { Container, Row, Col } from 'react-bootstrap'
import { Navbar as Nbar, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { MovieContext } from './App.js'
import './Navbar.css'




const Navbar = () => {
  const Navigate = useNavigate();
  const {query, setQuery} = useContext(MovieContext);
  const [searchString, setSearchString] = useState("");

  return ( 
    <Nbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Col>
          <div className="home-button" onClick={() => Navigate("/")}>Home</div>
        </Col>
        <Col>
          <input placeholder="Search for Movies" onChange={(e) => {
            return e.target.value.length > 0 ? setSearchString(e.target.value) : setQuery("");
          }}/>
          <button type="submit" onClick={() => setQuery(searchString)}>Search</button>
        </Col>
      </Container>
    </Nbar>
    
  );
}
 
export default Navbar;