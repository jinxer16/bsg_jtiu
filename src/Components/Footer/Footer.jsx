import React from "react";
import "./Footer.css";
import LOGO1 from "../Assets/LOGO2.png"

import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer_main_bg">
      <div className="inner_footer">
        <div className="container">
          <div className="footer_img">
            <a href="#" className="footer_img_ml">
              <img src={LOGO1} className='www' alt="" />
            </a>
          </div>
          <div className="social">
            <a href="" className="footer_icons ml">
              {" "}
              <BsTwitter></BsTwitter>
            </a>
            <a href="" className="footer_icons ml">
              {" "}
              <FaDiscord></FaDiscord>{" "}
            </a>
            <a href="" className="footer_icons ml">
              {" "}
              <FaTwitch></FaTwitch>{" "}
            </a>
            <a href="" className="footer_icons ml">
              {" "}
              <AiFillInstagram></AiFillInstagram>
            </a>
            <a href="" className="footer_icons ml">
              {" "}
              <AiFillLinkedin></AiFillLinkedin>
            </a>
            <a href="" className="footer_icons ml ">
              {" "}
              <FaFacebookF></FaFacebookF>{" "}
            </a>{" "}
          </div>
        </div>
      </div>


      <div className="container footer_copy">
        <div className="row justify-content-center py-4">
          <p className=" footer_text">DECENTRALIZED FINANCE SYSTEM © 2022 | All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
