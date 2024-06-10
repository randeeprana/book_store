import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CA from "../../img/c1.jpg";
import CB from "../../img/c2.jpg";
import CD from "../../img/c3.jpg";
import UpArrow from '../../img/leftarrow.png'; // Add this line
import DownArrow from '../../img/rightarrow.png'; // Add this line
import "./SectionE.css";

const SectionE = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="course-area section-gap" id="course">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-9">
            <div className="title text-center">
              <h1 className="mb-10">Top Courses That are open for Students</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <div className="single-course item">
            <img className="img-fluid" src={CA} alt="Course 1" />
            <p className="sale-btn">For Sale</p>
            <div className="details">
              <a href="#"><h4>Breakthrough Thinking <span className="price float-right">$25</span></h4></a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
          </div>
          <div className="single-course item">
            <img className="img-fluid" src={CB} alt="Course 2" />
            <p className="sale-btn">For Sale</p>
            <div className="details">
              <a href="#"><h4>Breakthrough Thinking <span className="price float-right">$25</span></h4></a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
          </div>
          <div className="single-course item">
            <img className="img-fluid" src={CD} alt="Course 3" />
            <p className="sale-btn">For Sale</p>
            <div className="details">
              <a href="#"><h4>Breakthrough Thinking <span className="price float-right"/>$25</h4></a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img src={DownArrow} alt="Next" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img src={UpArrow} alt="Previous" />
    </div>
  );
}

export default SectionE;
