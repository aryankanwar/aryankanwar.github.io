import React from "react";
import "./intro.css";
import btnImage from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          Hi, I am <span className="introName">Aryan Kanwar.</span>
          <br />
          I am a Full Stack Software Engineer.
        </span> 
        <p className="introPara">
            As a  <span className="introName">  Software engineer </span> 
      with  5+ years of hands-on experience in <span className="introName"> Full-Stack Software Development.</span> <br></br>
      I am passionate about creating personalized and engaging user experiences for millions of global customers.<br></br>
      Please click on the below "Hire Me" button to find out 
      how I might contribute and add value to your next project.
        </p>
     
      </div>
      {/* <img src={imgAryan} alt="Profile" className="bgImg" /> */}
    </section>
  );
};

export default Intro;
