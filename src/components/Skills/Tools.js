import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel
} from "react-icons/si";
import { DiGit } from "react-icons/di";

function Tools() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Tools;
