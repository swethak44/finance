import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Contact from './pages/Contact';
// import Services from './pages/Services';
// import About from './pages/About';
// import Home from './pages/Home';

export default function Menu() {
    return (
      <div>
            <nav class="navbar navbar-expand-lg bg-black">
              <div class="container">
                  <a class="navbar-brand text-white fst-italic" href="mfinance">MFinance</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                   <div class="collapse navbar-collapse " id="navbarSupportedContent" >
                      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                          <li class="nav-item" >
                              <a class="nav-link active text-white" aria-current="page" href="/home">Home</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link text-white" href="/about">About</a>
                          </li>
                          <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle text-white" href="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Services
                              </a>
                              <ul class="dropdown-menu">
                                  <li><a class="dropdown-item" href="/services">finance</a></li>
                                  <li><a class="dropdown-item" href="/mutualfunds">Mutualfunds</a></li>
                                  <li><a class="dropdown-item" href="/shares">shares</a></li>
                                  <li><a class="dropdown-item" href="/loans">loans</a></li>
                              </ul>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link text-white" href="/contact">Contact</a>
                          </li>
                          
                      </ul>
                    </div>
              </div>
            </nav>
            {/* <Home /> */}
            {/* <About /> */}
            {/* <Services /> */}
            {/* <Contact /> */}

        </div>
    )
}
