import React,{useRef} from 'react'
import gsap from "gsap";
import { useIntersection } from "react-use";
import './home.css'
import Logo2 from '../images/Logo2.png'
import event from '../images/event-icon.png'
import drink from '../images/drink-icon.png'
import utensils from '../images/utensils-icon.png'
import bar2 from '../images/bar2.jpg'


const Home = () => {
    const sectionRef = useRef(null);
    //All the ref to be observed
    const intersection = useIntersection(sectionRef,{
      root:null,//just browsesr view port
    
      rootMargin:"0px", //deternain when our animation should start or end 0px is the end ,if 400px it start at the middle
    
      threshold:0.5//1 equals to when we reach the 100% view port of the div if we set to 0.5 means when reach 50% it trigger the animation 
     
    })
    
    //Animation for fading in 
    const fadeIn = element =>{
      gsap.to(element,{
        duration:1,
        opacity:1,
        y:-60,
        ease:'power4.out',
        stagger:{
          amount:0.8
        }
      });
    };
    
    //Animation for fading out
    const fadeOut = element =>{
      gsap.to(element,{
        duration:1,
        opacity:0,
        y:-20,
        ease:'power4.out'
      });
    };
    
    //checking to see weht the viewport is visible to the user
    intersection && intersection.intersectionRatio < 0.5  ? fadeOut('.fadeIn'):fadeIn('.fadeIn')
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
               <div ref={sectionRef} className="showcase2 bg-db">
                   <div className="showcase2-wrapper container fadeIn">
                       <div className="text-light text-center grid grid-3 ">
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
                
                   <div className="slogan container grid grid-1 fadeIn">
                       <h1 className='text-dg text-center lg'>On the rocks for a perfect evening</h1> 
                   </div>
                   
                   <div className="callAction container grid fadeIn">
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
