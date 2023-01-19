import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import reactImg from "../assets/react.png";
import codeImg from "../assets/code.png";

export default class WhatWeDo extends Component {
  render() {
    return (
      <div className="section" id="client">
        <Row center="xs" middle="xs">
          <Col xs={12}>
            <h1>Clients</h1>
            <div style={{ height: 10 }} />
            <p>We've been working with the teams around the word </p>
            <div className="dash" />
          </Col>
          <Col xs={7} md={3}>
            <div className="card">
              <h3 className="logo-one">Qryus</h3>
            </div>
          </Col>
          <Col xs={7} md={3}>
            <div className="card">
              <h3 className="logo-two">Instapdfy</h3>
            </div>
            <div className="card">
              <h3 className="logo-three">Foloez</h3>
            </div>
          </Col>
          <Col xs={7} md={3}>
            <div className="card">
              <h3 className="logo-four">Inventoric</h3>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
