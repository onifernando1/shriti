require("../assets/styles/workshop.css");

function Workshops() {
  return (
    <div>
      <div className="workshop-container">
        <div className="upcoming">
          <div id="workshop-title">upcoming workshops</div>
          <div>sunday 25 june - textured art</div>
        </div>
        <div className="past">
          <div id="workshop-title">past workshops</div>
          <div>3rd june - textured art</div>
          <img></img>
          <div>PHOTOS</div>
        </div>
      </div>
    </div>
  );
}

export default Workshops;
