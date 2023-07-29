// import "../assets/styles/overview.css";
// import { useState, setState } from "react";

// function PaintingOverviewFullScreen(props) {
//   const currentPainting = props.painting;
//   const [showFullScreen, setShowFullScreen] = useState(false);

//   return (
//     <>
//       {fullScreenImage ? (
//         <div className="full-screen-image-container" onClick={hideFullScreen}>
//           <img
//             id="full-image"
//             src={(() => {
//               try {
//                 return require(`../assets/images/${currentPainting.image}.jpg`);
//               } catch (error) {
//                 console.log(error);
//                 console.log(currentPainting.image);
//                 return require("../assets/images/josie4.jpg"); // Use fallback image if it doesn't exist
//               }
//             })()}
//           ></img>
//           <div className="fullscreen-painting-title">
//             {currentPainting.title}
//           </div>
//         </div>
//       ) : null}
//     </>
//   );
// }

// export default PaintingOverviewFullScreen;
