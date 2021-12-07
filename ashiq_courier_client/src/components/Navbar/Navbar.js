import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 bg-body rounded">
                <div className="container">
                    <a className="navbar-brand brand-nav">AS COURIER</a>
                    <div className="d-flex">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link link-nav" aria-current="page" href="#">Home</a>
                                </li>
                               
                                <li class="nav-item">
                                    <a class="nav-link link-nav" aria-current="page" href="#">About</a>
                                </li>
                               
                                <li class="nav-item ">
                                    <a class="nav-link link-nav" aria-current="page" href="#">Search Tracking</a>
                                </li>
                               
                                <li class="nav-item">
                                    <a class="nav-link link-nav" aria-current="page" href="#">Contact</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link link-nav" aria-current="page" href="#">Login</a>
                                </li>
                               
                                
                              
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;