/**
 * Created by Mike on 8/24/16.
 */
import React from 'react';

const Buttons = (props) => {
    const btnStyle = {
        width : '100%',
    };
    return (
        <div className="col-sm-3">
            <button className={props.class} style={btnStyle} onClick={props.onClick} name={props.op}>{props.operation}</button>
        </div>
    );
}

export default Buttons;