import React, { Component } from "react";
import PropTypes from "prop-types";

class String extends Component {
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
      "L",
      this.props.vertices[2][0],
      this.props.vertices[2][1]
    ].join(" ");
    return (
      <path
        d={pathData}
        vertices={this.props.vertices}
        stroke={this.props.color}
        notesound={this.props.noteSound}
        strokeWidth="1.5"
        fill="none"
        onMouseEnter={this.props.stroke}
        note={this.props.note}
        onTouchStart={this.props.stroke}
        className="draggable"
      />
    );
  }
}

String.propTypes = {
  vertices: PropTypes.array,
  color: PropTypes.string,
  stroke: PropTypes.func,
  note: PropTypes.string
};

export default String;
