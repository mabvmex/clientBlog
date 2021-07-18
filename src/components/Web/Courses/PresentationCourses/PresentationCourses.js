import React from "react";
import SchoolLogo from "../../../../assets/img/png/academy-logo.png";
import "./PresentationCourses.scss";

export default function PresentationCourses() {
  return (
    <div className="presentation-courses">
      <img src={SchoolLogo} alt="Cursos de udemy" />
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
      </p>
      <p>
        "Res publica non dominetur"
      </p>
    </div>
  );
}
