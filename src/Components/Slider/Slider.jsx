import React from "react";
import "./Slider.css";
import ss from "../Assets/ss.jpg";
import ss1 from "../Assets/ss1.png";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination , Autoplay } from "swiper";

function Slider() {
  return (
    <div className="slider_main_bg">
     
    


    <div className="container">
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
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        loop={true}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
        modules={[Pagination ,Autoplay]}
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
        <SwiperSlide> <div className="card slider_item">
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
        <SwiperSlide> <div className="card slider_item">
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
        <SwiperSlide> <div className="card slider_item">
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
        <SwiperSlide> <div className="card slider_item">
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
        <SwiperSlide> <div className="card slider_item">
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
  );
}

export default Slider;
