import React, { Component } from 'react';

class StopWatch extends Component {

  constructor(props){
    super(props);
    this.state = {
      time: Date(Date.now()).toString(),
      runTimer: true,
      isPaused: false
    }

    this.handlePause = this.handlePause.bind(this);
  }

  loopDate = setInterval(() => {
    this.setState({
      time: Date(Date.now()).toString()
    })
  }, 1000);

  loopTime = function(){
    this.loopDate();
  } 

  componentDidMount(){
    // setInterval(() => {
    //   this.setState({
    //     time: Date(Date.now()).toString()
    //   })
    // }, 1000)

    this.loopTime();
  }

  handlePause(){
    clearInterval(this.loopTime());
  }

  render() {
    return (
      <div className="">
        <p>The current time is: {this.state.time}</p>
        <button onClick={this.handlePause}>Pause</button>
      </div>
    );
  }
}

export default StopWatch;