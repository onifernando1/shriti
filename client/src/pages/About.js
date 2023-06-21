require("../assets/styles/about.css");

function About() {
  return (
    <div className="about-container">
      <div>My Story</div>
      <img
        className="shriti-portrait"
        src={require("../assets/images/shritiportrait.jpg")}
      ></img>
    </div>
  );
}

export default About;
