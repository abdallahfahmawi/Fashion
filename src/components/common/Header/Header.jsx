import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.scss";
import "../../../assets/styles/variables.scss";
import "../../../assets/styles/commonstyles.scss";
import { FiChevronDown } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../../assets/images/logo.png";


const Header = (props) => {
  const [activeItem, setIsActive] = useState(0);


  //////////////// cart number ////////
  const cartNumnber = useSelector((state) => {
    const number = state.cart.quantity
    return number
  })
  const cartAmount = useSelector((state) => {
    const totalAmount = state.cart.totalAmount
    return totalAmount.toFixed(2)
  })
  ///////////////////////////// we should use on useSelector


  ///////// define a state to get the width of the windows
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  ////////// define a sates to manipulate the menu open
  const [menuOpen, setMenuOpen] = useState(false);

  /////// useEffect hook to get the window size

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
      console.log(size.width);
    }
  }, [size.width, menuOpen]);

  const toggleHandle = () => {
    setMenuOpen((p) => !p);
  };

  ///////////////// Menu items////////////////////////////
  const renderedHeaderMenu = props.headerMenu.map((menuItem, index) => {
    const active = index === activeItem;

    return (
      <li key={menuItem.id} onClick={() => setIsActive(index)}>
        <Link
          to={menuItem.path}
          className={active ? "activeMenu" : ""}
          onClick={toggleHandle}
        >
          {menuItem.name}
        </Link>
      </li>
    );
  });
  ///////////////// Menu items/////////////////////////////////

  return (
    <div className="header">
      <div className="header_top background-black ">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 col-6">
              <div className="header_top_left">
                <p className="m-0">
                  Free shipping 30-days return or refund guarantee.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-6">
              <div className="header_top_right">
                <ul className="list-style m-0 d-flex justify-content-end">
                  <li>
                    <Link to="#">SIGN IN</Link>
                  </li>
                  <li>
                    <Link to="#">FAQS</Link>
                  </li>
                  <li>
                    <span className="d-flex">
                      USD <FiChevronDown className="mt-0" />
                    </span>
                    <ul className="list-style header_top_right_currency">
                      {/**must be a map in an array  */}
                      <li>USD</li>
                      <li>EUR</li>
                      <li>USD</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**bottom header */}
      <div className="container header_footer">
        <div className="row ">
          <div className="d-flex justify-content-between">
            <div className="header_footer_logo">
              <Link to="home">
                <img src={logo} />
              </Link>
            </div>

            <div
              className={`header_footer_menu ${
                menuOpen && size.width < 768 ? "side-navbar" : ""
              }`}
            >
              <ul className="list-style justify-content-center">
                {renderedHeaderMenu}
              </ul>
            </div>

            <div className="header_footer_navoptions">
              <ul className="list-style d-flex m-0 p-0 justify-content-end">
                <li>
                  <Link to="" className="black-links">
                    <BiSearch />
                  </Link>
                </li>
                <li>
                  <Link to="favorite" className="black-links">
                    <AiOutlineHeart />
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="black-links header_footer_navoptions_cart"
                  >
                    <AiOutlineShopping />
                    <span>{cartNumnber}</span>
                  </Link>
                  <span>${cartAmount}</span>
                </li>
              </ul>
              <div
                className="header_footer_navoptions_toggle"
                onClick={toggleHandle}
              >
                <span>
                  <GiHamburgerMenu />
                </span>
              </div>
            </div>
          </div>

          {/**the button */}
        </div>
      </div>
    </div>
  );
};

export default Header;
