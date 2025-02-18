import React from "react";
import { Col, Row } from "react-bootstrap";
import {SiMongodb } from "react-icons/si";
import { SiPostgresql} from "react-icons/si";

function Database() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
    </Row>
  );
}

export default Database;