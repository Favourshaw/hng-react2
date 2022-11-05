import React, { useState } from 'react';
import './Contact.css';
import { useForm } from 'react-hook-form'

import 'bootstrap/dist/css/bootstrap.min.css';
export function Contact() {
  (function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  const [successMsg, setSuccessMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSuccessMsg("Your Request has been submitted, I'll get back to you soon");
    reset();
  };
    return (
        <div className="container mt-5 pt-5 col-sm-6" >
          {successMsg && <p className="success-msg">{successMsg}</p>}
  <h2>Contact Me</h2><br />
  <p>Hi there, contact me to ask me about anything you have in mind.</p>
  <form onSubmit={handleSubmit(onSubmit)} class="was-validated" >
  
    <div className="row " >
      <div className="col mb-3 mt-3">
      <label for="fname">First name</label>
        <input type="text" className="form-control"  id='first_name' placeholder="Enter your first name" {...register("fname")} required/>
        
      <div class="invalid-feedback">Please Enter Your First Name.</div>
      </div>
      <div className="col mb-3 mt-3">
      <label for="lname">Last name</label>
        <input type="text" className="form-control" id='last_name' placeholder="Enter your last name" {...register("lname")} required/>
        
      <div class="invalid-feedback">Please Enter Your Last Name.</div>
      </div>
    </div>
    
    <div className="row">
      <div className="col mb-3 mt-3">
      <label for="email">Email</label>
        <input type="email" className="form-control" id='email' placeholder="yourname@email.com" {...register("email")} required/>
        <div class="invalid-feedback">Please Enter Your Email Address.</div>
      </div>
    </div>
    
    <div className="row">
      <div className="col mb-3 mt-3">
        <label for="message">Message</label>
<textarea className="form-control " rows="5" id="message" {...register("message")} defaultValue="Hey Favour, hope you are doing great. Let us collaborate on project axyz." placeholder="Send me a message and I'll reply you as soon as possible..." required></textarea>

      <div class="invalid-feedback txt">Please fill out this field.</div>
      </div>
    </div>
    
    <div className="form-check mb-3 mt-3">
      <input type="checkbox" className="form-check-input" id="check2" {...register("chk", { required: true })} value="something" />
      <label className="form-check-label" for="check2">You agree to providing your data to Favour who may contact you.</label>
    </div>
    
        
    <div className="row">
      <div className="col mb-3 mt-3">
        <div className="d-grid">
    <button type="submit" id='btn__submit' className="btn btn-primary btn-block">Send message </button>
  </div>
      </div>
    </div>
    
  </form>
</div>
    )

}