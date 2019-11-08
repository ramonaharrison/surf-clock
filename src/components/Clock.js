import React from 'react';
import Value from './Value'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <Value label={'Time'} value={this.state.date.toLocaleTimeString('en-US', { timeStyle: 'short' })}/>
    );
  }
}

export default Clock;
