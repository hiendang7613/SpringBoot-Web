import React,{ useState, useEffect } from 'react'
import CategoryService from "../../../../api/service/CategoryService.js"
import NewService from "../../../../api/service/NewService.js"
import {IMAGES_URL,THUMBNAIL_URL} from "../../../../Constants"
import moment from 'moment'
import {
  CLink
} from '@coreui/react'
const Home = () => {
  const [categories, setCategories]=useState([])
  const [news, setNews]=useState([])
  const [news2, setNews2]=useState([])
  const [news3, setNews3]=useState([])

  console.log(news)
  useEffect(() => {
    getCategoryData()
    getNewData()
    getNew2Data()

  }, [])
  function getCategoryData(){

    CategoryService.retrieveAllCategories().then((response) => {
      console.log(response.data);
      setCategories(response.data);
    })
    .catch((err)=>{
      alert(err.message);
    });
  }
  function getNewData(){

    NewService.retrieveAllNewsWithStatus(1,3,1).then((response) => {
      setNews(response.data.listResult);
    })
    .catch((err)=>{
      alert(err.message);
    });
  }
  function getNew2Data(){

    NewService.retrieveAllNewsWithStatus(1,8,1).then((response) => {
      setNews2(response.data.listResult);
    })
    .catch((err)=>{
      alert(err.message);
    });
  }

  return (
    <>
     <div className="row" >
              <div className="col-xl-8 stretch-card grid-margin">
                <div className="position-relative">
                <CLink  href={news[0] &&`/details/${news[0].id}`}>
                  <img
                    src={news[0] &&`${IMAGES_URL}/${news[0].thumbnail}`}
                    alt="banner"
                    className="img-fluid"
                  /></CLink>
                  <div className="banner-content">
                    <div className="badge badge-danger fs-12 font-weight-bold mb-3">
                    HOT
                    </div>
                    <CLink className="text-white"   href={news[0] &&`/details/${news[0].id}`}>
                    <h1 className="mb-0">{news[0] &&`${news[0].title}`}</h1></CLink>
                    <h3 className="mb-2">
                    {news[0] &&`${news[0].shortDescription}`}
                    </h3>
                    <div className="fs-12">
                      <span className="mr-2">{news[0] &&`${news[0].categoryCode}`} </span>{news[0]&&moment(news[0].createdDate).fromNow()}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 stretch-card grid-margin">
                <div className="card bg-dark text-white">
                  <div className="card-body">
                    <h2>Tin mới</h2>
                    {
                      news.map((row)=>(
                        <div key={row.id}
                      className="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between"
                    >
                      <div className="pr-3">
                      <CLink className="text-white" href={`/details/${row.id}`}>
                        <h5 style={{overflow: 'hidden', textOverflow: 'ellipsis',width:'150px'}}>{row.title} </h5>
                        </CLink>
                        <div className="fs-12" >
                          <span className="mr-2">{row.categoryCode}</span>{row&&moment(row.createdDate).fromNow()}
                        </div>
                      </div>
                      <div className="rotate-img" >
                      <CLink className="nav-link" href={`/details/${row.id}`}>
                      <img intrinsicsize="100x50"
                          height="100"
                          width="50"
                          src={`${THUMBNAIL_URL}${row.thumbnail}&size=150x150`}
                          alt="thumb"
                          className="img-fluid img-lg"
                        />
                        </CLink>

                      </div>
                    </div>
                      )
                      )
                    }


                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h2>Category</h2>
                    <ul className="vertical-menu">
                      {
                        categories.map((row)=>(
                        <li key={row.id}><a href="#">{row.name}</a></li>)
                        )
                      }
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 stretch-card grid-margin">
                <div className="card">

                  <div className="card-body">
                  {
                      news2.map((row)=>(
                        <div className="row" key={row.id}>
                      <div className="col-sm-4 grid-margin">
                        <div className="position-relative">
                          <div className="rotate-img">
                          <CLink className="nav-link" href={`/details/${row.id}`}>
                            <img
                              src={`${THUMBNAIL_URL}${row.thumbnail}&size=300x300`}
                              alt="thumb"
                              className="img-fluid"
                            />
                            </CLink>
                          </div>
                          <div className="badge-positioned">
                            <span className="badge badge-danger font-weight-bold"
                              >{row.categoryCode}</span
                            >
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8  grid-margin">
                      <CLink className="text-dark" href={`/details/${row.id}`}>
                        <h2 className="mb-2 font-weight-600">
                        {row.title}
                        </h2>
                        </CLink>
                        <div className="fs-13 mb-2">
                          <span className="mr-2">{row.categoryCode}</span>{moment(row.createdDate).fromNow()}
                        </div>
                        <p className="mb-0">
                        {row.shortDescription}
                        </p>
                      </div>
                    </div>
                      ))
                  }
                  </div>

                </div>
              </div>
            </div>


    </>
  )
}

export default Home
