import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { farazWorks } from "./../Constants";

const WorkTile = ({ type, label, description, img, color, index }) => {
  const isMobile = window.innerWidth <= 768;
  console.log(isMobile);
  const even = (index + 1) % 2 === 0;
  return (
    <div className="work-tile">
      <Row
        middle="xs"
        style={{
          flexDirection: isMobile
            ? "column-reverse"
            : even
            ? "row-reverse"
            : "",
        }}
      >
        <Col xs={12} md={6} className="data">
          {label && <h3>{label}</h3>}
          <br />
          {description && <p>{description}</p>}
        </Col>
        <Col
          xs={12}
          md={6}
          className="right-container"
          style={{ width: isMobile && "100%" }}
        >
          <div
            className={
              type === "Mobile" ? "work-tile-mobile" : "work-tile-desktop"
            }
          >
            <div
              className="item"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default class Works extends Component {
  render() {
    const works = [...farazWorks];
    return (
      <div>
        <div className="section">
          <Row center="xs" middle="xs">
            <Col xs={12}>
              <h1>Recent Works</h1>
              <div className="dash" />
            </Col>{" "}
            <Col xs={12} md={8}>
              {works.map((w, key) => {
                return <WorkTile key={key} index={key} {...w} />;
              })}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
