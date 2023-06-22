import "../assets/styles/overview.css";
import { useState, setState } from "react";

function PaintingOverview(params) {
  const paintings = params.paintings;
  const [fullScreenImage, setFullScreenImage] = useState("");
  const [showFullScreen, setShowFullScreen] = useState(false);

  const displayFullScreenImage = (name) => {
    setFullScreenImage(name);
    setShowFullScreen(true);
  };

  const hideFullScreen = () => {
    setShowFullScreen(false);
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-paintings-container">
        {paintings.map((painting) => {
          return (
            <div
              className="portfolio-individual-container"
              key={painting._id}
              id={painting.image}
            >
              <img
                onClick={() => displayFullScreenImage(painting.image)}
                src={(() => {
                  try {
                    return require(`../assets/images/${painting.image}.jpg`);
                  } catch (error) {
                    console.log(error);
                    console.log(painting.image);
                    return require("../assets/images/josie4.jpg"); // Use fallback image if it doesn't exist
                  }
                })()}
              ></img>
            </div>
          );
        })}
      </div>
      {showFullScreen ? (
        <>
          {fullScreenImage ? (
            <div
              className="full-screen-image-container"
              onClick={hideFullScreen}
            >
              <img
                src={(() => {
                  try {
                    return require(`../assets/images/${fullScreenImage}.jpg`);
                  } catch (error) {
                    console.log(error);
                    console.log(fullScreenImage);
                    return require("../assets/images/josie4.jpg"); // Use fallback image if it doesn't exist
                  }
                })()}
              ></img>
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

export default PaintingOverview;
