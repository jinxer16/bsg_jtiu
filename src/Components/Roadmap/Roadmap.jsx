import React from "react";
import "./Roadmap.css";
function Roadmap() {
  return (
    <div className="roadmap_main_bg">
      <div className="roadmap">
        <div className="container">
          <div className="section-header--middle">
            <div className="header--middle__content">
              <div className="title_bar">
                <p className="team_para text-white">Explore</p>
                <h2 className="team_h2 text-white">Our Roadmap</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="roadmap_wraaper">
          <div className="row m-0 ">
            <div className="col-lg-6 col-md-6 offset-md-6 mt-3  ">
              <div
                className="card road_map_card"
                // data-aos="fade-left"
                data-aos-durationn="800"
              >
                <div className="card-body roadmap_body">
                  <div className="d-flex road_  justify-content-between">
                    <h4 className="road_map_heading">One Star
                      participants
                    </h4>
                    <p className="road_map_heading">01</p>
                  </div>
                  <p className="text-start sasd">
                    Team size 5 then get first level INCOME 6%.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row  m-0">
            <div className="col-lg-6 col-md-6 mt-3 ">
              <div
                className="card road_map_card"
                data-aos-durationn="800"
              >
                <div className="card-body roadmap_body">
                  <div className="d-flex road_  justify-content-between">
                    <h4 className="road_map_heading">Two Star
                      participants</h4>
                    <p className="road_map_heading">02</p>
                  </div>
                  <p className="text-start sasd">
                    Team size 30 then get 1L: 6%, 2L :1%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-0 ">
            <div className="col-lg-6 col-md-6 offset-md-6 mt-3  ">
              <div
                className="card road_map_card"
                data-aos-durationn="800"
              >
                <div className="card-body roadmap_body">
                  <div className="d-flex road_  justify-content-between">
                    <h4 className="road_map_heading">Three Star
                      participants
                    </h4>
                    <p className="road_map_heading">03</p>
                  </div>
                  <p className="text-start sasd">
                    Team size 50, Self id Minimum 200$ then get 1L : 6%, 2L: 1%, 3L: 2%
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row m-0 ">
            <div className="col-lg-6 col-md-6  mt-3  ">
              <div
                className="card road_map_card"
                data-aos-durationn="800"
              >
                <div className="card-body roadmap_body">
                  <div className="d-flex road_  justify-content-between">
                    <h4 className="road_map_heading">Four Star
                      participants
                    </h4>
                    <p className="road_map_heading">04</p>
                  </div>
                  <p className="text-start sasd">
                    Team size 100 , self id Minimum 300$ , A :5000$, B+C+D=5000$ then get 1L :6%,2L: 1%, 3L:2%, 4L: 3%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-0 ">
            <div className="col-lg-6 col-md-6 offset-md-6 mt-3 ">
              <div
                className="card road_map_card"
                data-aos-durationn="800"
              >
                <div className="card-body roadmap_body">
                  <div className="d-flex road_  justify-content-between">
                    <h4 className="road_map_heading">Five Star
                      participants
                    </h4>
                    <p className="road_map_heading">05</p>
                  </div>
                  <p className="text-start sasd">
                    Team size 200 , self id Minimum 500$ , A :10,000$, B+C+D=10,000$ then get 1L :6%,2L: 1%, 3L:2%, 4L: 3%
                    & 6 to 25th level .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
