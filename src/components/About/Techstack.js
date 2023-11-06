import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { SiVisualstudiocode, SiSlack } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Javascript">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>

      <Col
        xs={4}
        md={2}
        className="tech-icons"
        aria-label="React.js"
        title="React.js"
      >
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="MongoDb">
        <DiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="gitHub">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Visual Studio">
        <SiVisualstudiocode />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Slack">
        <SiSlack />
      </Col>
    </Row>
  );
}

export default Techstack;
