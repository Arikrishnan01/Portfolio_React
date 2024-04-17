import React from "react";
import "./home.css";
import { Element, Link } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import yellowImage from '../../assests/Hero-Background.png';
import manFront from '../../assests/Hero_Image.png';

export default function Home() {

  /** this is for img sections */
  const myDivStyle = {
    backgroundImage: `url(${yellowImage})`, // Use the imported image
    backgroundSize: 'cover', // Adjust the image size as needed
    backgroundPosition: 'center', // Adjust the image position as needed
    width: '100%', // Adjust width as needed
    height: '100%', // Adjust height as needed
    position: 'relative', // Adjust positioning as needed
  };

  return (
    <Element className="home-conatiner" name="home">
      <div className="home-social-media-icons-01">
        <Link
          href="https://www.facebook.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={16} className="icon"/>
        </Link>
        <Link
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={16} className="icon"/>
        </Link>
        <Link
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={16} className="icon"/>
        </Link>
        <Link
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={16} className="icon"/>
        </Link>
        <Link
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={16} className="icon"/>
        </Link>
        <Link
          href="https://t.me/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram size={16} className="icon"/>
        </Link>
        <Link
          href="https://www.youtube.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={16} className="icon"/>
        </Link>
      </div>
      <div className="home-contents-02">
        <div className="home-contents-items-01">
          <p>Hello!</p>
        </div>
        <div className="home-contents-items-02">
          <h1 className="home-contents-items-02-title">I'm <span>Anish</span>👋</h1>
        </div>
        <div className="home-contents-items-03">
          <p>UI/UX Designer, Front-End Developer & Thinker.</p>
          <p>Based in India.</p>
        </div>
        <div className="home-contents-items-04">
          <button className="home-items-btn-01">Download CV</button>
          <button className="home-items-btn-02">Get in Touch!</button>
        </div>
      </div>
      <div className="home-contents-03" >
        <div className="background-image" style={myDivStyle}></div>
        <img src={manFront} alt="Profile" className="profile-image" />
      </div>
      <div className="home-contents-04">
        <p>anishkumarsinha@gmail.com</p>
      </div>
    </Element>
  );
}
