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
        return document.getElementById('chkacceptterms').checked;
    }

    useImperativeHandle(ref, () => ({
        validate, getValue
    }));

    return (
        <div className="control-form-large">
            <div className="checked">
                <input type="checkbox" id={props.idx} value={props.idx}/>
                <label htmlFor="chkacceptterms">{props.text}</label>
            </div>
            <label htmlFor="" className="warning">{validationMessage}</label>
        </div>
    )
});

export default Checked;