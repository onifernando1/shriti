require("../assets/styles/news.css");
function News() {
  return (
    <div className="news-container">
      <div className="upcoming">Upcoming events</div>
      <img className="news" src={require("../assets/images/kaos.jpg")}></img>
    </div>
  );
}

export default News;
