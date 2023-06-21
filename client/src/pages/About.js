require("../assets/styles/about.css");

function About() {
  return (
    <div className="about-container">
      <img
        className="shriti-portrait"
        src={require("../assets/images/shritiportrait.jpg")}
      ></img>
      <div className="about-text">
        <p>
          ​Having worked as a dentist for some years, I lost my husband
          unexpectedly, leaving me with three young children. This changed the
          course of my life and I felt compelled to follow my passion for art. I
          also work as a craniosacral therapist.{" "}
        </p>{" "}
        <p>
          ​As a self- taught artist, my work is diverse and dynamic. Many of my
          pieces are on huge canvases that transform rooms and create talking
          points.{" "}
        </p>{" "}
        <p>
          My pieces include large textured abstracts, figures and landscapes in
          oil, portraits in pencil and pastel, acrylic on aluminium and board,
          pen/ink and watercolour. I am constantly experimenting with different
          media and form, having fun with each stage. Inspired by nature and
          life experience, creating light, depth and movement, I invite the
          viewer to lose him/herself in the art, being drawn beyond the canvas
          to a place of calm or joy.{" "}
        </p>
      </div>
    </div>
  );
}

export default About;
