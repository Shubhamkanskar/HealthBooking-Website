import React from "react";
import "../styles/footer.css";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-links">
            <h3>Links</h3>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/doctors"}>Doctors</NavLink>
              </li>
              <li>
                <NavLink to={"/appointments"}>Appointments</NavLink>
              </li>
              <li>
                <NavLink to={"/notifications"}>Notifications</NavLink>
              </li>
              <li>
                <HashLink to={"/#contact"}>Contact Us</HashLink>
              </li>
              <li>
                <NavLink to={"/profile"}>Profile</NavLink>
              </li>
            </ul>
          </div>
          <div className="social">
            <h3>Social links</h3>
            <ul>
              <li className="facebook">
                <a
                  href="https://www.facebook.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="youtube">
                <a
                  href="https://www.youtube.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
              </li>
              <li className="instagram">
                <a
                  href="https://www.instagram.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            {" "}
            <a
              href="https://www.linkedin.com/in/shubham-kanaskar-237280157/"
              target="_blank"
              rel="noreferrer"
            >
              Made by Shubham Kanaskar
            </a>
            © {new Date().getFullYear()}
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            Reach out Click me on LinkedIn
            <a href="https://www.linkedin.com/in/shubham-kanaskar-237280157/">
              <FaLinkedin className="linkedin_classname" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
