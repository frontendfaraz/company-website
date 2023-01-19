import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import reactImg from "../assets/react.png";
import codeImg from "../assets/code.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer" id="footer">
        <Row center="xs" middle="xs">
          <Col xs={12} md={8} lg={8}>
            <h2>Interested to work with us?</h2>

            <br />
            <button onClick={this.props.onButtonClick}>Let's Talk</button>
          </Col>
        </Row>
      </div>
    );
  }
}
