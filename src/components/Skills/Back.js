import React from "react";
import { Col, Row } from "react-bootstrap";
import express from "../../Assets/express.svg";
import { DiJavascript1, DiNodejs, DiPython } from "react-icons/di";

function Back() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={express} className="img-fluid logo" alt="brand" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
    </Row>
  );
}

export default Back;
