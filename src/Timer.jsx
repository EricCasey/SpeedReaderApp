import React from 'react';

var Timer = React.createClass({

  getInitialState: function() {
    return { currentCount: 10 };
  },

  componentDidMount: function() {
    var intervalId = setInterval(this.timer, 2000);
    // store intervalId in the state so it can be accessed later:
    this.setState({intervalId: intervalId});
  },

  componentWillUnmount: function() {
    clearInterval(this.state.intervalId);
  },

  timer: function() {
    this.setState({ currentCount: this.state.currentCount -1 });
  },

  render: function() {
    return (
      <section>
        {this.state.currentCount}
      </section>
    );
  }

});

module.exports = Timer;
