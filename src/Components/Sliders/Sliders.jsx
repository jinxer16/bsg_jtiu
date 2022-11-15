import React from 'react'
import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import ss from "../Assets/ss.jpg";
import ss1 from "../Assets/ss1.png";
import "./Sliders.css"


import "swiper/css";
import "swiper/css/pagination";


import { Autoplay } from "swiper";

function Sliders() {
  return (
    <div className='main_slider'>
      <div className="container">
        <div className="main_slider">
          <div className="row py-5">
            <div className="sli_h_c">
              <div>
                <p className="sli_p">IDO Project</p>
                <h2 className="sli_h2">Upcoming IDO</h2>
              </div>
              <div>
                <button className="start_btn">Veiw All</button>
              </div>
            </div>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            loop={true}

            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="card slider_item">
                <div className="slider_inner">
                  <div className="slider">
                    <div className="slider_inner_thumb">
                      <img src={ss} alt="" className="w-100" />
                      <span className="badge"></span>
                    </div>
                    <div className="slider_item_content">
                      <div className="slider_item_top">
                        <div className="slider_item_authar">
                          <img src={ss1} className='top_img' alt="" />
                          <h4>DeFianXer 3dX</h4>
                        </div>

                        <div className="slider_item_middle">
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Round Name:</p>
                            <p className="s_c_p_s">Public</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Participent</p>
                            <p className="s_c_p_s">42</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Project Start</p>
                            <p className="s_c_p_s">TBA</p>
                          </div>

                          <div className="slider_item_amount">
                            <p className="s_c_p mb-1">Raised Ammount</p>
                            <h6 className="sli_h">
                              <span className="color_s">5000</span> /{" "}
                              <span>15000 DAI</span>
                            </h6>
                            <div className="sli_pro">
                              <div className="pro_bar"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card slider_item">
                <div className="slider_inner">
                  <div className="slider">
                    <div className="slider_inner_thumb">
                      <img src={ss} alt="" className="w-100" />
                      <span className="badge"></span>
                    </div>
                    <div className="slider_item_content">
                      <div className="slider_item_top">
                        <div className="slider_item_authar">
                          <img src={ss1} className='top_img' alt="" />
                          <h4>DeFianXer 3dX</h4>
                        </div>

                        <div className="slider_item_middle">
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Round Name:</p>
                            <p className="s_c_p_s">Public</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Participent</p>
                            <p className="s_c_p_s">42</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Project Start</p>
                            <p className="s_c_p_s">TBA</p>
                          </div>

                          <div className="slider_item_amount">
                            <p className="s_c_p mb-1">Raised Ammount</p>
                            <h6 className="sli_h">
                              <span className="color_s">5000</span> /{" "}
                              <span>15000 DAI</span>
                            </h6>
                            <div className="sli_pro">
                              <div className="pro_bar"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card slider_item">
                <div className="slider_inner">
                  <div className="slider">
                    <div className="slider_inner_thumb">
                      <img src={ss} alt="" className="w-100" />
                      <span className="badge"></span>
                    </div>
                    <div className="slider_item_content">
                      <div className="slider_item_top">
                        <div className="slider_item_authar">
                          <img src={ss1} className='top_img' alt="" />
                          <h4>DeFianXer 3dX</h4>
                        </div>

                        <div className="slider_item_middle">
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Round Name:</p>
                            <p className="s_c_p_s">Public</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Participent</p>
                            <p className="s_c_p_s">42</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Project Start</p>
                            <p className="s_c_p_s">TBA</p>
                          </div>

                          <div className="slider_item_amount">
                            <p className="s_c_p mb-1">Raised Ammount</p>
                            <h6 className="sli_h">
                              <span className="color_s">5000</span> /{" "}
                              <span>15000 DAI</span>
                            </h6>
                            <div className="sli_pro">
                              <div className="pro_bar"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card slider_item">
                <div className="slider_inner">
                  <div className="slider">
                    <div className="slider_inner_thumb">
                      <img src={ss} alt="" className="w-100" />
                      <span className="badge"></span>
                    </div>
                    <div className="slider_item_content">
                      <div className="slider_item_top">
                        <div className="slider_item_authar">
                          <img src={ss1} className='top_img' alt="" />
                          <h4>DeFianXer 3dX</h4>
                        </div>

                        <div className="slider_item_middle">
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Round Name:</p>
                            <p className="s_c_p_s">Public</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Participent</p>
                            <p className="s_c_p_s">42</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Project Start</p>
                            <p className="s_c_p_s">TBA</p>
                          </div>

                          <div className="slider_item_amount">
                            <p className="s_c_p mb-1">Raised Ammount</p>
                            <h6 className="sli_h">
                              <span className="color_s">5000</span> /{" "}
                              <span>15000 DAI</span>
                            </h6>
                            <div className="sli_pro">
                              <div className="pro_bar"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="Sub_slider">
          <div className="row py-5">
            <div className="sli_h_c">
              <div>
                <p className="sli_p">IDO Project</p>
                <h2 className="sli_h2">Upcoming IDO</h2>
              </div>
              <div>
                <button className="start_btn">Veiw All</button>
              </div>
            </div>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="card slider_item" >
                <div className="slider_inner">
                  <div className="slider">
                    <div className="slider_inner_thumb">
                      <img src={ss} alt="" className="w-100" />
                      <span className="badge"></span>
                    </div>
                    <div className="slider_item_content">
                      <div className="slider_item_top">
                        <div className="slider_item_authar">
                          <img src={ss1} className='top_img' alt="" />
                          <h4>DeFianXer 3dX</h4>
                        </div>
                        <div className="slider_item_middle">
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Round Name:</p>
                            <p className="s_c_p_s">Public</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Participent</p>
                            <p className="s_c_p_s">42</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Project Start</p>
                            <p className="s_c_p_s">TBA</p>
                          </div>
                          <div className="slider_item_amount">
                            <p className="s_c_p mb-1">Raised Ammount</p>
                            <h6 className="sli_h">
                              <span className="color_s">5000</span> /{" "}
                              <span>15000 DAI</span>
                            </h6>
                            <div className="sli_pro">
                              <div className="pro_bar"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card slider_item">
                <div className="slider_inner">
                  <div className="slider">
                    <div className="slider_inner_thumb">
                      <img src={ss} alt="" className="w-100" />
                      <span className="badge"></span>
                    </div>
                    <div className="slider_item_content">
                      <div className="slider_item_top">
                        <div className="slider_item_authar">
                          <img src={ss1} className='top_img' alt="" />
                          <h4>DeFianXer 3dX</h4>
                        </div>
                        <div className="slider_item_middle">
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Round Name:</p>
                            <p className="s_c_p_s">Public</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Participent</p>
                            <p className="s_c_p_s">42</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Project Start</p>
                            <p className="s_c_p_s">TBA</p>
                          </div>
                          <div className="slider_item_amount">
                            <p className="s_c_p mb-1">Raised Ammount</p>
                            <h6 className="sli_h">
                              <span className="color_s">5000</span> /{" "}
                              <span>15000 DAI</span>
                            </h6>
                            <div className="sli_pro">
                              <div className="pro_bar"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card slider_item">
                <div className="slider_inner">
                  <div className="slider">
                    <div className="slider_inner_thumb">
                      <img src={ss} alt="" className="w-100" />
                      <span className="badge"></span>
                    </div>
                    <div className="slider_item_content">
                      <div className="slider_item_top">
                        <div className="slider_item_authar">
                          <img src={ss1} className='top_img' alt="" />
                          <h4>DeFianXer 3dX</h4>
                        </div>
                        <div className="slider_item_middle">
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Round Name:</p>
                            <p className="s_c_p_s">Public</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Participent</p>
                            <p className="s_c_p_s">42</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Project Start</p>
                            <p className="s_c_p_s">TBA</p>
                          </div>
                          <div className="slider_item_amount">
                            <p className="s_c_p mb-1">Raised Ammount</p>
                            <h6 className="sli_h">
                              <span className="color_s">5000</span> /{" "}
                              <span>15000 DAI</span>
                            </h6>
                            <div className="sli_pro">
                              <div className="pro_bar"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card slider_item">
                <div className="slider_inner">
                  <div className="slider">
                    <div className="slider_inner_thumb">
                      <img src={ss} alt="" className="w-100" />
                      <span className="badge"></span>
                    </div>
                    <div className="slider_item_content">
                      <div className="slider_item_top">
                        <div className="slider_item_authar">
                          <img src={ss1} className='top_img' alt="" />
                          <h4>DeFianXer 3dX</h4>
                        </div>
                        <div className="slider_item_middle">
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Round Name:</p>
                            <p className="s_c_p_s">Public</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Participent</p>
                            <p className="s_c_p_s">42</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="s_c_p">Project Start</p>
                            <p className="s_c_p_s">TBA</p>
                          </div>
                          <div className="slider_item_amount">
                            <p className="s_c_p mb-1">Raised Ammount</p>
                            <h6 className="sli_h">
                              <span className="color_s">5000</span> /{" "}
                              <span>15000 DAI</span>
                            </h6>
                            <div className="sli_pro">
                              <div className="pro_bar"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

    </div>
  )
}

export default Sliders
