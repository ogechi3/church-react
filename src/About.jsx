import React from "react";


import "./About.css";
const About = () => {
  return (
    <div className="app__About" id="about">
      <h1 className="headtext__cormorant">About Us</h1>
      <div className="app__about-us">
        <div className="app__aboutus-img">
          <img src="./Images/img 4.jpg.jpg" alt="bible image" />
        </div>
       
        <div className="app__content" style={{marginTop:'1rem'}}>
          {" "}The history of Deeper Life is very much the personal story of W.F.
          Kumuyi. He is a gifted man, clear-thinking and humble. He is a
          dedicated Christian and deserves the title ‘the man of God,’ which his
          followers have given him. Since he was a young man, Kumuyi has devoted
          his time to reading and studying the Bible. He knows the Scriptures
          inside out, and has struggled to understand and apply them. As he
          shares that struggle and his love for the word of God, so people have
          been drawn to him for advice, or simply to listen. When he preaches,
          his message is clear, simple, and profound. Poor street traders who
          can barely read sit next to university professors, all equally
          captivated by the way Scripture becomes suddenly relevant to
          them.Urubi group is no different because they follow in the footstep
          of their leader in propagting the gospel and expanding the kingdom of
          God.
        </div>
      </div>
    </div>
  );
};

export default About;
