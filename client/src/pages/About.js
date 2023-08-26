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
          I have always loved drawing and painting for as long as I can
          remember. I spent all my childhood creating.{" "}
        </p>{" "}
        <p>
          Coming from an Asian background, art was not a career pathway that was
          encouraged and so I ended up in Glasgow, where I studied Dentistry.{" "}
          <p>It was here that my passion for the arts was re-kindled. </p>A
          close friend failed her first year at dental school and decided to
          change to architecture so needed to build up her portfolio...I joined
          an evening art class with her at Glasgow School of Art, where my
          journey began.{" "}
          <p>
            Returning to London, I worked as a dentist full-time initially,
            eventually going to part time as I felt compelled to paint.
          </p>
          <p>
            In 2008 I, sadly lost my husband unexpectedly. I was left with 3
            young children. It was this life-changing event that confirmed for
            me that life is too short not to follow your heart and ever since I
            have committed to pursuing my art as a career.
          </p>{" "}
          <p>
            {" "}
            I am self-taught, which I feel has been a blessing as I follow no
            learnt rules and I hold no expectations. I paint from the heart,
            experimenting with new styles and techniques.{" "}
          </p>{" "}
          <p>
            Life is my inspiration. I am fascinated by people and emotions and I
            spend alot of time in nature, in Richmond park and by the water,
            both the sea and the river. As a result, my art is eclectic. I love
            painting figures and faces, animals, sea and landscape and abstract.{" "}
          </p>{" "}
          <p>
            My style varies too, depending on my mood. I love working in oils
            with knives applied thickly creating texture and form using vibrant
            rich colours but also love the delicate impressionistic washes of
            pen, ink and watercolor.{" "}
          </p>{" "}
          <p>
            I love a commission, as I recognise that each one that I have had
            has pushed me to grow as an artist as it challenges me to do
            something that I would not otherwise have possibly tried.
          </p>{" "}
          <p>
            I have recently started running art workshops from my garden studio
            for both children and adults.
          </p>{" "}
          <p>
            {" "}
            I also work as a craniosacral therapist which I feel enhances my art
            as it is a meditative grounding practice that enables you to get out
            of your own way and feel.
          </p>
        </p>
      </div>
    </div>
  );
}

export default About;
