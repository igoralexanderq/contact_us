import React, { forwardRef, useImperativeHandle, useState } from "react";

const RadioGroup = forwardRef((props, ref) => {    
    const [value, setValue] = useState('');    
    const [validationMessage, setValidationMessage] = useState('');

    const validate = () => {
        //alert(value); 
        if(value.trim() === '') {
            setValidationMessage(props.noSelectMessage);            
            return false;
        } else {
            setValidationMessage('');            
            return true;
        }
    }

    const getValue = () => {
        return value
    }

    useImperativeHandle(ref, () => ({
        validate, getValue
    }));

    return (
        <div className="control-form-double">
            <label>{props.label}</label>
            {props.items.map((item, key) => (
                <div className="radio" key={key}>
                    <input type="radio" name="querytype" value={item.value} id={item.value} onChange={(e) => setValue(e.target.value)} />     
                    <label htmlFor={item.value}>{item.label}</label>
                </div>
            ))}
            <label htmlFor="" className="warning">{validationMessage}</label>
        </div>
    )
});

export default RadioGroup;