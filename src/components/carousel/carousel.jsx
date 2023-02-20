import Button from "../common/Button/Button";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";


import "./carousel.scss"


const  Carousel  = () => {
 
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
       <div className="carousel-title">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-7">
                        <div className="title">
                            <h6>Summer Collection</h6>
                            <h2>Fall - Winter Collections 2030</h2>
                            <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.</p>
                        </div>
                        <Button buttonStyle="btn-black" type="button">
                          SHOP NOW
                          <BsArrowRight/>
                        </Button>
                    </div>
                </div>
            </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className='carousel-item_imageholderone'>
           
        </div>
      </div>
      <div className="carousel-item">
        <div className='carousel-item_imageholdertwo'></div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-ico" aria-hidden="true"><BsArrowLeft/></span>
      <span className="visually-hidden"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-ico" aria-hidden="true"><BsArrowRight/></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  );
}

export default Carousel;