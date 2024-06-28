import React, { forwardRef, useImperativeHandle, useState } from "react";

const TextArea = forwardRef((props, ref) => {
    const [value, setValue] = useState('');
    const [borderClass, setBorderClass] = useState('');    
    const [validationMessage, setValidationMessage] = useState('');

    const validate = () => {
        if(value.trim() === '') {
            setValidationMessage('This field is required');
            setBorderClass('border-red');            
            return false;
        } else {
            setValidationMessage('');
            setBorderClass('');
            return true;
        }           
    }

    const getValue = () => {
        return value;
    }

    const clear = () => {
        setValue('');
    }

    useImperativeHandle(ref, () => ({
        validate, getValue, clear
    }));

    return (
        <div className="control-form-big">
            <label htmlFor={props.idx}>{props.label}</label>
            <textarea name={props.name} id={props.idx} cols={5} onChange={(e) => setValue(e.target.value)} className={`input ${borderClass}`} value={value}></textarea>
            <label htmlFor="" className="warning">{validationMessage}</label>
        </div>
    )
});

export default TextArea;