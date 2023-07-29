import "../assets/styles/overview.css";
import { useState, setState, useEffect } from "react";
import { isMobile } from "react-device-detect";

function PaintingOverview(props) {
  const paintings = props.paintings;
  const [fullScreenImage, setFullScreenImage] = useState("");
  const [fullScreenImageName, setFullScreenImageName] = useState("");
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [fullScreenPainting, setFullScreenPainting] = useState("");
  const [fullScreenPaintingIndex, setFullScreenPaintingIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    // When fullScreenPaintingIndex changes, update fullScreenPainting state
    if (
      fullScreenPaintingIndex >= 0 &&
      fullScreenPaintingIndex < paintings.length
    ) {
      setFullScreenPainting(paintings[fullScreenPaintingIndex]);
    }
  }, [fullScreenPaintingIndex, paintings]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      console.log("left");
      setFullScreenPaintingIndex(fullScreenPaintingIndex - 1);
    }
    if (isRightSwipe) {
      console.log("right");
      setFullScreenPaintingIndex(fullScreenPaintingIndex + 1);
    }
  };

  const displayFullScreenImage = (name) => {
    setFullScreenImage(name);
    setShowFullScreen(true);
  };

  const hideFullScreen = () => {
    setShowFullScreen(false);
  };

  const findCurrentPaintingIndex = (currentFullScreenPainting) => {
    console.log(paintings);
    let tempIndex = 0;
    let foundIndex;
    console.log(currentFullScreenPainting._id);

    while (paintings[tempIndex]._id != currentFullScreenPainting._id) {
      tempIndex += 1;
    }
    foundIndex = tempIndex;
    console.log(foundIndex);
    setFullScreenPaintingIndex(foundIndex);
  };

  return (
    <div className="portfolio-container">
      <div className="category-name">{props.category_name}</div>
      <div className="portfolio-paintings-container">
        {paintings.map((painting) => {
          return (
            <div
              className="portfolio-individual-container"
              key={painting._id}
              id={painting.image}
            >
              <img
                onClick={() => {
                  displayFullScreenImage(painting.image);
                  setFullScreenImageName(painting.title);
                  setFullScreenPainting(painting);
                  findCurrentPaintingIndex(painting);
                }}
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
              // onClick={hideFullScreen}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div className="full-screen-image-inner-container">
                <div className="close" onClick={hideFullScreen}>
                  X
                </div>
                <div className="image-carousel-container">
                  <img
                    id="full-image"
                    src={(() => {
                      try {
                        return require(`../assets/images/${fullScreenPainting.image}.jpg`);
                      } catch (error) {
                        console.log(error);
                        console.log(fullScreenPainting.image);
                        return require("../assets/images/josie4.jpg"); // Use fallback image if it doesn't exist
                      }
                    })()}
                  ></img>
                  {!isMobile ? (
                    <>
                      <div
                        className="next"
                        onClick={() => {
                          console.log("next");
                          console.log(fullScreenPainting.title);
                          setFullScreenPaintingIndex(
                            fullScreenPaintingIndex + 1
                          );
                          // setFullScreenPainting(paintings[fullScreenPaintingIndex]);
                          // console.log(fullScreenPainting.title);
                        }}
                      >
                        <img src={require("../assets/images/next.png")}></img>
                      </div>
                      <div
                        className="previous"
                        onClick={() => {
                          console.log("previous");
                          console.log(fullScreenPainting.title);
                          setFullScreenPaintingIndex(
                            fullScreenPaintingIndex - 1
                          );
                        }}
                      >
                        <img
                          src={require("../assets/images/previous.png")}
                        ></img>
                      </div>
                    </>
                  ) : null}
                </div>
                <div className="fullscreen-painting-title">
                  {fullScreenPainting.title}
                </div>

                <div className="fullscreen-painting-title">
                  {fullScreenPainting.medium}
                </div>

                <div className="fullscreen-painting-title">
                  {fullScreenPainting.size}
                </div>
              </div>
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

export default PaintingOverview;
