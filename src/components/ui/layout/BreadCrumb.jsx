import { Link } from "react-router-dom"
import BeigeLayout from "./BeigeLayout";
import { MdKeyboardArrowRight } from "react-icons/md";

const BreadCrumb = (props) => {
  return (
    <div className={props.className}>
      <BeigeLayout>
        <div className="container">
          <div className="breadcrumb_text">
            <h4 className="mb-1">{props.title}</h4>
            <div className="breadcrumb_links d-flex">
              <Link to="/" className="black-links">
                Home
                <MdKeyboardArrowRight />
              </Link>
              <span>{props.title}</span>
            </div>
          </div>
        </div>
      </BeigeLayout>
    </div>
  );
};

export default BreadCrumb;
