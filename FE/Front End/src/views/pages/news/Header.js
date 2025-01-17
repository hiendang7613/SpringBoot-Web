import React from 'react'

import {
  CLink
} from '@coreui/react'
const Home = (props) => {

  return (
    <div className="container-scroller">
      <div className="main-panel">
        <header id="header">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="navbar-top">
                <div className="d-flex justify-content-between align-items-center">
                  <ul className="navbar-top-left-menu">
                  </ul>
                  <ul className="navbar-top-right-menu">
                    <li className="nav-item">
                      <a href="" className="nav-link"><i className="mdi mdi-magnify"></i></a>
                    </li>
                    <li className="nav-item">
                    <CLink className="nav-link" href="/login">
                      Login
                    </CLink>
                    </li>
                    <li className="nav-item">
                    <CLink className="nav-link" href="/register">
                      Register
                    </CLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="navbar-bottom">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <a className="navbar-brand" href="#"
                      ><img src="/assets/images/logo.svg" alt=""
                    /></a>
                  </div>
                  <div>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="navbar-collapse justify-content-center collapse"
                      id="navbarSupportedContent"
                    >
                      <ul
                        className="navbar-nav d-lg-flex justify-content-between align-items-center"
                      >
                        <li>
                          <button className="navbar-close">
                            <i className="mdi mdi-close"></i>
                          </button>
                        </li>
                        <li className="nav-item active">
                          <a className="nav-link" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                        <CLink className="nav-link" to="/register">
                          TIN TỨC
                        </CLink>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/business.html">THỂ THAO</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/sports.html">CÔNG NGHỆ</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/contactus.html">ABOUT US</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a href="#">
                        <i className="mdi mdi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="mdi mdi-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="mdi mdi-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
        </div>
        </div>
  )
}

export default Home
