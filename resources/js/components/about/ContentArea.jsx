import React from 'react'

import AboutImg from 'imgPath/about-img.png'
import Medical from 'imgPath/medical.png'
import Patient from 'imgPath/patient.png'
import Specialist from 'imgPath/specialist.png'

function ContentArea() {
    return (
        <>
        <div className="container py-10 px-4 lg:px-20">
            <h2 className="text-center clr-purple text-xl lg:text-3xl font-semibold">Know About Us</h2>
            <div className="mt-10">
                <div className="flex flex-wrap">
                    <div className="md:w-3/5 text-justify lg:pr-20 pb-10">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                    <div className="md:w-2/5 text-center">
                        <img src={ AboutImg } alt="about" className='rounded' width="100%" />
                        <div className="bg-pink text-white inline-block py-2 mt-5 px-4 rounded-lg text-sm cursor-pointer">Book Appointment</div>
                    </div>
                </div>
            </div>
            <div className="p-4 shadow-md">
                <div className="flex">
                    <div className="w-1/2 md:w-2/5 text-center">
                        <img src={ Medical } alt="icon" className='mx-auto' width="60" />
                        <h4 className="text-md md:text-lg clr-purple font-semibold">Years of Experience</h4>
                    </div>
                    <div className="w-1/2 md:w-2/5 text-center">
                        <img src={ Patient } alt="icon" className='mx-auto' width="60" />
                        <h4 className="text-md md:text-lg clr-purple font-semibold">Happy Patients</h4>
                    </div>
                    <div className="w-1/2 md:w-2/5 text-center hidden md:block">
                        <img src={ Specialist } alt="icon" className='mx-auto' width="60" />
                        <h4 className="md:text-lg clr-purple font-semibold">Medical Specialists</h4>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ContentArea
