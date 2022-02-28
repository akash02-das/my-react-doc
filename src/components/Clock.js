import React from 'react';
import Button from "./Button";

// Class Component / Stateful component
class Clock extends React.Component {
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
    console.log("Clock Component Rendered")
    const { time, language } = this.state; // Destructuring from state
    let clockTime = time.toLocaleTimeString(language);

    return (
      <div>
        <h1>Current Time: {clockTime}</h1>
        {/* Rendered Button component and this component no need to render everytime when Clock component have rendered */}
        <Button handler={this.changeLanguage} selectLanguage='en-US' />
      </div>
    );
  }
}

export default Clock;
