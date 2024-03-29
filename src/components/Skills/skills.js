import React from "react";
import "./skills.css";
import njIcon from "../../assets/nj_logo.svg";
import reactIcon from "../../assets/react.png";
import otherIcon from "../../assets/other.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do?</span>
      <span className="skillDesc">
      Currently pursuing my <span className="introName"> Master of Engineering </span>degree in Computer Science at  
      <span className="introName"> University of Waterloo </span>
      where I am learning advanced topics in software engineering, 
      such as enterprise architecture, cloud computing, and artificial intelligence.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img
            src={njIcon}
            alt="NodeJS Backend Development"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>NodeJS Backend Development</h2>
            <p>
              NodeJS, GraphQL, Javascript, Microservices 
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={reactIcon}
            alt="React Frontend Development"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>React Frontend Development</h2>
            <p>React, Javascript, React Hooks, React Redux, HTML, CSS</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={otherIcon} alt="Other" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Other</h2>
            <p>AWS, MySQL, MongoDB, Apache Kafka</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
