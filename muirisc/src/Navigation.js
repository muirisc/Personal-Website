import "./CSS/Navigation.css"; 
import {useState} from 'react';

const Navigation = () => {

  const [hamburger, setHamburger] = useState(true)

  const frame = () =>{
    setHamburger(!hamburger)
  }


  return(
    <nav onClick={frame}>
  {hamburger ?(
   <div className="NavBar">
      <ul>
        <li><a id="NavBar"href="/">Home</a></li>
        <li><a href="About">About</a></li>
        <li><a id="gallery"href="#gallery">Work</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
      </div>
      ):(
  <div className="burger-container">
    <div className= "burger-box">
    <span></span>
    <span></span>
    <span></span>
    </div>
  </div>
      )
}
    </nav>
  )
}

export default Navigation;
