
import { useRef } from "react";
import InputText from "./controls/InputText";
import InputEmail from "./controls/InputEmail";
import RadioGroup from "./controls/RadioGroup";
import TextArea from "./controls/TextArea";
import Checked from "./controls/Checked";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    
    const notify = () => toast.success('Message Sent!', {
        position: "top-center",
        message: "We will get back to you as soon as possible.",        
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
    });

    const submit = (e) => {
        e.preventDefault();
        const isValid1 = inputFirstNameRef.current.validate();
        const istVali2 = inputLastNameRef.current.validate();
        const istVali3 = inputEmeailRef.current.validate();
        const isValid4 = radioGroupRef.current.validate();
        const isValid5 = textAreaRef.current.validate();
        const isValid6 = checkedRef.current.validate();

        

        if(isValid1 && istVali2 && istVali3 && isValid4 && isValid5 && isValid6) {
            inputFirstNameRef.current.clear();
            inputLastNameRef.current.clear();
            inputEmeailRef.current.clear();
            radioGroupRef.current.reset();
            textAreaRef.current.clear();
            checkedRef.current.reset();
            notify();
        }       
    }

    return (
        <>
        <form onSubmit={submit}>
            <h1>Contact Us</h1>
            <InputText ref={inputFirstNameRef} name="firstname" label="First Name *"/>
            <InputText ref={inputLastNameRef} name="lastname" label="Last Name *"/>            
            <InputEmail ref={inputEmeailRef} name="email" label="Email *"/>
            <RadioGroup ref={radioGroupRef} items={itemsGroupRadio} name="querytype" label="Query Type *" noSelectMessage="Please select a query type"/>            
            <TextArea ref={textAreaRef} idx="message" label="Message *"/>
            <Checked ref={checkedRef} checked="required" idx="chkacceptterms" text="I consent to being contacted by the team *"/>            
            <button className="btn-form-submit" type="submit">Submit</button>
        </form>
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
      </>
        
    );
     
}

export default FormContactUs;