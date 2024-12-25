import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import Ido from "../../Assets/Projects/ido.png";
import One from "../../Assets/Projects/One.png";
import HomeFarm from "../../Assets/Projects/HomeFarm.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ido}
              isBlog={false}
              title="I-Do💍"
              description="Developed a Firebase-hosted application that empowers users to curate personalized wedding decor by uploading images of flowers they love. Using Stable Diffusion, the app generates unique bouquet designs tailored to the user's preferences for their special day."
              demoLink="https://i-do-extension.web.app/login"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={One}
              isBlog={false}
              title="OneTouch Mobile App"
              description="
OneTouch is an innovative platform enhancing the college experience by combining safety, convenience, and personalization, offering a secure marketplace for verified students to buy and sell items like furniture and textbooks while staying fraud-free. Additionally, it connects students to clubs, organizations, and events based on their preferences, streamlining engagement with the campus community and empowering them to maximize their college years."
              websiteLink ="https://www.onetouchmobileapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HomeFarm}
              isBlog={false}
              title="Home Farmulations"
              description="Home Farmlutions uses a mathematical model to calculate the best day over the next 30 days to plant one of three vegetable's data at your ideal home garden address. Won 1st place for UX/UI at HackNC 2022"

            />
          </Col>       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
