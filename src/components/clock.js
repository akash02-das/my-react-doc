import React from 'react';

// Class Component
class Clock extends React.Component {
    render() {
        const { locale } = this.props; // Destructuring Props
        let clockTime = new Date().toLocaleTimeString(locale);

        return (
            // Return JSX(Javascript XML)
            <div>
                <h1>Current Time: {clockTime}</h1>
            </div>
        );
    }
}

export default Clock;