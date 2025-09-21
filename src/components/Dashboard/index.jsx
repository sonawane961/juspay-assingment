import React from "react";
import "./index.css"; // Importing all the styles from index.css

export default function BottomGlow() {
  return (
    <>
      {/* Main background wrapper for full-screen layout  */}
      <div className="background">
        {/* Bottom glowing radial effect */}
        <div className="bottom-glow"></div>

        {/* Top glowing radial effect */}
        <div className="top-glow"></div>

        {/* Circular grid pattern for visual design */}
        <div className="grid"></div>

        {/* Text & button container */}
        <div className="rext-button-conatainer">
          {/* Call-to-action button */}
          <button className="custom-btn">Assignment</button>

          {/* Large heading text */}
          <div className="title-text">
            <p>UI DEVELOPER</p>
            <p>ASSIGNMENT</p>
          </div>

          {/* Company description section */}
          <div className="description-text">
            <p>COMPANY</p>
            <p>Juspay Technologies Private Limited</p>
          </div>
        </div>
      </div>
    </>
  );
}
