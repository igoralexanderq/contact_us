import React, { forwardRef, useImperativeHandle, useState } from "react";

const InputEmail = forwardRef((props, ref) => {
    const [value, setValue] = useState('');
    const [borderClass, setBorderClass] = useState('');    
    const [validationMessage, setValidationMessage] = useState('');

    const validate = () => {
        if(value.trim() === '') {
            setValidationMessage('This field is required');
            setBorderClass('border-red');            
            return false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            setValidationMessage('Please enter a valid email address');
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
            <label htmlFor="input">{props.label}</label>
            <input type="text" name={props.name} value={value} onChange={(e) => setValue(e.target.value)} className={borderClass}/>
            <label htmlFor="" className="warning">{validationMessage}</label>
        </div>
    )

});

export default InputEmail;