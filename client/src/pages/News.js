require("../assets/styles/news.css");
function News() {
  return (
    <div className="news-container">
      <div className="upcoming-news">upcoming events</div>
      <div className="written-news">
        <div>KAOS @ rose theatre</div>
        <div>4th october - 4th november</div>
      </div>
      <img className="news" src={require("../assets/images/kaos.jpg")}></img>
    </div>
  );
}

export default News;
