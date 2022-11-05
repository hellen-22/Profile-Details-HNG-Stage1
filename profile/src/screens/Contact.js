import React from 'react'
import './../css/Contact.css'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
      <div className='container contact1'>
        <div className='contact'>
          <h1>Contact Me</h1>
          <p className='pb-4'>Hi there, contact me to ask me about anything you have in mind</p>

          <form>
            <div className='form-group row pb-3' style={{padding: 0}}>
              <div className="col-md-6">
                <label for="first_name">First Name</label>
                <input type="text" className="form-control" id="first_name" placeholder="Enter your first name"/>
              </div>
              <div className="col-md-6">
                <label for="last_name">Last Name</label>
                <input type="text" className="form-control" id="last_name" placeholder="Enter your last name"/>
              </div>
            </div>

            <div className="form-group pb-3">
              <label for="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="yourname@email.com"/>
            </div>

            <div className="form-group pb-3">
              <label for="message">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Send me a message and i'll respond as soon as possible..."/>
            </div>

            <div className="form-check pb-3">
              <input className="form-check-input" type="checkbox" value="" id="check" />
              <label className="form-check-label" for="check">You agree to send data to Hellen who may contact you.</label>
            </div>
            <button className='btn btn-primary message' id='btn__submit' type='submit'>Send Message</button>
          </form>
        </div>
          
      </div>
      <div className='container'>
        <Footer />
      </div>
    </>
  )
}

export default Contact