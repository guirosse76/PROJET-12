import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kasa from "../../Assets/Projects/Kasa.png";
import sophieBluel from "../../Assets/Projects/sophie-bluel.png";
import ohmyfood from "../../Assets/Projects/ohmyfood.png";
import argentBank from "../../Assets/Projects/argentBank.png";
import printIt from "../../Assets/Projects/printIt.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes travaux <strong className="purple">récents </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ohmyfood}
              isBlog={false}
              title="Ohmyfood"
              description="Développer un site “mobile first” qui répertorie les menus de restaurants gastronomiques, En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas."
              ghLink="https://github.com/guirosse76/rossetguillaume_4_09052023"
              demoLink="https://guirosse76.github.io/rossetguillaume_4_09052023/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={printIt}
              isBlog={false}
              title="Print it"
              description="Débutant développeur front-end en freelance, il s'agit de dynamiser le site Internet statique d’une petite imprimerie familiale nommée Print it, de mettre en place un carrousel dynamique infini en javascript avec des dots dynamiques."
              ghLink="https://github.com/guirosse76/rossetguillaume_5_15062023"
              demoLink="https://guirosse76.github.io/rossetguillaume_5_15062023/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kasa}
              isBlog={false}
              title="Kasa"
              description="Recruté en tant que développeur front-end freelance pour développer la nouvelle plateforme web de la société Kasa, il s'agit de créer une application web de location immobilière avec le framework React pour le front-end et NodeJS pour le back-end."
              ghLink="https://github.com/guirosse76/rossetguillaume_8_14092023"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
