import React,{useRef} from 'react'
import gsap from "gsap";
import { useIntersection } from "react-use";


const Animate = () => {
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
          amount:0.3
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
}

export default Animate
