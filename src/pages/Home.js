import React from 'react'
import './home.css'
import Logo2 from '../images/Logo2.png'
import event from '../images/event-icon.png'
import drink from '../images/drink-icon.png'
import utensils from '../images/utensils-icon.png'
import bar2 from '../images/bar2.jpg'

const Home = () => {
    return (
        <>
        <section>
            <div className="showcase py-5">
                <div className="container grid">

                    <img src={Logo2} alt="" />

                    <div className="showcase-text text-light text-center">
                    <p> Palm Tree is a speakeasy bar that infuses elements of our local traditional Mama Diam. </p>
                   
                    <p>Embark on a nostalgic journey into Singapore’s cultural heritage with our menu that puts a modern twist to iconic local favourites.</p>
                    </div>

                </div>
            </div>
        </section>
        
        <section>
               <div className="showcase2 py-5 bg-db">
                   <div className="container">
                       <div className="text-light text-center grid grid-3">
                           <div className='showcase-info'>
                              <img src={utensils} alt="" />
                              <h2>Delicious Food</h2>
                           </div>

                           <div className='showcase-info'>
                              <img src={drink} className='drink'alt="" />
                              <h2>Bar Drinks</h2>
                           </div>

                           <div className='showcase-info'>
                              <img src={event} className='event'alt="" />
                              <h2>Event Host</h2>
                           </div>
                       </div>
                   </div>
                
                   <div className="slogan container grid grid-1">
                       <h1 className='text-dg text-center lg'>On the rocks for a perfect evening</h1> 
                   </div>
                   
                   <div className="callAction container grid">
                   <img src={bar2} alt="" />
                   <p>
                   We have the best bartender and chief to serve you, A place you and your friends can't missed out !!
                   </p>
                   </div>
       
               </div>
        </section>

        </>
    )
}

export default Home
