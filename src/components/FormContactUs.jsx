
import { useRef } from "react";
import InputText from "./controls/InputText";
import InputEmail from "./controls/InputEmail";
import RadioGroup from "./controls/RadioGroup";
import TextArea from "./controls/TextArea";
import Checked from "./controls/Checked";

const FormContactUs = () => {
    const inputFirstNameRef = useRef();
    const inputLastNameRef = useRef();
    const inputEmeailRef = useRef();  
    const radioGroupRef = useRef();
    const textAreaRef = useRef();   
    const checkedRef = useRef();
    
    const itemsGroupRadio = [{
        value: 'generalenquiry',
        label: 'General Enquiry'
    }, {
        value: 'supportrequest',
        label: 'Support Request'    
    }]; 
    

    const submit = (e) => {
        e.preventDefault();
        const isValid1 = inputFirstNameRef.current.validate();
        const istVali2 = inputLastNameRef.current.validate();
        const istVali3 = inputEmeailRef.current.validate();
        const isValid4 = radioGroupRef.current.validate();
        const isValid5 = textAreaRef.current.validate();
        const isValid6 = checkedRef.current.validate();

        

        if(isValid1 && istVali2 && istVali3 && isValid4 && isValid5 && isValid6) {
            alert(JSON.stringify({
                firstname: inputFirstNameRef.current.getValue(),
                lastname: inputLastNameRef.current.getValue(),
                email: inputEmeailRef.current.getValue(),
                querytype: radioGroupRef.current.getValue(),
                message: textAreaRef.current.getValue(),
                acceptterms: checkedRef.current.getValue()
            }));         
        } else {        
            alert('Form is invalid');
        }        
    }

    return (
        <form onSubmit={submit}>
            <h1>Contact Us</h1>
            <InputText ref={inputFirstNameRef} name="firstname" label="First Name *"/>
            <InputText ref={inputLastNameRef} name="lastname" label="Last Name *"/>            
            <InputEmail ref={inputEmeailRef} name="email" label="Email *"/>
            <RadioGroup ref={radioGroupRef} items={itemsGroupRadio} label="Query Type *" noSelectMessage="Please select a query type"/>            
            <TextArea ref={textAreaRef} label="Message *"/>
            <Checked ref={checkedRef} checked="required" idx="chkacceptterms" text="I consent to being contacted by the team *"/>            
            <button className="btn-form-submit" type="submit">Submit</button>
        </form>
    );
     
}

export default FormContactUs;