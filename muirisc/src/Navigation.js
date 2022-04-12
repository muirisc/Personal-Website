import "./Navigation.css"; 

const Navigation = () => {



  return(
    <nav>
   <div className="NavBar">
      <ul>
        <li><a id="NavBar"href="/">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a id="gallery"href="/gallery">Work</a></li>
        <li><a href="/Contact">Contact</a></li>

      </ul>
  </div>
    </nav>
  )
}

export default Navigation;