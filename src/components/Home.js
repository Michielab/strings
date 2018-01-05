import React, { Component } from "react";
import Snare from "./Snare";
// import Sound from "react";
import Sound from "react-sound";

class Home extends Component {
  constructor(props) {
    super(props);
    // d = "M50 0 Q 50 80 50 160";
    this.state = { eSnare: [[0, 80], [450, 80, 500, 80]] };
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
    var yPositionTop = 70;
    var yPositionBottom = 90;
    var count = 0;
    var strokeSnare = setInterval(() => {
      count++;
      if (count > 20) {
        clearInterval(strokeSnare);
      } else {
        if (count % 2 === 0) {
          yPositionTop++;
          this.setState({ eSnare: [[0, 80], [250, yPositionTop, 500, 80]] });
        } else {
          yPositionBottom--;
          this.setState({ eSnare: [[0, 80], [250, yPositionBottom, 500, 80]] });
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
    return (
      <div>
        <svg width="900" height="320">
          <Snare
            vertices={this.state.eSnare}
            color="black"
            stroke={this.stroke}
            dragStart={this.dragStart}
            note="e"
            drag={this.drag}
          />
          {/* <Snare
            vertices={bSnare}
            color="black"
            stroke={this.stroke}
            note="b"
          />
          <Snare
            vertices={gSnare}
            color="black"
            stroke={this.stroke}
            note="g"
          />
          <Snare
            vertices={dSnare}
            color="black"
            stroke={this.stroke}
            note="d"
          />
          <Snare
            vertices={aSnare}
            color="black"
            stroke={this.stroke}
            note="a"
          />
          <Snare
            vertices={eHSnare}
            color="black"
            stroke={this.stroke}
            note="e"
          /> */}
        </svg>
        <audio controls autoPlay className="testing">
          <source src="http://www.nihilus.net/soundtracks/Static%20Memories.mp3" />
        </audio>

        {/* <Sound
          position={0}
          url="http://www.nihilus.net/soundtracks/Static%20Memories.mp3"
          playStatus={Sound.status.PLAYING}
          volume={100}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        /> */}
      </div>
    );
  }
}

export default Home;
