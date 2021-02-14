import React from 'react';
import List from './List';

import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-content">
                    <h1>Weather</h1>
                    <List />
                </div>
            </div>
        );
    }
}

export default App;
