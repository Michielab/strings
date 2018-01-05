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
      this.props.vertices[1][3]
    ].join(" ");
    return (
      <path
        d={pathData}
        stroke={this.props.color}
        strokeWidth="2"
        fill="none"
        onMouseOver={this.props.stroke}
        transform="matrix(1 0 0 1 0 0)"
        className="draggable"
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
