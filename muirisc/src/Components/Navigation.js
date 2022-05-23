import "../CSS/Navigation.css"; 
import {useState} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import GitHubO from "../GitHubOrange.svg";
import GitHubW from "../GitHub_White.svg"
import LinkedInO from "../linked_in.svg"
import LinkedInW from "../linkedin_white.svg";
import Button from '@mui/material/Button';
import { Email } from "@mui/icons-material";

// export default function SimpleMediaQuery() {
//   const matches = useMediaQuery('(min-width:600px)');

//   return <span>{`(min-width:600px) matches: ${matches}`}</span>;
// }
const Navigation = () => {

  const [hamburger, setHamburger] = useState(true)
  const[git, setGit] = useState(`${GitHubO}`)
  const[linkedIn, setLinkedIn] = useState(`${LinkedInO}`)
  const[mail, setMail] = useState('#da6c1a')

  const frame = () =>{
    // setHamburger(!hamburger)
  }
  const mailColor = () => {
    setMail('white')
  }
  const mailBack = () =>{
    setMail('#da6c1a')
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
      <div className="socialMedia">
      <a href="https://github.com/muirisc" rel="noreferrer" target="_blank"><img src={git} href="https://github.com/muirisc" alt="GitHub Logo" onMouseOver={()=>setGit(`${GitHubW}`)} onMouseOut={()=>setGit(`${GitHubO}`)}/></a>
      <a href="https://www.linkedin.com/in/michael-vanaman/" rel="noreferrer" target="_blank"><img src={linkedIn} alt="LinkedIn Logo" onMouseOver={()=>setLinkedIn(`${LinkedInW}`)} onMouseLeave={()=>setLinkedIn(`${LinkedInO}`)}/></a>
      <Email  style={{color: `${mail}`}} onMouseEnter={mailColor} onMouseLeave={mailBack}></Email>
      </div>
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
