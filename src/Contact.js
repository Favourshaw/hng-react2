import React from 'react';
import './Contact.css';
import { useForm } from 'react-hook-form'

import 'bootstrap/dist/css/bootstrap.min.css';
export function Contact() {
    const {register, handleSubmit} = useForm();
    const onSubmit = (d) =>
    alert(JSON.stringify(d));
    return (
        <div className="container mt-5 pt-5 col-sm-6" >
  <h2>Contact Me</h2>
  <p>Hi there, contact me to ask me about anything you have in mind.</p>
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="row " >
      <div className="col mb-3 mt-3">
      <label for="fname">First name</label>
        <input type="text" className="form-control" id='first_name' placeholder="Enter your first name" {...register("fname")} required/>
      </div>
      <div className="col mb-3 mt-3">
      <label for="lname">Last name</label>
        <input type="text" className="form-control" id='last_name' placeholder="Enter your last name" {...register("lname")} required/>
      </div>
    </div>
    
    <div className="row">
      <div className="col mb-3 mt-3">
      <label for="email">Email</label>
        <input type="text" className="form-control" id='email' placeholder="yourname@email.com" {...register("email")} required/>
      </div>
    </div>
    
    <div className="row">
      <div className="col mb-3 mt-3">
        <label for="message">Message</label>
<textarea className="form-control" rows="5" id="message" {...register("message")} placeholder="Send me a message and I'll reply you as soon as possible..." required></textarea>
      </div>
    </div>
    
    <div className="form-check mb-3 mt-3">
      <input type="checkbox" className="form-check-input" id="check2" {...register("chk")} value="something" required/>
      <label className="form-check-label" for="check2">You agree to providing your data to Favour who may contact you.</label>
    </div>
    
        
    <div className="row">
      <div className="col mb-3 mt-3">
        <div className="d-grid">
    <button type="submit" value="submit" id='btn__submit' className="btn btn-primary btn-block">Send message </button>
  </div>
      </div>
    </div>
    
  </form>
</div>
    )

}