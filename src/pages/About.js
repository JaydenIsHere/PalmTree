import React,{useRef} from 'react'
import gsap from "gsap";
import { useIntersection } from "react-use";
import './about.css'
import team from '../images/team.jpg'
import { Link } from 'react-router-dom'
const About = () => {
    const sectionRef = useRef(null);
    const sectionRef2 = useRef(null);
    //All the ref to be observed
    const intersection = useIntersection(sectionRef,{
      root:null,//just browsesr view port
    
      rootMargin:"0px", //deternain when our animation should start or end 0px is the end ,if 400px it start at the middle
    
      threshold:0.1//1 equals to when we reach the 100% view port of the div if we set to 0.5 means when reach 50% it trigger the animation 
    })
    const intersection2 = useIntersection(sectionRef2,{
      root:null,
    
      rootMargin:"0px", 
    
      threshold:0.2
    })
    //Animation for fading in 
    const fadeIn = element =>{
      gsap.to(element,{
        duration:1,
        opacity:1,
        y:-80,
        ease:'power4.out',
        stagger:{
          amount:0.5
        }
      });
    };
    
    //Animation for fading out
    const fadeOut = element =>{
      gsap.to(element,{
        duration:1,
        opacity:0,
        y:-60,
        ease:'power4.out'
      });
    };
          //Animation for fading in 
const fadeIn2 = element =>{
  gsap.to(element,{
    duration:1,
    opacity:1,
    y:-60,
    ease:'power4.out',
    stagger:{
      amount:1
    }
  });
};

//Animation for fading out
const fadeOut2 = element =>{
  gsap.to(element,{
    duration:1,
    opacity:0,
    y:-20,
    ease:'power4.out'
  });
};


    //checking to see weht the viewport is visible to the user
    intersection && intersection.intersectionRatio < 0.1    ? fadeOut('.About-fadeIn'):fadeIn('.About-fadeIn')
    intersection2 && intersection2.intersectionRatio < 0.2  ? fadeOut2('.About-fadeIn2'):fadeIn2('.About-fadeIn2')
    return (
        <>
        <section>
            <div className="about-head">
                <div className="conatiner grid grid-1">
                    <h1 className='lg text-center text-light'>About Us</h1>
                </div>
            </div>
      
            <div ref={sectionRef}className="about-sub-head bg-db py-5">
                <div className="conatiner grid grid-1 About-fadeIn" >
                    <p className='sm text-center'>
                    a convenience store in Singapore that is often located under a HDB block, widely found in 1980s and ’90s

Palm Tree is a speakeasy bar that infuses elements of the traditional Mama Diam that is known and well loved by many Singaporeans. 

Embark on a nostalgic journey rediscovering Singapore's cultural heritage with a menu that puts a modern twist on iconic local favourites, including Palm tree's signature Crab Kueh Pie Tee, Drunken Chicken Roulade, Butter Boxing Chicken as well as their unique local cocktails flavours like Pandan, Sour Plum and Halia. 

Complete with an old-school inspired outdoor area featuring HDB stools, vintage knick-knacks and traditional snacks, dining at Palm Tree’s rustic charm is sure to zip you back in time
                    </p>
                </div>

                <div ref={sectionRef2} className="about-team py-5 text-center">
                <div className="container grid grid-1">
                <img src={team} alt="" className='About-fadeIn2'/>
 <div className="LeadStaff grid grid-1 About-fadeIn2">

<h4>LEAD STAFF </h4>
<div className='nameAndTile'>
<p>Sebastian</p> 
 <p>Owner /Chef</p>    
</div>

<div className='nameAndTile'>
<p>Johnathan </p> 
 <p>General Manager</p>    
</div>

<div className='nameAndTile'>
<p>Norlyana</p> 
 <p>Assistant Floor Manager</p>    
</div>

<div className='nameAndTile'>
<p>Riot </p> 
 <p>Bar Manager</p>    
</div>
                                                         
</div>          
             
<Link to ='#'className='btn btn-dg'> Dine With Us</Link>
                </div>

            </div>
            </div>
            
           
        </section>
        </>
    )
}


export default About
