import React from 'react'
import { Link } from 'react-router-dom'
import time from '../images/time-icon-png-bar.png'
import pin from '../images/pin-icon-bar.png'
import call from '../images/call-png-bar.png'
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer bg-db'>
            <div className="container grid grid-4">

            <div className="footer-group  text-center">
                <img src={pin} alt="" />
                <h3>Find Us</h3>
                <p>38 maple Street #01-01 Singapore 101010</p>
            </div>

            <div className="footer-group  text-center">
                <img src={time} className='time' alt="" />
                <h3>Hours</h3>
                <p>Mon - Sun 4pm - 10.30pm</p>
            </div>

            <div className="footer-group  text-center">
                <img src={call} className='call' alt="" />
                <h3>Contact</h3>
                <p>   +65 8888 0999
info@findoutsg.com</p>
            </div>

            <div className="footer-group text-center">
               <Link to='#'> <i class="fab fa-facebook fa-3x"/></Link>
           <Link to='#'><i class="fab fa-instagram fa-3x"/></Link>
         
            
            </div>

            </div>
        </footer>
    )
}

export default Footer
