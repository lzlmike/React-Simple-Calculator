/**
 * Created by Mike on 8/24/16.
 */
import React, { Component } from 'react';
import Button from './Button';
import Inputs from './Inputs';

class Calculate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result : "",
            pre : "",
            cur : ""
        };
        this.onClick = this.onClick.bind(this);
        this.clearResult = this.clearResult.bind(this);
        this.onChangeCur = this.onChangeCur.bind(this);
        this.onChangePre = this.onChangePre.bind(this);
    }

    onChangePre (e) {
        const result = this.state.result;
        const cur = this.state.cur;
        this.setState({
            result : result,
            pre : e.target.value,
            cur : cur
        });
    }
    onChangeCur (e) {
        const result = this.state.result;
        const pre = this.state.pre;
        this.setState({
            result : result,
            cur : e.target.value,
            pre : pre
        });
    }


    onClick(e) {
        const operator = e.target.name;
        console.log(operator);
        const pre = this.state.pre;
        const cur = this.state.cur;

        if (pre === '' || cur === '' || (operator == '/' && cur== '0')) {
            alert('Please input valid numbers');
            return;
        }

        let result = 0;
        if (operator === '+') {
            result = parseInt(pre) + parseInt(cur);
        } else if (operator === '-') {
            result = parseInt(pre) - parseInt(cur);
        } else if (operator === '*') {
            result = parseInt(pre) * parseInt(cur);
        } else {
            result = parseInt(pre) / parseInt(cur);
        }

        this.setState({
            result: result
        });
    }

    clearResult() {
        this.setState({
            result: "",
            pre : "",
            cur : ""
        });
    }

    render() {
        const resultStyle = {
            marginTop : "15px"
        };

        const container = {
            background : '#EAEAEA',
            marginTop: '30px'
        };

        return (
            <div className="panel panel-default" style={container}>
                <div className="panel-body">
                    <h1>Simple calculator</h1>
                    <div className="row">
                        <Inputs place="NUMBER e.g. 1337" onChange={this.onChangePre} value={this.state.pre}/>
                        <Inputs place="NUMBER e.g. 2108" onChange={this.onChangeCur} value={this.state.cur}/>
                    </div>

                    <div className="row">
                        <Button operation=" + Add" class="btn btn-primary" op="+" onClick={this.onClick}/>
                        <Button operation=" - Subtract" class="btn btn-primary" op="-" onClick={this.onClick}/>
                        <Button operation=" / Divide" class="btn btn-primary" op="/" onClick={this.onClick}/>
                        <Button operation=" * Multiply" class="btn btn-primary" op="*" onClick={this.onClick}/>
                    </div>

                    <div className="row" style={resultStyle}>
                        <div className="col-sm-9">
                            <input className="form-control" readOnly="readonly" placeholder="Result" value={this.state.result}/>
                        </div>
                        <Button operation="Clear" class="btn btn-danger" onClick={this.clearResult}/>
                    </div>

                </div>
            </div>
        );
    }
};

export default Calculate;
