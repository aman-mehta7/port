import React from "react";

const Button = ({ title, icon, id, className }) => {
  return (
    <a
    onClick={(e) => {
      e.preventDefault(); // Stop the link from jumping instantly

      const target = document.getElementById("counter"); // Find the section with ID "counter"

      // Only scroll if we found the section and an ID is passed in
      // taht prevents the contact button from scrolling to the top
      if (target && id) {
        const offset = window.innerHeight * 0.15; // Leave a bit of space at the top

        // Calculate how far down the page we need to scroll
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;

        // Scroll smoothly to that position
        window.scrollTo({ top, behavior: "smooth" });
      }
    }}
    className={`${className ?? ""} cta-wrapper `}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{title}</p>
          <div className="arrow-wrapper">
            <img src={icon} alt="arrow" />
          </div>
      </div>
    </a>
  );
};

export default Button;
