import React from 'react';
import './SR.css';

var Word = React.createClass({

  getInitialState: function() {
    return {
      currentCount: 0,
      curentWord: this.props.word,
      reading: this.props.reading,
      done: false
    };
  },

  componentDidMount: function() {
    var intervalId = setInterval(this.timer, 75);
    this.setState({ intervalId: intervalId });
  },

  componentWillUnmount: function() {
    console.log("will unmount")
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
