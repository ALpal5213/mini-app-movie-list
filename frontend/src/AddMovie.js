import React, { useContext, useState } from 'react'
import { MovieContext } from './App.js'
import './AddMovie.css'
import Popover from 'react-bootstrap/Popover';



const AddMovie = () => {
  const {trigger, setTrigger} = useContext(MovieContext);
  const [title, setTitle] = useState('');

  const handlePost = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:8080/movies', {
      method: "POST",
      body: JSON.stringify({
        title: title, 
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => setTrigger(!trigger))
  }

  return (  
    <Popover className="form-popover">
      <Popover.Header as="h3">Add Movie</Popover.Header>
      <Popover.Body>
        <form>
          <div className="input-wrapper">
            <label>Movie Title</label>
            <input type="text" placeholder="Write New Movie Title" onChange={(e) => setTitle(e.target.value)}/>
          </div>
          {/* <div className="input-wrapper">
            <label>Movie Description</label>
            <input type="text" placeholder="Write Description"/>
          </div> */}
          <button type="submit" onClick={handlePost}>Submit</button>
        </form>
      </Popover.Body>
    </Popover>
  );
}
 
export default AddMovie;