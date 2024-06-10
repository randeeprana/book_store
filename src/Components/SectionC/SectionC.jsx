import React, { useEffect } from 'react';
import './SectionC.css';

const SectionC = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;

        if(count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }, []);

  return (
    <section className="counter-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="single-counter">
                  <h1 className="counter" data-target="2536">0</h1>
                  <p>Happy Clients</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="single-counter">
                  <h1 className="counter" data-target="6784">0</h1>
                  <p>Total Projects</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="single-counter">
                  <h1 className="counter" data-target="1059">0</h1>
                  <p>Cups Coffee</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="single-counter">
                  <h1 className="counter" data-target="12239">0</h1>
                  <p>Tickets Submitted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionC;
