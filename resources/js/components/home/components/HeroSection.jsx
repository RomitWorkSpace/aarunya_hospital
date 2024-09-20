import React from 'react'

import Hero from 'imgPath/image.jpg'

function HeroSection() {
    return (
        <>
        <div className="container">
            <img src={Hero} alt="Aarunya clinic" width="100%" />
        </div>
        <div className="container text-center px-3">
            <h1 className="clr-purple text-xl mt-10 font-semibold md:text-4xl">Welcome To Aarunya Clinic</h1>
            <p className="clr-purple md:text-lg">The Compassinate Health Care</p>
        </div>
        </>
    )
}

export default HeroSection
