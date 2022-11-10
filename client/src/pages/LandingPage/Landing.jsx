import React from "react";

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing__banner"></div>
      <div className="landing__text">
        <h1>GYM PAPARULO </h1>
      </div>
      {/* <div className='landing__spinner'></div> */}
      <footer className="landing__footer">
        <address>
          Visit us at:
          <br />
          Example.com
          <br />
          Box 564, Disneyland
          <br />
          USA
        </address>
      </footer>
    </div>
  );
}
