import React from 'react';
import './Header.css'; 
import Logo from '../../img/logo.png';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="Logo" style={{ width: '95px', height: '30px' }} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Fact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Price</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Course</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
