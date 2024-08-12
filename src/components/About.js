import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>My Name is Lewis Kipkemoi and I like coding</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
