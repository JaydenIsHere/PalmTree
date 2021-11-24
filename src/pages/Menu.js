import React from 'react'
import './menu.css'
import menutop from '../images/Menu-top.PNG'
import Card from './Card'
import menu1 from '../images/menu/menu-1.jpg'
import menu2 from '../images/menu/menu-2.jpg'
import menu3 from '../images/menu/menu-3.jpg'
import menu4 from '../images/menu/menu-4.jpg'
import menu5 from '../images/menu/menu-5.jpg'
import menu6 from '../images/menu/menu-6.jpg'
import menu7 from '../images/menu/menu-7.jpg'
import menu8 from '../images/menu/menu-8.jpg'
import menu9 from '../images/menu/menu-9.jpg'
import menu10 from '../images/menu/spaghetti.jpg'
import { Link } from 'react-router-dom'
const Menu = () => {
    return (
        <>
        <section>
            <div className="menu-section bg-db">
                <div className="container text-center py-5">
                    <div className="menu-head grid grid-1">
                        <h1 className='lg'>DINING MENU</h1>
                        <img src={menutop} alt="" />
                    </div>
                </div>

<div className="card-section container flex ">
<Card img={menu1} name='Pizza' price='99' path='#'/>
<Card img={menu2} name='Burger' price='120' path='#'/>
<Card img={menu3} name='Pancake' price='55' path='#'/>
<Card img={menu4} name='Ice Pacake' price='99' path='#'/>
<Card img={menu5} name='Cake' price='60' path='#'/>
<Card img={menu6} name='Ice Cream' price='39' path='#'/>
<Card img={menu7} name='Drinks' price='70' path='#'/>
<Card img={menu8} name='Fruit' price='39'path='#'/>
<Card img={menu9} name='Fruit Tea' price='99' path='#'/>
<Card img={menu10} name='Spaghetti' price='130' path='#'/>
</div>

<Link to ='#'className='btn btn-dg text-center'>SEE MORE</Link>

            </div>
        </section>
            
        </>
    )
}

export default Menu
