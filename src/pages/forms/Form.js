import React,{useState} from 'react'
import Formsignup from './FormSignUp'
import FormSuccess from './FormSuccess'
import './Form.css'


const Form = () => {
    const [isSubmitted, setIsSubmitted] =  useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
<>
    <div>
   
        <div className="form-container">
        <img src="mobile_ksp_1800x809_design.jpg" alt="promo" className="form-img"/>
          <a href='/' className="close-btn">x</a>
        {!isSubmitted ? <Formsignup submitForm=
            {submitForm} /> : <FormSuccess />}
        </div>
    </div>
   
</>    
    );
};

export default Form
