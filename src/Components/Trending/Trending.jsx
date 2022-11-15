import React from 'react'
import "./Trending.css"
import {AiOutlineArrowRight} from "react-icons/ai"
import {AiOutlineArrowLeft} from "react-icons/ai"
// import "./Sliders.css"
import  { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ss from "../Assets/ss.jpg";
import ss1 from "../Assets/ss1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay } from "swiper";

function Trending() {
  return (
    <div className='main_trending'>
        <div className="container">
            <div className="trending_inner">
                <div className="row">
                    <div className="col-lg-4">  
                    <div className="trending_content">
                        <div className="content_inner">
                            <div className="title_bar">
                                <p className='trend_p text-start'> Trending</p>
                                <h2 className='sli_h  fss text-start'>Most Popular IDO Projects</h2>
                                <p className='text-start p_sub'>Lorem ipsum dolor sit, amet consectetur
adipisicing elit. Cum, quod?</p>
                            </div>
                            <div className="buuton">
                                <div className="iner_button">
                                    <button className='trending_btn'> <AiOutlineArrowLeft></AiOutlineArrowLeft></button>
                                </div>
                                <div className="iner_button">
                                    <button className='trending_btn'> <AiOutlineArrowRight></AiOutlineArrowRight></button>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                    </div>

                    <div className="col-lg-8 mt-4">
                    <Swiper
        slidesPerView={2}
        spaceBetween={20}
        slidesPerGroupSkip={2}
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
        {/* <SwiperSlide>Slide 5</SwiperSlide> */}
        {/* <SwiperSlide>Slide 6</SwiperSlide> */}
        {/* <SwiperSlide>Slide 7</SwiperSlide> */}
        {/* <SwiperSlide>Slide 8</SwiperSlide> */}
        {/* <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Trending
