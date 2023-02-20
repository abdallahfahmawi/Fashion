
import { MdOutlineDateRange } from "react-icons/md";
import "./Blog.scss";
import "../../../assets/styles/commonstyles.scss"
import { Link } from "react-router-dom";
const Blog = (props) => {
  return (
    <div className="blog_holder ">
      <div className="bolg_holder_image">
        <img src={props.item.image} className="w-100" />
      </div>
      <div className="blog_holder_title white-background position-relative">
        <p>
          <span>
            <MdOutlineDateRange />
          </span>
          {props.item.date}
        </p>
        <h5>{props.item.title}</h5>
        <Link to="" className="banner-links">
            READ MORE
        </Link>
      </div>
    </div>
  );
};

export default Blog;
