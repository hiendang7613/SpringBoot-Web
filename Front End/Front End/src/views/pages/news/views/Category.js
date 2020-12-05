import React,{ useState, useEffect } from 'react'
import CategoryService from "../../../../api/service/CategoryService.js"
import NewService from "../../../../api/service/NewService.js"
import {IMAGES_URL,THUMBNAIL_URL} from "../../../../Constants"
import moment from 'moment'

const Home = () => {
  const [categories, setCategories]=useState([])
  const [news, setNews]=useState([])

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
                  <img
                    src={news[0] &&`${IMAGES_URL}/${news[0].thumbnail}`}
                    alt="banner"
                    className="img-fluid"
                  />
                  <div className="banner-content">
                    <div className="badge badge-danger fs-12 font-weight-bold mb-3">
                    HOT
                    </div>
                    <h1 className="mb-0">{news[0] &&`${news[0].title}`}</h1>
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
                        <h5 style={{overflow: 'hidden', textOverflow: 'ellipsis',width:'150px'}}>{row.title} </h5>
                        <div className="fs-12" >
                          <span className="mr-2">{row.categoryCode}</span>{row&&moment(row.createdDate).fromNow()}
                        </div>
                      </div>
                      <div className="rotate-img" >
                        <img intrinsicsize="100x50"
                          height="100"
                          width="50"
                          src={`${THUMBNAIL_URL}${row.thumbnail}&size=150x150`}
                          alt="thumb"
                          className="img-fluid img-lg"
                        />
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
                        <div className="row">
                      <div className="col-sm-4 grid-margin">
                        <div className="position-relative">
                          <div className="rotate-img">
                            <img
                              src={`${THUMBNAIL_URL}${row.thumbnail}&size=300x300`}
                              alt="thumb"
                              className="img-fluid"
                            />
                          </div>
                          <div className="badge-positioned">
                            <span className="badge badge-danger font-weight-bold"
                              >{row.categoryCode}</span
                            >
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8  grid-margin">
                        <h2 className="mb-2 font-weight-600">
                        {row.title}
                        </h2>
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

            <div className="row" >
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="card-title">
                          Sport light
                        </div>
                        <div className="row">
                          <div className="col-xl-6 col-lg-8 col-sm-6">
                            <div className="rotate-img">
                              <img
                                src="assets/images/dashboard/home_16.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                            <h2 className="mt-3 text-primary mb-2">
                              Newsrooms exercise..
                            </h2>
                            <p className="fs-13 mb-1 text-muted">
                              <span className="mr-2">Photo </span>10 Minutes ago
                            </p>
                            <p className="my-3 fs-15">
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s, when an unknown printer
                              took
                            </p>
                            <a href="#" className="font-weight-600 fs-16 text-dark"
                              >Read more</a
                            >
                          </div>
                          <div className="col-xl-6 col-lg-4 col-sm-6">
                            <div className="border-bottom pb-3 mb-3">
                              <h3 className="font-weight-600 mb-0">
                                Social distancing is ..
                              </h3>
                              <p className="fs-13 text-muted mb-0">
                                <span className="mr-2">Photo </span>10 Minutes ago
                              </p>
                              <p className="mb-0">
                                Lorem Ipsum has been the industry's
                              </p>
                            </div>
                            <div className="border-bottom pb-3 mb-3">
                              <h3 className="font-weight-600 mb-0">
                                Panic buying is forcing..
                              </h3>
                              <p className="fs-13 text-muted mb-0">
                                <span className="mr-2">Photo </span>10 Minutes ago
                              </p>
                              <p className="mb-0">
                                Lorem Ipsum has been the industry's
                              </p>
                            </div>
                            <div className="border-bottom pb-3 mb-3">
                              <h3 className="font-weight-600 mb-0">
                                Businesses ask hundreds..
                              </h3>
                              <p className="fs-13 text-muted mb-0">
                                <span className="mr-2">Photo </span>10 Minutes ago
                              </p>
                              <p className="mb-0">
                                Lorem Ipsum has been the industry's
                              </p>
                            </div>
                            <div>
                              <h3 className="font-weight-600 mb-0">
                                Tesla's California factory..
                              </h3>
                              <p className="fs-13 text-muted mb-0">
                                <span className="mr-2">Photo </span>10 Minutes ago
                              </p>
                              <p className="mb-0">
                                Lorem Ipsum has been the industry's
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="card-title">
                              Sport light
                            </div>
                            <div className="border-bottom pb-3">
                              <div className="rotate-img">
                                <img
                                  src="assets/images/dashboard/home_17.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <p className="fs-16 font-weight-600 mb-0 mt-3">
                                Kaine: Trump Jr. may have
                              </p>
                              <p className="fs-13 text-muted mb-0">
                                <span className="mr-2">Photo </span>10 Minutes ago
                              </p>
                            </div>
                            <div className="pt-3 pb-3">
                              <div className="rotate-img">
                                <img
                                  src="assets/images/dashboard/home_18.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <p className="fs-16 font-weight-600 mb-0 mt-3">
                                Kaine: Trump Jr. may have
                              </p>
                              <p className="fs-13 text-muted mb-0">
                                <span className="mr-2">Photo </span>10 Minutes ago
                              </p>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="card-title">
                              Celebrity news
                            </div>
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="border-bottom pb-3">
                                  <div className="row">
                                    <div className="col-sm-5 pr-2">
                                      <div className="rotate-img">
                                        <img
                                          src="assets/images/dashboard/home_19.jpg"
                                          alt="thumb"
                                          className="img-fluid w-100"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-sm-7 pl-2">
                                      <p className="fs-16 font-weight-600 mb-0">
                                        Online shopping ..
                                      </p>
                                      <p className="fs-13 text-muted mb-0">
                                        <span className="mr-2">Photo </span>10
                                        Minutes ago
                                      </p>
                                      <p className="mb-0 fs-13">
                                        Lorem Ipsum has been
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="border-bottom pb-3 pt-3">
                                  <div className="row">
                                    <div className="col-sm-5 pr-2">
                                      <div className="rotate-img">
                                        <img
                                          src="assets/images/dashboard/home_20.jpg"
                                          alt="thumb"
                                          className="img-fluid w-100"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-sm-7 pl-2">
                                      <p className="fs-16 font-weight-600 mb-0">
                                        Online shopping ..
                                      </p>
                                      <p className="fs-13 text-muted mb-0">
                                        <span className="mr-2">Photo </span>10
                                        Minutes ago
                                      </p>
                                      <p className="mb-0 fs-13">
                                        Lorem Ipsum has been
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="border-bottom pb-3 pt-3">
                                  <div className="row">
                                    <div className="col-sm-5 pr-2">
                                      <div className="rotate-img">
                                        <img
                                          src="assets/images/dashboard/home_21.jpg"
                                          alt="thumb"
                                          className="img-fluid w-100"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-sm-7 pl-2">
                                      <p className="fs-16 font-weight-600 mb-0">
                                        Online shopping ..
                                      </p>
                                      <p className="fs-13 text-muted mb-0">
                                        <span className="mr-2">Photo </span>10
                                        Minutes ago
                                      </p>
                                      <p className="mb-0 fs-13">
                                        Lorem Ipsum has been
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="pt-3">
                                  <div className="row">
                                    <div className="col-sm-5 pr-2">
                                      <div className="rotate-img">
                                        <img
                                          src="assets/images/dashboard/home_22.jpg"
                                          alt="thumb"
                                          className="img-fluid w-100"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-sm-7 pl-2">
                                      <p className="fs-16 font-weight-600 mb-0">
                                        Online shopping ..
                                      </p>
                                      <p className="fs-13 text-muted mb-0">
                                        <span className="mr-2">Photo </span>10
                                        Minutes ago
                                      </p>
                                      <p className="mb-0 fs-13">
                                        Lorem Ipsum has been
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default Home
