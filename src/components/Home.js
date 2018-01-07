import React, { Component } from "react";
import String from "./String";

// import Sound from "react";
import Sound from "react-sound";

// import strings;
import e from "../sounds/HighE.mp3";
import b from "../sounds/B.mp3";
import d from "../sounds/D.mp3";
import g from "../sounds/G.mp3";
import a from "../sounds/A.mp3";
import E from "../sounds/E.mp3";

// import HighEShort from "../sounds/HighEShort.mp3";
// import bla from "../sounds/bla2.mp3";
// import Guitar from "./Guitar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eSnare: [[142, 278], [450, 286, 550, 287]],
      bSnare: [[142, 310], [450, 310, 550, 307]],
      gSnare: [[142, 302], [450, 304, 550, 302]],
      dSnare: [[142, 294], [450, 298, 550, 297]],
      aSnare: [[142, 286], [450, 292, 550, 292]],
      ESnare: [[142, 318], [450, 316, 550, 312]],
      status: "STOPPED",
      position: "",
      noteSound: ""
    };
  }

  stroke = event => {
    var string = event.target.getAttribute("note") + "Snare";
    var originalX = event.target.getAttribute("vertices").split(",")[2];
    var originalY = event.target.getAttribute("vertices").split(",")[3];
    var stringVertices = this.state[string];
    var yPositionBottom = stringVertices[1][1] - 0.3;
    var yPositionTop = stringVertices[1][1];
    var count = 0;

    if (this.state.status === "STOPPED") {
      this.setState({
        noteSound: event.target.getAttribute("notesound"),
        status: "PLAYING"
      });
    } else {
      this.setState({
        status: "STOPPED"
      });
    }

    var strokeSnare = setInterval(() => {
      count++;
      if (count > 10) {
        clearInterval(strokeSnare);
        this.setState({
          [string]: [
            stringVertices[0],
            [originalX, originalY, stringVertices[1][2], stringVertices[1][3]]
          ]
        });
      } else {
        if (count % 2 === 0) {
          yPositionBottom += 0.3;
          this.setState({
            [string]: [
              stringVertices[0],
              [
                stringVertices[1][0],
                yPositionBottom,
                stringVertices[1][2],
                stringVertices[1][3]
              ]
            ]
          });
        } else {
          yPositionTop -= 0.3;
          this.setState({
            [string]: [
              stringVertices[0],
              [
                stringVertices[1][0],
                yPositionTop,
                stringVertices[1][2],
                stringVertices[1][3]
              ]
            ]
          });
        }
      }
    }, 10);
  };

  render() {
    return (
      <div>
        <svg width="900" height="900" className="canvas">
          <circle
            cx="120"
            cy="300"
            r="110"
            stroke="#8f4422"
            strokeWidth="3"
            fill="#8f4422"
          />
          <circle
            cx="300"
            cy="300"
            r="60"
            stroke="#8f4422"
            strokeWidth="3"
            fill="#8f4422"
          />
          <polygon points="120,200 300,240 300,360 120,400" fill="#8f4422" />
          <polygon points="350,275 550,280 550,320 350,325" fill="#8f4422" />
          <polygon points="140,270 150,270 150,330 140,330" fill="black" />
          <circle
            cx="220"
            cy="300"
            r="30"
            stroke="#c78a2c"
            strokeWidth="3"
            fill="#ce986c"
          />
          <polygon
            points="550,280 560,275 620,270 620,330 560,325,550,320"
            fill="#ffc15e"
          />
          <circle
            cx="565"
            cy="281"
            r="2"
            stroke="white"
            strokeWidth="3"
            fill="white"
          />
          <circle
            cx="580"
            cy="280"
            r="2"
            stroke="white"
            strokeWidth="3"
            fill="white"
          />
          <circle
            cx="595"
            cy="279"
            r="2"
            stroke="white"
            strokeWidth="3"
            fill="white"
          />
          <circle
            cx="565"
            cy="319"
            r="2"
            stroke="white"
            strokeWidth="3"
            fill="white"
          />
          <circle
            cx="580"
            cy="320"
            r="2"
            stroke="white"
            strokeWidth="3"
            fill="white"
          />
          <circle
            cx="595"
            cy="321"
            r="2"
            stroke="white"
            strokeWidth="3"
            fill="white"
          />
          <String
            vertices={this.state.eSnare}
            color="white"
            stroke={this.stroke}
            note="e"
            noteSound={e}
          />
          <String
            vertices={this.state.bSnare}
            color="white"
            stroke={this.stroke}
            note="b"
            noteSound={b}
          />
          <String
            vertices={this.state.gSnare}
            color="white"
            stroke={this.stroke}
            note="g"
            noteSound={g}
          />
          <String
            vertices={this.state.dSnare}
            color="white"
            stroke={this.stroke}
            note="d"
            noteSound={d}
          />
          <String
            vertices={this.state.aSnare}
            color="white"
            stroke={this.stroke}
            note="a"
            noteSound={a}
          />
          <String
            vertices={this.state.ESnare}
            color="white"
            stroke={this.stroke}
            dragStart={this.dragStart}
            note="E"
            noteSound={E}
          />
        </svg>
        <Sound
          url={this.state.noteSound}
          position={this.state.positon}
          playStatus={this.state.status}
          volume={100}
        />
      </div>
    );
  }
}

export default Home;
