import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";



import SAS from "../../Assets/Experience/SAS.svg";
import Siemens from "../../Assets/Experience/Siemens.svg"
import Stat from "../../Assets/Experience/Stat.svg";


function Experience() {
    return (
        <Container fluid className="project-section">
          <Particle />
          <Container>
            <h1 className="project-heading">
              My Recent <strong className="purple">Work Experience</strong>
            </h1>
            {/* <p style={{ color: "white" }}>
              Here are a few projects I've worked on recently.
            </p> */}
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={SAS}
                  isBlog={false}
                  title="SAS"
                  description="Software Engineering Intern"
                  info="May 2024 - Current"
                  
                />
              </Col>
    
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={Siemens}
                  isBlog={false}
                  title="Siemens Healthineers"
                  description="Software, Automation and Finance Intern"
                  info="May 2023 - May 2024"
                />
              </Col>
    
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={Stat}
                  isBlog={false}
                  title="StatProg Inc"
                  description="Data Science Intern"
                  info = "June 2022 - August 2022"
    
                />
              </Col>       
            </Row>
          </Container>
        </Container>
      );
    }

export default Experience;
