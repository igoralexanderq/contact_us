import React, { forwardRef, useImperativeHandle, useState } from "react";

const Checked = forwardRef((props, ref) => {    
    const [validationMessage, setValidationMessage] = useState('');

    const validate = () => {
        if(props.checked === 'required') {
            if(!document.getElementById('chkacceptterms').checked) {
                setValidationMessage('To submit this form, please consent to being contacted');                 
                return false;
            } else {
                setValidationMessage('');
                return true;
                
            }
        } else {    
            setValidationMessage('');            
            return true;
        }
    }

    const getValue = () => {
        return document.getElementById('chkacceptterms').checked = false
    }

    const reset = () => {
        document.getElementById('chkacceptterms').checked = false;
    }

    useImperativeHandle(ref, () => ({
        validate, getValue, reset
    }));

    return (
        <div className="control-form-large">
            <div className="checked">
                <input type="checkbox" id={props.idx} value={props.idx}/>
                <label htmlFor={props.idx}>{props.text}</label>
            </div>
            <label htmlFor="" className="warning">{validationMessage}</label>
        </div>
    )
});

export default Checked;