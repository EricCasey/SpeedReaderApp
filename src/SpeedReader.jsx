import React, { Component } from 'react';
import './SR.css';

class SpeedReader extends Component {

  constructor(props) {
    super(props);
    this.state = {
    wall: '8-bit twee selfies, ethical chia XOXO biodiesel church-key synth enamel pin locavore selvage live-edge waistcoat iPhone. Brunch direct trade quinoa, letterpress poke tote bag craft beer. Lyft put a bird on it gluten-free, fam lumbersexual tilde church-key narwhal. Drinking vinegar activated charcoal etsy, tumblr mumblecore cliche cray sriracha brunch wolf. Sriracha pabst cliche hexagon post-ironic, affogato kale chips PBR&B brooklyn health goth keffiyeh. Authentic waistcoat snackwave, blue bottle unicorn flannel tofu asymmetrical brunch YOLO DIY. Try-hard hexagon gochujang gluten-free thundercats, kale chips single-origin coffee pickled.',
    wallArr: [],
    currentWord: '',
    working: false
    }
  };
  handleOnChange = (value, name) => {
    // console.log(value, name)
    if(!this.state.working) {
      this.setState({
        ...this.state,
        wall: value,
        wallArr: value.split(' '),
        currentWord: value.split(' ')[0]
      })
    } else {
      // do nothing?
      console.log("doing hte other thing")
    }
  } // not sure about this.

  startReading = () => {
    // this is where I'll use regex to get rid of strange chars?
    // console.log("Array Length: " + this.state.wallArr.length)
    // console.log("Current Word: " + this.state.currentWord)
    for (var i = 0; i <= this.state.wallArr.length - 1; i++) {
      var thisWord = this.state.wallArr[i]
      console.log(thisWord)
      this.setState({
        currentWord: thisWord,
        working: true
      })

      // this.setState((prevState, props) => {
      //   console.log(prevState, props)
      //   return { currentWord: this.state.wallArr[i]};
      // });


      // console.log("state current word: " + this.state.currentWord)
      // console.log("state indexed wallArr: " + this.state.wallArr[i])
      console.log(this.state.currentWord)
    }
  }

  render() {
    return (
      <div className="reader">
        <div id="readArea">
        <p className="word"> {this.state.currentWord} </p>
        </div>
        <div id="input">
          <textarea
          defaultValue={this.state.wall}
          onChange={ (e) => {
            this.handleOnChange(e.target.value, e.target.name)
            }
          }>
          </textarea>
        </div>
        <div id="controls">
          <div id="start" onClick={this.startReading}>
            start btn
          </div>
          <div id="WPM">
          <h3> - tmp notes - </h3>
            <li>WPM settings here (200WPM to start)</li>
            <li>maybe a 'how much time you got?' setting</li>
            <li>@ Stream Viewers: halp!</li>
            <li>Acceleration?</li>
          </div>
        </div>
      </div>
    );
  }
}



export default SpeedReader;
