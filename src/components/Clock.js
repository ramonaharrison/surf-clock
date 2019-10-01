import React from 'react';

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
    const options = { timeStyle: 'short' };
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString('en-US', options)}</h1>
      </div>
    );
  }
}

export default Clock;
