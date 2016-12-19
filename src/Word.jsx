import React from 'react';
import './SR.css';

var Word = React.createClass({

  getInitialState: function() {
    return {
      currentCount: 0,
      curentWord: this.props.word,
      reading: this.props.reading,
      done: false,
      speed: Number(this.props.speed)
    };
  },

  // componentDidMount: function() {
  //   var intervalId = setInterval(this.timer, this.props.speed);
  //   this.setState({ intervalId: intervalId });
  // },

  componentWillReceiveProps: function(nextProps) {
    // console.log("This State" + this.state.reading)
    // console.log(nextProps.reading)
    if (nextProps.reading) {
      // console.log("setting interval" + this.state.speed)
      var intervalId = setInterval(this.timer, Number(this.state.speed));
      // console.log(intervalId)
      // console.log(this.state.intervalId)
      this.setState({ intervalId: intervalId });
    } else {
      this.setState({ speed: Number(nextProps.speed), intervalId: '', reading: false })
      clearInterval(this.state.intervalId);
    }
  },

  componentWillUnmount: function() {
    clearInterval(this.state.intervalId);
  },

  timer: function() {
    if (this.state.currentCount < this.props.arr.length && this.props.reading) {
      this.setState({ currentCount: this.state.currentCount + 1, reading: true });
    } else if (this.state.currentCount >= this.props.arr.length) {
      this.setState({ done: true, reading: false });
    }
  },

  reset: function() {
    this.setState({ currentCount: 0, reading: false, done: false });
  },

  render: function() {
    return (
      <section>
        <img
          id="reset"
          role="presentation"
          src="http://support.showreelfinder.com/hc/en-us/article_attachments/201500876/reset.png"
          onClick={this.reset}
          height="20px" width="20px"/>
        {this.props.arr[this.state.currentCount]}
      </section>
    );
  }

});

module.exports = Word;
