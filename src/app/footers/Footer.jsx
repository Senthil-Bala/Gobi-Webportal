import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight,faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.css";
import Image from "next/image";
function Footer() {
  return (
    <div className="footer"  data-aos="slide-up">
      <div className="container-fluid p-4  d-flex justify-content-between align-items-center">
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
          <br />
          <div className="mt-2">
            <p>Contact Info</p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +91 9876543210
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> ceo@gobitoday.com
            </p>          </div>
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
          <br />
          <Image
            src="/playstores.png"
            width={90}
            height={105}
            className="mt-3"
          />
        </div>
      </div>
      <p className="copyrights">CopyRights 2024. GobiToday. All Rights Reserved</p>
    </div>
  );
}

export default Footer;
