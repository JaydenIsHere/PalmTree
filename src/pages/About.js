import React from 'react'
import './about.css'
import team from '../images/team.jpg'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <>
        <section>
            <div className="about-head">
                <div className="conatiner grid grid-1">
                    <h1 className='lg text-center text-light'>About Us</h1>
                </div>
            </div>
      
            <div className="about-sub-head bg-db py-5">
                <div className="conatiner grid grid-1">
                    <p className='sm text-center'>
                    a convenience store in Singapore that is often located under a HDB block, widely found in 1980s and ’90s

Palm Tree is a speakeasy bar that infuses elements of the traditional Mama Diam that is known and well loved by many Singaporeans. 

Embark on a nostalgic journey rediscovering Singapore's cultural heritage with a menu that puts a modern twist on iconic local favourites, including Palm tree's signature Crab Kueh Pie Tee, Drunken Chicken Roulade, Butter Boxing Chicken as well as their unique local cocktails flavours like Pandan, Sour Plum and Halia. 

Complete with an old-school inspired outdoor area featuring HDB stools, vintage knick-knacks and traditional snacks, dining at Palm Tree’s rustic charm is sure to zip you back in time
                    </p>
                </div>

                <div className="about-team py-5 text-center">
                <div className="container grid grid-1">
                <img src={team} alt="" />
 <div className="LeadStaff grid grid-1">

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
