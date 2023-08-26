require("../assets/styles/workshop.css");

function Workshops() {
  return (
    <div>
      <div className="workshop-container">
        <div className="upcoming">
          <div id="workshop-title">upcoming workshops</div>

          <div className="individual-workshop">
            sunday 10th september - pen and ink
          </div>
        </div>
        <div className="past">
          <div id="workshop-title">past workshops</div>
          <div className="individual-workshop">
            sunday 6th august - textured art
          </div>
          <div className="individual-workshop">25th june - textured art</div>
          <div className="individual-workshop">3rd june - textured art</div>
        </div>
      </div>
    </div>
  );
}

export default Workshops;
