import React, { Component } from "react";
import String from "./String";
import Guitar from "./Guitar";

// import Sound from "react";
import Sound from "react-sound";

// import stringSounds;
import e from "../sounds/HighE.mp3";
import a from "../sounds/A.mp3";
import d from "../sounds/D.mp3";
import g from "../sounds/G.mp3";
import b from "../sounds/B.mp3";
import E from "../sounds/E.mp3";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eSnare: [[142, 278], [450, 286, 550, 287], [565, 282]],
      aSnare: [[142, 286], [450, 292, 550, 292], [580, 284]],
      dSnare: [[142, 294], [450, 298, 550, 297], [595, 288]],
      gSnare: [[142, 302], [450, 304, 550, 302], [595, 312]],
      bSnare: [[142, 310], [450, 310, 550, 307], [580, 316]],
      ESnare: [[142, 318], [450, 316, 550, 312], [565, 319]],
      status: "STOPPED",
      noteSound: ""
    };
  }

  stroke = event => {
    var string = event.target.getAttribute("note") + "Snare";
    var originalX = event.target.getAttribute("vertices").split(",")[2];
    var originalY = event.target.getAttribute("yvalue");
    var stringVertices = this.state[string];
    var yPositionBottom = stringVertices[1][1] - 0.3;
    var yPositionTop = stringVertices[1][1];
    var count = 0;

    this.setState({
      status: "STOPPED"
    });

    this.setState({
      noteSound: event.target.getAttribute("notesound"),
      status: "PLAYING"
    });

    var strokeSnare = setInterval(() => {
      count++;
      if (count > 10) {
        clearInterval(strokeSnare);
        this.setState({
          [string]: [
            stringVertices[0],
            [originalX, originalY, stringVertices[1][2], stringVertices[1][3]],
            stringVertices[2]
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
              ],
              stringVertices[2]
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
              ],
              stringVertices[2]
            ]
          });
        }
      }
    }, 50);
  };

  render() {
    var strings = ["e", "a", "d", "g", "b", "E"];
    var stringSounds = [E, a, d, g, b, e];
    var yValues = [286, 292, 298, 304, 310, 316];

    return (
      <div className="main-container">
        <svg width="900" height="900" className="canvas" transform="scale(2)">
          <Guitar />
          {strings.map((string, index) => {
            return (
              <String
                vertices={this.state[`${string}Snare`]}
                color={"white"}
                stroke={this.stroke}
                note={string}
                noteSound={stringSounds[index]}
                key={index}
                yValue={yValues[index]}
              />
            );
          })}
        </svg>
        <Sound url={this.state.noteSound} playStatus={this.state.status} />
      </div>
    );
  }
}

export default Home;
