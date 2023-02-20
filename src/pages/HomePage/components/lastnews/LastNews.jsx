import Blog from "../../../../components/common/Blog/Blog";
import lastNewsData from "../../../../store/data/lastNews";
import "./LastNews.scss";
const LastNews = () => {
  const renderdNewItems = lastNewsData.map((item) => {
    return (
      <div className="col-lg-4" key={item.id}>
        <Blog item={item} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{renderdNewItems}</div>
    </div>
  );
};

export default LastNews;
