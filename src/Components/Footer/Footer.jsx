import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer-area section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>About Us</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua.
              </p>
              <p className="footer-text">
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>2024
                All rights reserved | This template is made with{" "}
                <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                <a
                  href="https://github.com/randeeprana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RANA
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>Newsletter</h6>
              <p>Stay update with our latest</p>
              <div id="mc_embed_signup">
                <form
                  target="_blank"
                  noValidate
                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                  method="get"
                  className="form-inline"
                >
                  <input
                    className="form-control"
                    name="EMAIL"
                    placeholder="Enter Email"
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "Enter Email")}
                    required
                    type="email"
                  />
                  <button className="click-btn btn btn-default">
                    <i
                      className="fa fa-long-arrow-alt-right"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div style={{ position: "absolute", left: "-5000px" }}>
                    <input
                      name="b_36c4fd991d266f23781ded980_aefe40901a"
                      tabIndex="-1"
                      value=""
                      type="text"
                    />
                  </div>
                  <div className="info"></div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
            <div className="single-footer-widget">
              <h6>Follow Us</h6>
              <p>Let us be social</p>
              <div className="footer-social d-flex align-items-center">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-dribbble"></i>
                </a>
                <a href="#">
                  <i className="fab fa-behance"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
