import React, { Component } from "react";
import PropTypes from "prop-types";

class Snare extends Component {
  render() {
    const pathData = [
      "M",
      this.props.vertices[0][0],
      this.props.vertices[0][1],
      "Q",
      this.props.vertices[1][0],
      this.props.vertices[1][1],
      this.props.vertices[1][2],
      this.props.vertices[1][3],
      "M",
      this.props.vertices[2][0],
      this.props.vertices[2][1],
      "Q",
      this.props.vertices[3][0],
      this.props.vertices[3][1],
      this.props.vertices[3][2],
      this.props.vertices[3][3],
      "L",
      this.props.vertices[4][0],
      this.props.vertices[4][1]
    ].join(" ");
    return (
      <path
        d={pathData}
        stroke={this.props.color}
        strokeWidth="5"
        fill="none"
      />
    );
  }
}

Snare.propTypes = {
  vertices: PropTypes.array,
  color: PropTypes.string,
  note: PropTypes.string,
  stroke: PropTypes.func
};

export default Snare;
