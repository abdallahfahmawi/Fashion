import { Link } from "react-router-dom";

import './banner.scss'

const Banner = () => {
    return (
        <div className="container">
<div className="row">
    <div className="col-lg-7 offset-lg-4">
        <div className="banner_item">
            <div className="banner_item_pic">
            </div>
            <div className="banner_item_text ">
                <h2>Clothing Collections 2030</h2>
                <Link to="" className="banner-links">
                    SHOP NOW
                </Link>
            </div>
        </div>
    </div>
    <div className="col-lg-5">
    <div className="banner_item">
            <div className="banner_item_middle">
            </div>
            <div className="banner_item_middletext ">
                <h2>Clothing Collections 2030</h2>
                <Link to="" className="banner-links">
                    SHOP NOW
                </Link>
            </div>
        </div>
    </div>
    <div className="col-lg-7">
        <div className="banner_item">
            <div className="banner_item_last">
            </div>
            <div className="banner_item_text ">
                <h2>Clothing Collections 2030</h2>
                <Link to="" className="banner-links">
                    SHOP NOW
                </Link>
            </div>
        </div>
    </div>
</div>
</div>
    )
}

export default Banner 


