import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (

        <header id="header" className="fixed-top">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <h1 className="logo me-auto me-lg-0"><a href="/">Adarsh Mishra</a></h1>
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li><FontAwesomeIcon icon={faPhone} /> +919554395931</li>
                        <li><FontAwesomeIcon icon={faEnvelope} /> adarshmishra2608@gmail.com</li>
                        <li><a href="https://drive.google.com/file/d/16iuZq25xpW6gY_3t-EXGxnRVr9N6Of02/view?usp=drive_link" target="_blank" rel="noreferrer"><b>Download</b></a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                <div className="header-social-links">
                    <a href="https://github.com/adarshmishra26" target="_blank" rel="noreferrer" className="github"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/adarshmishra26/" target="_blank" rel="noreferrer" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://x.com/adarshmisra26/" className="twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
            </div>
        </header>
    );
};

export default Header;
