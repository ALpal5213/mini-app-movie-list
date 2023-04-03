import { Container, Row, Col } from 'react-bootstrap'
import { Navbar as Nbar, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { MovieContext } from './App.js'




const Navbar = () => {
  const Navigate = useNavigate();
  const {query, setQuery} = useContext(MovieContext);
  const [searchString, setSearchString] = useState("");

  return ( 
    <Nbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Col>
          <div onClick={() => Navigate("/")}>Home</div>
        </Col>
        <Col>
          <input placeholder="Search for Movies" onChange={(e) => setSearchString(e.target.value)}/>
          <button type="submit" onClick={() => setQuery(searchString)}>Search</button>
        </Col>
      </Container>
    </Nbar>
    
  );
}
 
export default Navbar;