import "./About.css";
import {useState} from "react";
import GitHubO from "./GitHubOrange.svg";
import GitHubW from "./GitHub_White.svg"
import LinkedInO from "./linked_in.svg"
import LinkedInW from "./linkedin_white.svg";


const About = () => {
const [card, setCard] = useState(true)
const[git, setGit] = useState(`${GitHubW}`)
const[linkedIn, setLinkedIn] = useState(`${LinkedInW}`)

const manageCard = () =>{
  setCard(!card)
}

  return(
    <section className="about">
      <div className="flip-card">
  <div className={card ? "flip-card-inner" : "flipped-card-inner"} onClick={manageCard}> 

      <div className="aboutBlackBoard">
        <h3> About Me</h3>
        <p>I am a software engineer and writer. My passion is finding unique solutions to problems and breaking down complicated subject matter into more easily understandable forms. I love frontend coding and design and how the field is constantly evolving.</p>
        <p>Flip this card for my contact info! </p>
    </div>

    <div className="aboutBlackBoardBack">
      <div>
        <a href="https://www.linkedin.com/in/michael-vanaman/"><img src={linkedIn} alt="LinkedIn Logo" onMouseOver={()=>setLinkedIn(`${LinkedInO}`)} onMouseLeave={()=>setLinkedIn(`${LinkedInW}`)}/>
        <p>LinkedIn</p></a>
        </div>
        <div>
        <a href="https://github.com/muirisc"><img src={git} href="https://github.com/muirisc" alt="GitHub Logo" onMouseOver={()=>setGit(`${GitHubO}`)} onMouseOut={()=>setGit(`${GitHubW}`)} />
          <p>Github</p></a>
          </div>
          <div>
            <a href="mailto:muirisc07@gmail.com"><p>Email</p></a>
            </div>
    </div>
</div>
  </div>
    <div className="skills">
    <h3> Skills</h3>
    <div className="skillList">
    
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Ruby</li>
        <li>Python</li>
        <li>Photoshop</li>
        <li>SQL</li>
        <li>TypeScript</li>
        <li>React.js</li>
        <li>Ruby on Rails</li>
        {/* <li>GitHub</li>
        <li></li>
        <li>Writing</li> */}
      
      </div>
    </div>

    </section>
  )
}
export default About; 