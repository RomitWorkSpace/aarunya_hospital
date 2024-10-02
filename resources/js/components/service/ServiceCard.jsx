import React from 'react'
import { Link } from 'react-router-dom'

function ServiceCard({ name, servicePhoto }) {
    return (
        <>
        <Link to="/service-detail">
        <div className="w-full relative">
            <img src={ servicePhoto } alt="service" className='rounded-lg' width="100%" />
            <div className="py-5 text-center absolute bottom-0 left-0 right-0 text-black" style={{backgroundColor:'#b8d3e361'}}>
             {name}
            </div>
        </div>
        </Link>
        </>
    )
}

export default ServiceCard
