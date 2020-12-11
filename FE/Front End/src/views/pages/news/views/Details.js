import React,{ useState, useEffect } from 'react'
import CategoryService from "../../../../api/service/CategoryService.js"
import NewService from "../../../../api/service/NewService.js"
import {IMAGES_URL,THUMBNAIL_URL} from "../../../../Constants"
import moment from 'moment'
import parse from 'html-react-parser'
import {
  CLink
} from '@coreui/react'

const Details = (props) => {
  const id =props.match.params.id
  const [category, setCategory]=useState([])
  const [data, setData]=useState([])
  const [news, setNews]=useState([])



  useEffect(() => {
    function getNewData() {
      if (id !== '-1') {
        NewService.retrieveNew(id).then((response) => {
          setData(response.data);
        })
      }

    }
    function getCategoryData() {

      CategoryService.retrieveAllCategories().then((response) => {
        setCategory(response.data);
      })
        .catch((err) => {
          alert(err.message);
        });
    }
    getNewData();
    getCategoryData();
    getNewLatestData();

  }, [id])
  function getNewLatestData(){

    NewService.retrieveAllNewsWithStatus(1,3,1).then((response) => {
      setNews(response.data.listResult);
    })
    .catch((err)=>{
      alert(err.message);
    });
  }



  return (
    <>
     <div className="col-sm-12">
              <div className="card" >
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-8">
                      <div>
                        <h1 className="font-weight-600 mb-1">
                          {data && data.title}
                        </h1>
                        <p className="fs-13 text-muted mb-0">
                          <span className="mr-2">{data && data.categoryCode} </span>{data&&moment(data.createdDate).fromNow()}
                        </p>

                        {data && parse(`${data.content}`)}

                      </div>
                      <div className="d-lg-flex">
                        <span className="fs-16 font-weight-600 mr-2 mb-1"
                          >Tags</span
                        >
                        <span className="badge badge-outline-dark mr-2 mb-1"
                          >Trending</span
                        >
                        <span className="badge badge-outline-dark mr-2 mb-1"
                          >Trending</span
                        ><span className="badge badge-outline-dark mr-2 mb-1"
                          >Trending</span
                        ><span className="badge badge-outline-dark mr-2 mb-1"
                          >Trending</span
                        ><span className="badge badge-outline-dark mb-1"
                          >Trending</span
                        >
                      </div>
                      <div className="post-comment-section">
                        <h3 className="font-weight-600">Related Posts</h3>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="post-author">
                              <div className="rotate-img">
                                <img
                                  src="../assets/images/inner/inner_5.jpg"
                                  alt="banner"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="post-author-content">
                                <h5 className="mb-1">
                                  Virus Kills Member Of Council Advising Iran’s
                                  Supreme Leader
                                </h5>
                                <p className="fs-13 text-muted mb-0">
                                  <span className="mr-2">Photo </span>10 Minutes ago
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="post-author">
                              <div className="rotate-img">
                                <img
                                  src="../assets/images/inner/inner_6.jpg"
                                  alt="banner"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="post-author-content">
                                <h5 className="mb-1">
                                  Virus Kills Member Of Council Advising Iran’s
                                  Supreme Leader
                                </h5>
                                <p className="fs-13 text-muted mb-0">
                                  <span className="mr-2">Photo </span>10 Minutes ago
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="testimonial">
                          <div
                            className="d-lg-flex justify-content-between align-items-center"
                          >
                            <div className="d-flex align-items-center mb-3">
                              <div className="rotate-img">
                                <img
                                  src="../assets/images/faces/face1.jpg"
                                  alt="banner"
                                  className="img-fluid img-rounded mr-3"
                                />
                              </div>
                              <div>
                                <p className="fs-12 mb-1 line-height-xs">
                                  Of the Author
                                </p>
                                <p
                                  className="fs-16 font-weight-600 mb-0 line-height-xs"
                                >
                                  Nout Golstein
                                </p>
                              </div>
                            </div>
                            <ul className="social-media mb-3">
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
                          <p className="fs-12">
                            Praesent facilisis vulputate venenatis. In facilisis
                            placerat arcu, in tempor neque aliquet quis. Integer
                            lacinia in ligula eu sodales. Proin non lorem
                            iaculis, dictum lorem quis, bibendum leo.
                          </p>
                        </div>
                        <div className="comment-section">
                          <h5 className="font-weight-600">Comments</h5>
                          <div className="comment-box">
                            <div className="d-flex align-items-center">
                              <div className="rotate-img">
                                <img
                                  src="../assets/images/faces/face2.jpg"
                                  alt="banner"
                                  className="img-fluid img-rounded mr-3"
                                />
                              </div>
                              <div>
                                <p className="fs-12 mb-1 line-height-xs">
                                  24 Jul 2020
                                </p>
                                <p
                                  className="fs-16 font-weight-600 mb-0 line-height-xs"
                                >
                                  Chigusa Kisa
                                </p>
                              </div>
                            </div>

                            <p className="fs-12 mt-3">
                              Praesent facilisis vulputate venenatis. In
                              facilisis placerat arcu, in tempor neque aliquet
                              quis. Integer lacinia in ligula eu sodales. Proin
                              non lorem iaculis, dictum lorem quis, bibendum
                              leo.
                            </p>
                          </div>
                          <div className="comment-box from">
                            <div className="d-flex align-items-center">
                              <div className="rotate-img">
                                <img
                                  src="../assets/images/faces/face3.jpg"
                                  alt="banner"
                                  className="img-fluid img-rounded mr-3"
                                />
                              </div>
                              <div>
                                <p className="fs-12 mb-1 line-height-xs">
                                  24 Jul 2020
                                </p>
                                <p
                                  className="fs-16 font-weight-600 mb-0 line-height-xs"
                                >
                                  Mohsen Salehi
                                </p>
                              </div>
                            </div>

                            <p className="fs-12 mt-3">
                              Praesent facilisis vulputate venenatis. In
                              facilisis placerat arcu, in tempor neque aliquet
                              quis. Integer lacinia in ligula eu sodales. Proin
                              non lorem iaculis, dictum lorem quis, bibendum
                              leo.
                            </p>
                          </div>
                          <div className="comment-box mb-0">
                            <div className="d-flex align-items-center">
                              <div className="rotate-img">
                                <img
                                  src="../assets/images/faces/face3.jpg"
                                  alt="banner"
                                  className="img-fluid img-rounded mr-3"
                                />
                              </div>
                              <div>
                                <p className="fs-12 mb-1 line-height-xs">
                                  24 Jul 2020
                                </p>
                                <p
                                  className="fs-16 font-weight-600 mb-0 line-height-xs"
                                >
                                  Lucy Miller
                                </p>
                              </div>
                            </div>

                            <p className="fs-12 mt-3">
                              Praesent facilisis vulputate venenatis. In
                              facilisis placerat arcu, in tempor neque aliquet
                              quis. Integer lacinia in ligula eu sodales. Proin
                              non lorem iaculis, dictum lorem quis, bibendum
                              leo.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <h2 className="mb-4 text-primary font-weight-600">
                        Latest news
                      </h2>
                      {
                        news.map((item)=>(
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="border-bottom pb-4 pt-4">
                            <div className="row">
                              <div className="col-sm-8">
                                <h5 className="font-weight-600 mb-1">
                                  {item.title}
                                </h5>
                                <p className="fs-13 text-muted mb-0">
                                  <span className="mr-2">{item.category} </span>{item&&moment(item.createdDate).fromNow()}
                                </p>
                              </div>
                              <div className="col-sm-4">
                                <div className="rotate-img">
                                <CLink className="nav-link" href={`/details/${item.id}`}>
                                  <img
                                    src={`${THUMBNAIL_URL}${item.thumbnail}&size=150x150`}
                                    alt="banner"
                                    className="img-fluid"
                                  />
                                  </CLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                        )
                      }



                      <div className="trending">
                        <h2 className="mb-4 text-primary font-weight-600">
                          Trending
                        </h2>
                        <div className="mb-4">
                          <div className="rotate-img">
                            <img
                              src="../assets/images/inner/inner_10.jpg"
                              alt="banner"
                              className="img-fluid"
                            />
                          </div>
                          <h3 className="mt-3 font-weight-600">
                            Virus Kills Member Of Advising Iran’s Supreme
                          </h3>
                          <p className="fs-13 text-muted mb-0">
                            <span className="mr-2">Photo </span>10 Minutes ago
                          </p>
                        </div>
                        <div className="mb-4">
                          <div className="rotate-img">
                            <img
                              src="../assets/images/inner/inner_11.jpg"
                              alt="banner"
                              className="img-fluid"
                            />
                          </div>
                          <h3 className="mt-3 font-weight-600">
                            Virus Kills Member Of Advising Iran’s Supreme
                          </h3>
                          <p className="fs-13 text-muted mb-0">
                            <span className="mr-2">Photo </span>10 Minutes ago
                          </p>
                        </div>
                        <div className="mb-4">
                          <div className="rotate-img">
                            <img
                              src="../assets/images/inner/inner_12.jpg"
                              alt="banner"
                              className="img-fluid"
                            />
                          </div>
                          <h3 className="mt-3 font-weight-600">
                            Virus Kills Member Of Advising Iran’s Supreme
                          </h3>
                          <p className="fs-13 text-muted mb-0">
                            <span className="mr-2">Photo </span>10 Minutes ago
                          </p>
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

export default Details
