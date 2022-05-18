import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './About';
import reportWebVitals from './reportWebVitals';
import Navigation from "./Navigation";
import Gallery from "./Gallery";
import Footer from "./Footer";

ReactDOM.render(
  <React.StrictMode>
    <div className="contentContainer">
    <Navigation />
    <About />
    <Gallery />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//Projects, About Me, Why Code, Skills, 