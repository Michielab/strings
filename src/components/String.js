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
      this.props.vertices[1][3]
    ].join(" ");
    return (
      <path
        d={pathData}
        vertices={this.props.vertices}
        stroke={this.props.color}
        notesound={this.props.noteSound}
        strokeWidth="1.5"
        fill="none"
        onClick={this.props.stroke}
        note={this.props.note}
        className="draggable"
      />
    );
  }
}

String.propTypes = {
  vertices: PropTypes.array,
  color: PropTypes.string,
  note: PropTypes.string,
  stroke: PropTypes.func
};

export default String;
