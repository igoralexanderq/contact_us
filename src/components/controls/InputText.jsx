import React, { forwardRef, useImperativeHandle, useState } from "react";

const InputText = forwardRef((props, ref) => {
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
        <div className="control-form-small">
            <label htmlFor="input">{props.label}</label>
            <input type="text" name={props.name} value={value} onChange={(e) => setValue(e.target.value)} className={borderClass}/>
            <label htmlFor="" className="warning">{validationMessage}</label>
        </div>
    )

});

export default InputText;