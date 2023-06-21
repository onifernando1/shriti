import "../assets/styles/home.css";
import { isMobile } from "react-device-detect";

function Home() {
  return (
    <div className="home-container">
      {isMobile ? (
        <div>
          <div className="logo">Shriti Fernando</div>
          <img src={require("../assets/images/backgroundfinal.jpg")}></img>
        </div>
      ) : (
        <img src={require("../assets/images/josie5.jpg")}></img>
      )}
    </div>
  );
}

export default Home;
