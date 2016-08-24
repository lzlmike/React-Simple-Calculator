/**
 * Created by Mike on 8/24/16.
 */
import React, { Component } from 'react';
import Button from './Button';

class Result extends Component {
    render() {
        const resultStyle = {
            marginTop : "15px"
        };
        return (
            <div className="row" style={resultStyle}>
                <div className="col-sm-9">
                    <input className="form-control" placeholder="Result"/>
                </div>
                <Button operation="Clear" class="btn btn-danger"/>
            </div>
        );
    }
}

export default Result;
