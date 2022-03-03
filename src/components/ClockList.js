import React, {Component} from 'react';

import {Countries} from "../api/countries";

class ClockList extends Component {
    render() {
        return (
            <ul>
                {Countries.map(country => (
                    <li key={country.id}>{`${country.language}: ${new Date().toLocaleTimeString(country.format)}`}</li>
                ))}
            </ul>
        );
    }
}

export default ClockList;