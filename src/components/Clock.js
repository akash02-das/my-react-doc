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
    language: 'bn-BD'
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

  // Used arrow function to avoid 'this' keyword complications
  changeLanguage = (locale) => {
    this.setState({language: locale})
  }

  render() {
    const { time, language } = this.state; // Destructuring from state
    let clockTime = time.toLocaleTimeString(language);

    return (
      <div>
        <h1>Current Time: {clockTime}</h1>
        {/*Used onClick event handler*/}
        <button onClick={() => this.changeLanguage('en-US')}>Change Language</button>
      </div>
    );
  }
}

export default Clock;
