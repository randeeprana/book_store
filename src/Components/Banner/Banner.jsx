import Header_Img from "../../img/header-img.png";
import './Banner.css';

const Banner = () => {
  return (
    <>
     <section className="banner-area" id="home">
        <div className="container">
          <div className="row fullscreen d-flex align-items-center justify-content-center">  
            <div className="banner-content col-lg-6 text-center"> 
              <h5 className="text-uppercase">Author: Travor James</h5>
              <h1 className="text-uppercase">New Adventure</h1>
              <p className="text-white pt-10 pb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <a href="#" className="primary-btn text-uppercase">
                Buy Now for $9.99
              </a>
            </div>
            <div className="col-lg-4 banner-right">
              <img className="img-fluid" src={Header_Img} alt="Book of Ideas" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
