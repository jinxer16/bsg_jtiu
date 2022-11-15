import React from 'react'
import "./Team.css"
import a from "../Assets/a.png"
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";


function Team() {
  return (
    <div className="team_main_bg">
          <div className="container">
          <div className="section-header--middle">
            <div className="header--middle__content">
              <div className="title_bar">
                <p className="team_para">Team</p>
                <h2 className="team_h2">Meet the Crew</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center g-4 mt-5">
            <div className="col-lg-3 mt-3">
              <div className="card team_img_card w-100">
                <div className="img">
                <img src={a} alt=""  className='w-100 zoom_out'/>
                <div className="overlay"></div>
                </div>

                <div className="card_img_cont">
                  <h4 className='team_h4'>Alex Mike</h4>
                  <p>Founder</p>
                  <div className="social">
            <a href="" className="footer_icons">
              {" "}
              <BsTwitter></BsTwitter>
            </a>
         
           
            <a href="" className="footer_icons">
              {" "}
              <AiFillInstagram></AiFillInstagram>
            </a>
            <a href="" className="footer_icons">
              {" "}
              <AiFillLinkedin></AiFillLinkedin>
            </a>
            <a href="" className="footer_icons">
              {" "}
              <FaFacebookF></FaFacebookF>{" "}
            </a>{" "}
          </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-3">
              <div className="card team_img_card w-100">
                <div className="img">
                <img src={a} alt=""  className='w-100 zoom_out'/>
                <div className="overlay"></div>
                </div>

                <div className="card_img_cont">
                  <h4 className='team_h4'>Alex Mike</h4>
                  <p>Founder</p>
                  <div className="social">
            <a href="" className="footer_icons">
              {" "}
              <BsTwitter></BsTwitter>
            </a>
         
           
            <a href="" className="footer_icons">
              {" "}
              <AiFillInstagram></AiFillInstagram>
            </a>
            <a href="" className="footer_icons">
              {" "}
              <AiFillLinkedin></AiFillLinkedin>
            </a>
            <a href="" className="footer_icons">
              {" "}
              <FaFacebookF></FaFacebookF>{" "}
            </a>{" "}
          </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-3">
              <div className="card team_img_card w-100">
                <div className="img">
                <img src={a} alt=""  className='w-100 zoom_out'/>
                <div className="overlay"></div>
                </div>

                <div className="card_img_cont">
                  <h4 className='team_h4'>Alex Mike</h4>
                  <p>Founder</p>
                  <div className="social">
            <a href="" className="footer_icons">
              {" "}
              <BsTwitter></BsTwitter>
            </a>
         
           
            <a href="" className="footer_icons">
              {" "}
              <AiFillInstagram></AiFillInstagram>
            </a>
            <a href="" className="footer_icons">
              {" "}
              <AiFillLinkedin></AiFillLinkedin>
            </a>
            <a href="" className="footer_icons">
              {" "}
              <FaFacebookF></FaFacebookF>{" "}
            </a>{" "}
          </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-3">
              <div className="card team_img_card w-100">
                <div className="img">
                <img src={a} alt=""  className='w-100 zoom_out'/>
                <div className="overlay"></div>
                </div>

                <div className="card_img_cont">
                  <h4 className='team_h4'>Alex Mike</h4>
                  <p>Founder</p>
                  <div className="social">
            <a href="" className="footer_icons">
              {" "}
              <BsTwitter></BsTwitter>
            </a>
         
           
            <a href="" className="footer_icons">
              {" "}
              <AiFillInstagram></AiFillInstagram>
            </a>
            <a href="" className="footer_icons">
              {" "}
              <AiFillLinkedin></AiFillLinkedin>
            </a>
            <a href="" className="footer_icons">
              {" "}
              <FaFacebookF></FaFacebookF>{" "}
            </a>{" "}
          </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      
    </div>
  )
}

export default Team
