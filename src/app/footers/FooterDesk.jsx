import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.css";
import Image from "next/image";
function FooterDesk() {
  return (
    <div className="footer">
      <div className="container p-4  d-flex  justify-content-between align-items-center">
        <div className="quicklinks pt-1 ">
          <h6>Quick Links</h6>
          <p>
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Shoppings
          </p>
          <p>
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Blogs
          </p>
          <p>
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Jobs
          </p>
          <p>
            <FontAwesomeIcon icon={faAngleDoubleRight} /> About Us
          </p>
          <p>
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Careers
          </p>
          
          
        </div>
        <div className="socialMedia ">
          <h6>Social Media</h6>
          <p>
            <Image src="/fb.png" width={24} height={24} /> Facebook
          </p>
          <p>
            <Image src="/insta.png" width={24} height={24} />
            Instagram
          </p>
          <p>
            <Image src="/x.png" width={24} height={24} /> Twitter
          </p>
          <p>
            <Image src="/youtube.png" width={24} height={24} /> YouTube
          </p>
          <p>
            <Image src="/skype.png" width={24} height={24} /> Skype
          </p>
          
   
        </div>
        <div className="cont">
        <div className="mt-2">
            <p>Contact Info</p> 
            <p>+91 9876543210</p>
            <p>ceo@gobitoday.com</p>
            <div className="downloads d-flex gap-4">
                <Image src="/android.png" width={145} height={44} />
                <Image src="/ios.png" width={145} height={44} />
            </div>
          </div>
        </div>
      </div>
      <p className="copyrights">CopyRights 2024. GobiToday. All Rights Reserved</p>
    </div>
  )
}

export default FooterDesk;
