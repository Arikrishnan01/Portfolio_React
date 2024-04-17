import React from 'react'
import { Element } from 'react-scroll';
import './about.css';
import grayImage from '../../assests/Vector_5.png';
import manFrontHand from '../../assests/Rectangle.png';
import yelloLeft from '../../assests/Vector_4.png';
import grayRight from '../../assests/Vector_5.png';
import yellowRight from '../../assests/Vector_3.png';

export default function About() {

    /** this is for img sections */
    const myDivStyleAbout = {
      backgroundImage: `url(${grayImage})`, // Use the imported image
      backgroundSize: 'cover', // Adjust the image size as needed
      // backgroundPosition: 'center', // Adjust the image position as needed
      width: '100%', // Adjust width as needed
      height: '100%', // Adjust height as needed
      position: 'relative', // Adjust positioning as needed
    };

  return (
    <Element className='about-conatiner' name='about'>
        <div className="about-con-items-01">
          <div className="about-background-image" style={myDivStyleAbout}></div>
          <img src={manFrontHand} alt="Profile" className="about-profile-image" />
        </div>
        <div className="about-con-items-02">
          <div className="about-con-items-content">
            <span className="about-con-content-title">This is it :</span>
            <span className="about-con-content-slash"><hr /></span>
            <p className="about-con-content-para">
              As a skilled MERN stack developer, I excel in creating 
              dynamic web applications that are both intuitive and visually
              appealing. My expertise spans MongoDB, Express.js, React.js, 
              and Node.js, enabling me to craft full-stack solutions that 
              deliver seamless user experiences. I am passionate about 
              coding best practices and enjoy working on innovative projects
              that challenge me to grow.

              My attention to detail and strong problem-solving skills allow
              me to efficiently troubleshoot and optimize applications for 
              peak performance. I stay up-to-date with the latest industry 
              trends and continuously expand my knowledge in emerging 
              technologies. My collaborative approach ensures successful 
              project outcomes and fosters productive teamwork. Let's 
              connect and bring your next project to life!
            </p>
            <span className='about-con-content-slash'><hr/></span>
          </div>
          <div className="about-con-items-img">
            <img src={yelloLeft} alt="grayRight" className="about-con-items-img_01" />
            <img src={grayRight} alt="grayRight" className="about-con-items-img_02" />
        </div>
        </div>
        <div className="about-con-items-03">
        <img src={yellowRight} alt="Right Img" className="about-con-item-imgs-right" />
        </div>
    </Element>
  )
}
