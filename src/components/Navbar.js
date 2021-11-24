import React ,{useState}from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.png'
const Navbar = () => {
const [click , setClick] = useState(false)
const handleClick = () => setClick(!click)//once clicked then true

const handleColse =() =>{
    setClick(false)
}
    return (
        <>
            <section className='navbar'>
                <div className="container flex">

                   <Link to='/'><img src={Logo} alt="" /></Link> 
<div className="menu-icon" onClick={handleClick}>
    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
</div>

            <nav>
                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'className ="nav-links" onClick={handleColse}>Home</Link></li>
                    <li><Link to='/about'className ="nav-links" onClick={handleColse}>About</Link></li>
                    <li><Link to='/menu'className ="nav-links" onClick={handleColse}>Menu</Link></li>
                    <li><Link to='/reservation'className ="nav-links" onClick={handleColse}>Reservation</Link></li>
                     <li><Link to='/contact' className ="nav-links" onClick={handleColse}>Contact</Link></li>
                </ul>
            </nav>
        </div>
           </section>

</>
)
}

export default Navbar
