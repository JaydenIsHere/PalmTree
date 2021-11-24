import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'
const Card = ({img , name ,price,path}) => {
    return (
        <>
        <Link to={path}>
        <div className="card bg-db">
        <div className='grid grid-1'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p className='text-dg'>${price}</p>
        </div>
        </div>
        </Link>
        </>
    )
}

export default Card
