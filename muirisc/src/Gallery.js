import "./Gallery.css";
import { useState } from "react";
import ClicknPlay from "./Screen Shot 2022-04-08 at 2.26.11 PM.png";
import WallStreet from "./Screen Shot 2022-04-08 at 3.44.31 PM.png";


const Gallery = () => {
  const [currentImages, setCurrentImages] = useState(0);

  const imageBank = [
    {
      name: "A Simulated Walk Down Wallstreet",
      image: `${WallStreet}`,
      stack: "React & Ruby on Rails",
      description:
        "A Stock Game where Users can purchase and sell stocks at randomly changing prices. The app also includes a daily quiz and basic information regarding the Stock Market.",
    },
    {
      name: "Click & Play",
      image: `${ClicknPlay}`,
      stack: "React & Sinatra",
      description:
        "A database to look up games and see on what platforms they may be played along with reviews and a brief description. The site includes a filter and allows the user to post their own games to the databse.",
    },
  ];
  const length = imageBank.length;

  const nextSlide = () => {
    setCurrentImages(currentImages === length - 1 ? 0 : currentImages + 1);
  };

  const previousSlide = () => {
    setCurrentImages(currentImages === 0 ? length - 1 : currentImages - 1);
  };
  const nextArrowSlide = (e) => {
    if (e.keycode === "39") {
      setCurrentImages(currentImages === length - 1 ? 0 : currentImages + 1);
    }
  };
  // onKeyDown={nextArrowSlide(e)}

  if (!Array.isArray(imageBank) || imageBank.length <= 0) {
    return null;
  }
  return (
    <div className="gallery">
      <h3> Gallery</h3>
      <div className="galleryIntro">
        <p>
          Below are just some of the projects I have created. Feel free to
          browse. Comments and suggestions are welcome!
        </p>
      </div>
      {/* {imageBank.map((image) =>{
    return(<h3>{image.name}</h3>)
      })}  */}
      <div div className="imageCarousel">
        <button onClick={previousSlide} className="arrowLeft">
          &#8249;
        </button>
        {imageBank.map((image, index) => {
          return (
            <div
              className={index === currentImages ? "slideActive" : "slide"}
              key={index}
            >
              {index === currentImages && (
                <>
                  <h3>{image.name}</h3>
                  <img
                    src={image.image}
                    alt="front page screenshot of website"
                    className="image"
                  />
                  <h4>{image.stack}</h4>
                  <p>{image.description}</p>
                </>
              )}
            </div>
          );
        })}
        <button onClick={nextSlide} className="arrowRight">
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Gallery;
