import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Front from "./Front";
import Back from "./Back";
import Tools from "./Tools";
import Database from "./Database";

function Skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Front-end web development{" "}
          <strong className="purple">Skillset </strong>
        </h1>

        <Front />

        <h1 className="project-heading">
          Back-end web development <strong className="purple">Skillset </strong>
        </h1>
        <Back />

        <h1 className="project-heading">
          Database <strong className="purple">Skillset </strong>
        </h1>
        <Database />

        <h1 className="project-heading">
          Tools <strong className="purple">Skillset </strong>
        </h1>
        <Tools />
      </Container>
    </Container>
  );
}

export default Skills;
