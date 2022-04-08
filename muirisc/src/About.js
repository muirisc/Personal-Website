import "./About.css";
const About = () => {


  return(
    <section className="about">
      <div className="flip-card">
  <div className="flip-card-inner"> 

      <div className="aboutBlackBoard">
        <h3> About Me</h3>
        <p>I am a software engineer and writer. My passion is finding unique solutions to problems and breaking down complicated subject matter into more easily understandable forms.</p>
        <p>Lorem Ipsum ... </p>
    </div>

    <div className="aboutBlackBoardBack">
      <div>
        <p>LinkedIn</p>
        </div>
        <div>
          <p>Github</p>
          </div>
          <div>
            <p>Medium</p>
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