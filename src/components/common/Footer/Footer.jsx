import Form from "../../ui/form/Form";
import Input from "../Input/input";
import logo from "../../../assets/images/footer-logo.png.webp";
import payment from "../../../assets/images/payment.png.webp";
import "./Footer.scss";
import "../../../assets/styles/variables.scss";
import "../../../assets/styles/commonstyles.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_holder black-background ">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer_holder_about">
              <div className="footer_holder_about_logo">
                <Link to="home">
                  <img src={logo} className="" />
                </Link>
              </div>
              <p>
                The customer is at the heart of our unique business model, which
                includes design.
              </p>
              <Link to="">
                <img src={payment} />
              </Link>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1 ">
            <div className="footer_holder_widget">
              <h6>SHOPING</h6>
              <ul className="list-style">
                <li>
                  <Link to="">Clothing Store</Link>
                </li>
                <li>
                  <Link to="">Trending Shoes</Link>
                </li>
                <li>
                  <Link to="">Accessories</Link>
                </li>
                <li>
                  <Link to="">Sale</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer_holder_widget">
              <h6>SHOPING</h6>
              <ul className="list-style">
                <li>
                  <Link to="">Contact Us</Link>
                </li>
                <li>
                  <Link to="">Payment Methods</Link>
                </li>
                <li>
                  <Link to="">Delivary</Link>
                </li>
                <li>
                  <Link to="">Rerturn & Exhchanges</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-lg-3 offset-lg-1 ">
            <div className="footer_holder_widget">
                <h6>news letter</h6>
                <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                <Form>
                    <Input vlaue="input email" placeholder="Your email"/>
                </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
