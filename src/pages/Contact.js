import React from 'react'
import './contact.css'
const Contact = () => {
    return (
        <section className='bg-db'>
            <div className="contact-section">
                <div className="container grid grid-1 text-center py-3">
                    <h1 className='lg'>CONTACT US</h1>
                    <div className="contactUsP">
                        <p>You got questions, we got answers to anything related to Palm Tree! </p>
<p>Our team is here to help - Reach us via the form below and we will get back to you shortly.</p>

                    </div>
                </div>
                    <form action="#" className='flex container'>
                        <div className="form-size">
                        <label htmlFor="name">Name*</label>
                        <input type="text" id='name' name='name'/>
                        <label htmlFor="email">Email*</label>
                        <input type="email" id='email' name='email'/>
                        <label htmlFor="name">Message*</label>
                        <textarea type="text" id='name' name='name'/>
                        </div>
                       

                    </form>
                
            </div>
            
        </section>
    )
}

export default Contact
