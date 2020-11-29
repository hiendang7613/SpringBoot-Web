import React, { useEffect } from 'react'
import {
  Header,
  Footer,
  TheContent
} from './index'
import '../../../assetsnews/vendors/aos/dist/aos.css/aos.css';
import '../../../assetsnews/css/style.css';
import '../../../assetsnews/vendors/mdi/css/materialdesignicons.min.css';
import { withRouter } from 'react-router-dom';





const NewsLayout = () => {


  return (
    <div className="container-scroller">
      <div className="main-panel">
      <Header/>
      <div className="flash-news-banner">
          <div className="container">
            <div className="d-lg-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <span className="badge badge-dark mr-3">Flash news</span>
                <p className="mb-0">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s.
                </p>
              </div>
              <div className="d-flex">
                <span className="mr-3 text-danger">Wed, March 4, 2020</span>
                <span className="text-danger">30°C,London</span>
              </div>
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="container">
        <TheContent/>
        </div>
        </div>
        <Footer/>
      </div>
    </div>
    
  )
}

export default withRouter(NewsLayout)
