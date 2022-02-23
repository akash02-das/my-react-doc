import React from 'react';

// Class Component / Stateful component
class Clock extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     time: new Date(),
  //   };
  // }

  // Or shortcut way to write  state
  state = {
    time: new Date(),
  };

  // React Lifecycle Method
  componentDidMount() {
    this.clockTimer = setInterval(() => this.updateClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  // Custom method
  updateClock() {
    this.setState({ time: new Date() });
  }

  render() {
    const { locale } = this.props; // Destructuring Props
    let clockTime = this.state.time.toLocaleTimeString(locale);

    return (
      // Return JSX(Javascript XML)
      <div>
        <h1>Current Time: {clockTime}</h1>
      </div>
    );
  }
}

export default Clock;
