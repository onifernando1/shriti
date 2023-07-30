require("../assets/styles/news.css");
function News() {
  return (
    <div className="news-container">
      <div className="upcoming-news">upcoming events</div>
      <div className="written-news">
        <div>KAOS @ Rose Theatre</div>
        <div>4th October - 4th November</div>
      </div>
      <img className="news" src={require("../assets/images/kaos.jpg")}></img>
    </div>
  );
}

export default News;
