import React, { useEffect } from 'react'
import {
  Header,
  Footer
} from './index'
import '../../../assetsnews/vendors/aos/dist/aos.css/aos.css';
import '../../../assetsnews/css/style.css';
import '../../../assetsnews/vendors/mdi/css/materialdesignicons.min.css';
import { withRouter } from 'react-router-dom';





const NewsLayout = () => {


  return (
    <div class="container-scroller">
      <div class="main-panel">
      <Header/>
      <div class="flash-news-banner">
          <div class="container">
            <div class="d-lg-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <span class="badge badge-dark mr-3">Flash news</span>
                <p class="mb-0">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s.
                </p>
              </div>
              <div class="d-flex">
                <span class="mr-3 text-danger">Wed, March 4, 2020</span>
                <span class="text-danger">30°C,London</span>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default withRouter(NewsLayout)
