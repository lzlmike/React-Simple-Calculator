/**
 * Created by Mike on 8/23/16.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Calculate from './components/Calculate';

const App = () => {
    return (
        <div style={{textAlign:'center'}}>
            <Calculate />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));