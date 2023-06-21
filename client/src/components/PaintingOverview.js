import "../assets/styles/overview.css";
import { useState, setState } from "react";

function PaintingOverview(params) {
  const paintings = params.paintings;
  const [fullScreenImage, setFullScreenImage] = useState("");

  const displayFullScreenImage = (name) => {
    setFullScreenImage(name);
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
                src={require(`../assets/images/${painting.image}.jpg`)}
              ></img>
            </div>
          );
        })}
      </div>
      {fullScreenImage ? (
        <div className="full-screen-image">
          <img src={require(`../assets/images/${fullScreenImage}.jpg`)}></img>
        </div>
      ) : null}
    </div>
  );
}

export default PaintingOverview;
