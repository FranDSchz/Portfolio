import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Proyectos </strong> Recientes
        </h1>
        <p style={{ color: "white" }}>
          Aquí hay algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Aplicación Web Full-Stack con Django"
              description="Colaboré en un equipo de desarrollo para construir una aplicación web completa con arquitectura MVC como proyecto final del programa 'Informatorio Chaco'. Participé en el desarrollo de la capa de persistencia, realizando operaciones con la base de datos a través de SQLAlchemy y contribuí en la creación de vistas y URLs para gestionar la lógica de la aplicación."
              ghLink="https://github.com/FranDSchz/ai-news-blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Pipeline de CI/CD para Aplicación Web"
              description="Diseñé e implementé un pipeline en GitHub Actions para automatizar las fases de testing, análisis de calidad y deployment. Integré un framework de testing automatizado con Jest y Supertest, e implementé el análisis de código estático con SonarQube y notificaciones automáticas."
              ghLink="https://github.com/FranDSchz/taller-ci-cd"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;