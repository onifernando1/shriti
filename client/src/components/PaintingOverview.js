function PaintingOverview(params) {
  const paintings = params.paintings;
  return (
    <div className="portfolio-container">
      <div className="header-temp">HEADER HEADER HEADER </div>
      <div className="portfolio-paintings-container">
        {paintings.map((painting) => {
          return (
            <div className="portfolio-individual-container">
              <img
                src={require(`../assets/images/${painting.image}.jpg`)}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PaintingOverview;
