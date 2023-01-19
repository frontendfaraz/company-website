import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import reactImg from "../assets/react.png";
import codeImg from "../assets/code.png";

export default class WhatWeDo extends Component {
  render() {
    return (
      <div className="section" id="about">
        <Row center="xs" top="xs">
          <Col xs={12}>
            <h1>What we do</h1>
            <div className="dash" />
          </Col>
          <Col xs={12} md={4}>
            <div className="circle">
              <span className="fas fa-project-diagram" />
            </div>
            <h3>UI/UX</h3>
            <br />
            <p>
              Landing Pages, User Flows, Wireframing, Prototyping, Mobile App
              Design, Web App
            </p>
            <br /> <br />
          </Col>
          <Col xs={12} md={4}>
            <div className="circle">
              <i class="fas fa-icons"></i>
            </div>
            <h3>Icon/Illustration</h3>
            <br />
            <p>
              Character Design, Icon Set, Illustration Guide, Illustration Set
            </p>
            <br /> <br />
          </Col>
          <Col xs={12} md={4}>
            <div className="circle">
              <i class="fas fa-space-shuttle"></i>
            </div>
            <h3>Branding</h3>
            <br />
            <p>Visual Identity, Stationary Kit, Marketing Materials</p>
            <br /> <br />
          </Col>
          <Col xs={12} md={4}>
            <div className="circle">
              <i class="fas fa-code"></i>
            </div>
            <h3>Development</h3>
            <br />
            <p>
              HTML/CSS, JavaScript, Animation, React JS, Responsive Web Design
            </p>
            <br /> <br />
          </Col>

          <Col xs={12} md={4}>
            <div className="circle">
              <i class="fas fa-running"></i>
            </div>
            <h3>Motion</h3>
            <br />
            <p>2D Animation, UI Motion</p>
            <br /> <br />
          </Col>
          <Col xs={12} md={4}>
            <div className="circle">
              <i class="fas fa-camera-retro"></i>
            </div>
            <h3>Photography</h3>
            <br />
            <p>Travel Photography, Product Photography</p>
            <br /> <br />
          </Col>
        </Row>
      </div>
    );
  }
}
