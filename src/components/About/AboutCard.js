import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola a todos! Soy <span className="purple">Franco Damián Sánchez </span>
            de <span className="purple"> Resistencia, Chaco, Argentina.</span>
            <br />
            Soy un estudiante avanzado de 4to año de Ingeniería en Sistemas de Información (UTN) con una fuerte vocación por el desarrollo de software Backend.
            <br />
            Cuento con una sólida formación en Python y frameworks como Django y FastAPI, complementada con un profundo conocimiento del ciclo de vida del software, incluyendo metodologías ágiles, CI/CD y prácticas de testing automatizado para asegurar la calidad del software (QA).
            <br />
            Busco activamente mi primera oportunidad laboral para aportar mi capacidad de resolución de problemas y mi compromiso con la construcción de soluciones tecnológicas robustas y escalables. [cite: 4, 5, 6]
            <br />
            <br />
            Además de la programación, ¡hay otras actividades que me encantan!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar Videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Escribir sobre tecnología
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "¡Esfuérzate por construir cosas que marquen la diferencia!"{" "}
          </p>
          <footer className="blockquote-footer">Franco</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;