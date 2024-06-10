import React from 'react';
import { FaApple, FaAndroid } from 'react-icons/fa'; // Importing icons
import './SectionF.css';

const SectionF = () => {
  return (
    <section className="call-to-action-area section-gap">
      <div className="container">
        <div className="row justify-content-center top">
          <div className="col-lg-12 text-center">
            <h1 className="text-white">Download Our App for all Platforms</h1>
            <p className="text-white mt-30">
              It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights so far as its popularity and technological advancement are concerned.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="download-button d-flex flex-row justify-content-center mt-30">
            <div className="buttons d-flex flex-column align-items-center">
              <div className="icon">
                <FaApple /> {/* Using the Apple icon */}
              </div>
              <div className="desc text-center">
                <a href="#">
                  <p>
                    <span>Available</span> <br/>
                    on App Store
                  </p>
                </a>
              </div>
            </div>
            <div className="buttons d-flex flex-column align-items-center">
              <div className="icon">
                <FaAndroid /> {/* Using the Android icon */}
              </div>
              <div className="desc text-center">
                <a href="#">
                  <p>
                    <span>Available</span> <br/>
                    on Play Store
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionF;
