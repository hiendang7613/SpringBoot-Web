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
