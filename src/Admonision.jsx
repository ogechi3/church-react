import React from "react";

import "./Admonision.css";

const Admonision = () => {
  return (
    <div className="app__admonision " id="admonision">
      <div className="headtext__cormorant">Admonision</div>
      <div className="app__content ">
        <p className="main-content">
          matt 23: 45, talks about the story of the prodigal son Even as the
          prodigal son it is not too late to come back to the father for he
          loves us so dearly and is ever willing to accept us regardles of our
          flaws matt 23: 45, talks about the story of the prodigal son Even as
          the prodigal son it is not too late to come back to the father for he
          loves us so dearly and is ever willing to accept us regardles of our
          flaws
          <p className="quote">
            And the son said for once i was lost but now i'm found
            <br />
            was blind but now i see
          </p>
          The statement above describes God's willingness to accept us back into
          the king dom no matter how many wrongs we might have committed
        </p>
        <div className="button-link">
          <a
            href="https://en.wikipedia.org/wiki/Parable_of_the_Prodigal_Son"
            target="_blank"
          >
            {" "}
            <button className="custom__button"> Read More</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Admonision;
