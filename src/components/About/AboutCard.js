import React from "react";
import Card from "react-bootstrap/Card";
import { FaRunning, FaHeadphones, FaPlane, FaLaptopCode } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <div style={{ textAlign: "justify" }}>
        <p>
    From <span class="purple">Cary, North Carolina</span>
  </p>
  <p>
    I am currently a student at UNC Chapel Hill, majoring in <span class="purple">Computer Science</span> with a minor in <span class="purple">Business Administration</span>
  </p>
  <p>
    Passionate about creating full-stack applications that drive <span class="purple">meaningful</span> change and positively impact the community.
  </p>
  <p>
    Apart from coding, here are some other activities I love to do:
  </p>
        </div>
          
          <ul>
            <li className="about-activity">
              <FaRunning /> Running
            </li>
            <li className="about-activity">
              <FaHeadphones /> Djing
            </li>
            <li className="about-activity">
              <FaPlane /> Travelling
            </li>
            <li className="about-activity">
              <FaLaptopCode /> Exploring new Technology
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
