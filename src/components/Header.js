import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import reactImg from "../assets/react.png";
import codeImg from "../assets/code.png";

export default class Header extends Component {
  render() {
    return (
      <div className="header" id="header">
        <Row center="xs" middle="xs">
          <Col xs={12} md={8} lg={8}>
            <h1>Rytech</h1>
            <p>A team of passionate software engineers from Lucknow</p>
            <br />
            <button onClick={this.props.onButtonClick}>Let's Talk</button>
          </Col>
        </Row>

        <div className="rocket">
          <div className="rocket-body">
            <div className="body"></div>
            <div className="fin fin-left"></div>
            <div className="fin fin-right"></div>
            <div className="window"></div>
          </div>
          <div className="exhaust-flame"></div>
          <ul className="exhaust-fumes">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul className="star">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}
