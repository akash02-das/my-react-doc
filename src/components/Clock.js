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
    const { time, language } = this.state; // Destructuring from state
    let clockTime = time.toLocaleTimeString(language);

    return (
      <div>
        <h1>Clock: {clockTime}</h1>

        {/* Conditional rendering */}
        {(language === 'bn-BD') ? (
            <Button handler={this.changeLanguage} selectLanguage='en-US' btnText='English Clock' />
        ) : (
            <Button handler={this.changeLanguage} selectLanguage='bn-BD' btnText='Bengali Clock' />
        )}
      </div>
    );
  }
}

export default Clock;
