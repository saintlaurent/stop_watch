import React, { Component } from 'react';

class StopWatch extends Component {

  constructor(props){
    super(props);
    this.state = {
      time: Date(Date.now()).toString(),
      seconds: 0,
      runTimer: true,
      isPaused: false
    }
    this.timeInterval = null;
    this.handlePause = this.handlePause.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  loopTime = function(){
    // let secondsElapsed = ++this.state.seconds;
    var timer = setInterval(() => {
    let secondsElapsed = this.state.seconds;
      ++secondsElapsed;
      this.setState({
        seconds: secondsElapsed
      })
    }, 1000);

    if( ! this.state.runTimer) {
        clearInterval(timer);
    }
  } 

  componentDidMount(){
    this.startTimer();
  }

  startTimer(){
    this.timeInterval = setInterval(() => {
        if(! this.state.isPaused) {
          let secondsElapsed = this.state.seconds;
          ++secondsElapsed;
          this.setState({
            seconds: secondsElapsed
          });
        };
      }, 1000);
  }

  handlePause(){
    // var currentTime = this.state.seconds;
    clearInterval(this.timeInterval);
    //If timer is running
    if( this.state.isPaused) {
        this.startTimer();
    }

    //toggle isPaused
    this.setState(state => ({
      isPaused: !state.isPaused
    }));

  }

  handleReset(){
    clearInterval(this.timeInterval);
    this.setState({
      seconds: 0,
      isPaused: true
    })
  }
  render() {
    return (
      <div className="">
        <p>The current time is: {this.state.seconds}</p>
        <button onClick={this.handlePause}>{ this.state.isPaused ? "Restart" : "Pause" }</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default StopWatch;
