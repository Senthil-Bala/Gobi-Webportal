import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
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
    <div className="footer">
      <div className="container-fluid py-3  d-flex justify-content-between align-items-center">
        <div className="quicklinks pt-3 ">
          <h5>Quick Links</h5>
          <p>
            <FontAwesomeIcon icon={faAngleDoubleLeft} /> Shoppings
          </p>
          <p>
            <FontAwesomeIcon icon={faAngleDoubleLeft} /> Blogs
          </p>
          <p>
            <FontAwesomeIcon icon={faAngleDoubleLeft} /> Jobs
          </p>
          <p>
            <FontAwesomeIcon icon={faAngleDoubleLeft} /> About Us
          </p>
          <p>
            <FontAwesomeIcon icon={faAngleDoubleLeft} /> Careers
          </p>
          <br />
          <div className="mt-2">
          <p>Contact Info</p>
          <p>+91 9876543210</p>
          <p>ceo@gobitoday.com</p>
        </div>
          
        </div>
        <div className="socialMedia">
          <h5>Social Media</h5>
          <p>
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#e4405f" }} />{" "}
            Instagram
          </p>
          <p>
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#1877f2" }} />{" "}
            Facebook
          </p>
          <p>
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#1da1f2" }} />{" "}
            Twitter
          </p>
          <p>
            <FontAwesomeIcon icon={faYoutube} style={{ color: "#c4302b" }} />{" "}
            YouTube
          </p>
          <p>
            <FontAwesomeIcon icon={faSkype} style={{ color: "#00aff0" }} />{" "}
            Skype
          </p>
          <br />
          <Image src="/playstores.png" width={110} height={125} className="mt-3" />

        </div>
      </div>

    </div>
  );
}

export default Footer;
