import React, { Component } from "react";
import Snare from "./Snare";
// import Sound from "react";
import Sound from "react-sound";
import HighE from "../sounds/HighE.mp3";
import HighEShort from "../sounds/HighEShort.mp3";
import bla from "../sounds/bla2.mp3";
import Guitar from "./Guitar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eSnare: [[142, 278], [450, 286, 550, 287]],
      aSnare: [[142, 286], [450, 292, 550, 292]],
      dSnare: [[142, 294], [450, 298, 550, 297]],
      gSnare: [[142, 302], [450, 304, 550, 302]],
      bSnare: [[142, 310], [450, 310, 550, 307]],
      ESnare: [[142, 318], [450, 316, 550, 312]],
      status: "STOPPED",
      position: ""
    };
  }
  strokes = color => {
    // this.setState({
    //   key: "http://www.nihilus.net/soundtracks/Static%20Memories.mp3"
    // });
    // console.log("test", color);
    // var audio = document.getElementsByClassName("testing")[0];
    // audio.play();
  };

  stroke = event => {
    console.log(event);
    this.setState({
      status: "PLAYING"
    });

    var yPositionTop = 286;
    var yPositionBottom = 282;
    var count = 0;
    var strokeSnare = setInterval(() => {
      count++;
      if (count > 20) {
        clearInterval(strokeSnare);
      } else {
        if (count % 2 === 0) {
          yPositionTop++;
          this.setState({
            eSnare: [[140, 282], [450, yPositionTop, 550, 288]]
          });
        } else {
          yPositionBottom--;
          this.setState({
            eSnare: [[140, 282], [450, yPositionBottom, 550, 288]]
          });
        }
      }
    }, 100);
  };

  render() {
    const eSnare = [[0, 80], [500, 80]];
    const bSnare = [[0, 100], [500, 100]];
    const gSnare = [[0, 120], [500, 120]];
    const dSnare = [[0, 140], [500, 140]];
    const aSnare = [[0, 160], [500, 160]];
    const eHSnare = [[0, 180], [500, 180]];

    const guitar = [
      [90, 200],
      [0, 350, 90, 500],
      [90, 500],
      [105, 520, 120, 500],
      [300, 500]
    ];
    return (
      <div>
        <svg width="900" height="900" className="canvas">
          <circle
            cx="120"
            cy="300"
            r="100"
            stroke="#8f4422"
            stroke-width="3"
            fill="#8f4422"
          />
          <circle
            cx="300"
            cy="300"
            r="60"
            stroke="#8f4422"
            stroke-width="3"
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
            stroke-width="3"
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
            stroke-width="3"
            fill="white"
          />
          <circle
            cx="580"
            cy="280"
            r="2"
            stroke="white"
            stroke-width="3"
            fill="white"
          />
          <circle
            cx="595"
            cy="279"
            r="2"
            stroke="white"
            stroke-width="3"
            fill="white"
          />
          <circle
            cx="565"
            cy="319"
            r="2"
            stroke="white"
            stroke-width="3"
            fill="white"
          />
          <circle
            cx="580"
            cy="320"
            r="2"
            stroke="white"
            stroke-width="3"
            fill="white"
          />
          <circle
            cx="595"
            cy="321"
            r="2"
            stroke="white"
            stroke-width="3"
            fill="white"
          />
          <Snare
            vertices={this.state.eSnare}
            color="white"
            stroke={this.stroke}
            dragStart={this.dragStart}
            note="e"
            drag={this.drag}
          />
          <Snare
            vertices={this.state.aSnare}
            color="white"
            stroke={this.stroke}
            dragStart={this.dragStart}
            note="e"
            drag={this.drag}
          />
          <Snare
            vertices={this.state.eSnare}
            color="white"
            stroke={this.stroke}
            dragStart={this.dragStart}
            note="e"
            drag={this.drag}
          />
          <Snare
            vertices={this.state.dSnare}
            color="white"
            stroke={this.stroke}
            dragStart={this.dragStart}
            note="d"
            drag={this.drag}
          />
          <Snare
            vertices={this.state.gSnare}
            color="white"
            stroke={this.stroke}
            dragStart={this.dragStart}
            note="g"
            drag={this.drag}
          />
          <Snare
            vertices={this.state.bSnare}
            color="white"
            stroke={this.stroke}
            dragStart={this.dragStart}
            note="b"
            drag={this.drag}
          />
          <Snare
            vertices={this.state.ESnare}
            color="white"
            stroke={this.stroke}
            dragStart={this.dragStart}
            note="E"
            drag={this.drag}
          />
        </svg>
        <Sound
          url={HighEShort}
          position={this.state.positon}
          playStatus={this.state.status}
          volume={100}
        />
      </div>
    );
  }
}

export default Home;
