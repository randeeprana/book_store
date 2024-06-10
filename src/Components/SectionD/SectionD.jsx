
import './SectionD.css'; 
const SectionD = () => {
  return (
    <section className="price-area section-gap" id="price">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">Purchase whatever you want</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>						
        <div className="row">
          <div className="col-lg-4">
            <div className="single-price no-padding">
              <div className="price-top">
                <h4>PDF</h4>
              </div>
              <p>
                Who are in extremely love with <br/>
                eco friendly system.
              </p>
              <div className="price-bottom">
                <h1><span>$</span> 79.99</h1>
                <a href="#" className="primary-btn header-btn">Purchase Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-price no-padding">
              <div className="price-top">
                <h4>E-Book</h4>
              </div>
              <p>
                Who are in extremely love with <br/>
                eco friendly system.
              </p>
              <div className="price-bottom">
                <h1><span>$</span> 99.99</h1>
                <a href="#" className="primary-btn header-btn">Purchase Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-price no-padding">
              <div className="price-top">
                <h4>Print Copy</h4>
              </div>
              <p>
                Who are in extremely love with <br/>
                eco friendly system.
              </p>
              <div className="price-bottom">
                <h1><span>$</span> 59.99</h1>
                <a href="#" className="primary-btn">Purchase Now</a>
              </div>
            </div>				
          </div>								
        </div>
      </div>	
    </section>
  )
}

export default SectionD;
