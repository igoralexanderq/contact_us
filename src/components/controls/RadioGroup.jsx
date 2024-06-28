import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";

const RadioGroup = forwardRef((props, ref) => {    
    const [value, setValue] = useState('');    
    const [validationMessage, setValidationMessage] = useState('');
    const radioRefs = useRef([]);

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

    const reset = () => {
        setValue('');
        radioRefs.current.forEach(radio => {
            if (radio) 
                radio.checked = false;
        });
    }

    useImperativeHandle(ref, () => ({
        validate, getValue, reset
    }));

    return (
        <div className="control-form-double">
            <label>{props.label}</label>
            {props.items.map((item, key) => (
                <div className="radio" key={key}>
                    <input type="radio" name={props.name} value={item.value} id={item.value} onChange={(e) => setValue(e.target.value)} ref={(elem) => radioRefs.current[key] = elem} />     
                    <label htmlFor={item.value}>{item.label}</label>
                </div>
            ))}
            <label htmlFor="" className="warning">{validationMessage}</label>
        </div>
    )
});

export default RadioGroup;