/**
 * Created by Mike on 8/24/16.
 */
import React from 'react';

const Inputs = (props) => {
    const inputStyle = {
        margin: "15px 0"
    };

    return (
        <div className="col-sm-6 col-xs-6" style={inputStyle}>
            <input className="form-control" onChange={props.onChange} placeholder={props.place}
                   value={props.value}/>
        </div>
    );
};

export default Inputs;