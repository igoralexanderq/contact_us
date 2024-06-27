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

    useImperativeHandle(ref, () => ({
        validate, getValue
    }));

    return (
        <div className="control-form-big">
            <label htmlFor="message">{props.label}</label>
            <textarea name={props.name} id="message" cols={5} onChange={(e) => setValue(e.target.value)} className={borderClass} value={value}></textarea>
            <label htmlFor="" className="warning">{validationMessage}</label>
        </div>
    )
});

export default TextArea;