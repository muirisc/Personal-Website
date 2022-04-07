import "./Navigation.css"; 

const Navigation = () => {



  return(
    <nav>
   <div className="NavBar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/prices">Prices</a></li>
        <li><a href="/faq">FAQ</a></li>

      </ul>
  </div>
    </nav>
  )
}

export default Navigation;