import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p> My Name is Lewis KIpkemoi and i like coding</p>
    <img src={image} alt= "i made this"></img>

  </div>;
}

export default About;
