import React, { useEffect } from 'react'

import NewSlider1 from 'imgPath/sliders/1.png'
import NewSlider2 from 'imgPath/sliders/2.png'
import NewSlider3 from 'imgPath/sliders/3.png'

import { Link } from 'react-router-dom';

export function FullSlider1() {

    return (
        <>
        <div className="container p-20 bg-gray-100">
            <div className="w-full">
                <div className="flex items-center">
                    <div className="w-1/2">
                        <h2 className="text-5xl clr-blue tracking-in-expand-fwd"><b>Embark</b> on a<br/>
                        Digital Transformation<br/>Journey</h2>
                        <div className="mt-5">
                        <p className="text-lg">Transform customer experiences by modernizing and integrating mainstream IT for a successful digital future with us.</p>
                        </div>
                        <div className="mt-5 shadow-md bg-pink text-white inline-block cursor-pointer py-3 px-4 rounded-full text-sm">
                            Talk to a Consultant
                        </div>                  
                    </div>
                    <div className="w-1/2">
                        <img src={ NewSlider1 } alt="slider" width="100%" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export function FullSlider2() {

    return (
        <>
        <div className="container p-20 bg-gray-100">
            <div className="w-full">
                <div className="flex items-center">
                    <div className="w-1/2">
                    <h2 className="text-5xl clr-blue tracking-in-expand-fwd"><b>Embark</b> on a<br/>
                        Digital Transformation<br/>Journey</h2>
                        <div className="mt-5">
                        <p className="text-lg">Transform customer experiences by modernizing and integrating mainstream IT for a successful digital future with us.</p>
                        </div>
                        <div className="mt-5 shadow-md bg-pink text-white inline-block cursor-pointer py-3 px-4 rounded-full text-sm">
                            Talk to a Consultant
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img src={ NewSlider2 } alt="slider" width="100%" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export function FullSlider3() {

    return (
        <>
        <div className="container p-20 bg-gray-100">
            <div className="w-full">
                <div className="flex items-center">
                    <div className="w-1/2">
                    <h2 className="text-5xl clr-blue tracking-in-expand-fwd"><b>Embark</b> on a<br/>
                        Digital Transformation<br/>Journey</h2>
                        <div className="mt-5">
                        <p className="text-lg">Transform customer experiences by modernizing and integrating mainstream IT for a successful digital future with us.</p>
                        </div>
                        <div className="mt-5 shadow-md bg-pink text-white inline-block cursor-pointer py-3 px-4 rounded-full text-sm">
                            Talk to a Consultant
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img src={ NewSlider3 } alt="slider" width="100%" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}



export function ShortSlider1() {

    return (
        <>
        <div className="container py-12 px-5 bg-gray-100">
            <div className="w-full">
                    <div className="text-center">
                        <h2 className="text-3xl clr-blue font-semibold tracking-in-expand-fwd">Specialized Care<br/>for Your<br/>Special Journey</h2>
                    </div>
                    <div className="">
                        <img src={ NewSlider1 } alt="slider" width="100%" />
                    </div>
            </div>
        </div>
        </>
    )
}


export function ShortSlider2() {

    return (
        <>
        <div className="container py-12 px-5  bg-pink-100">
            <div className="w-full">
                    <div className="text-center">
                        <h2 className="text-3xl clr-blue font-semibold tracking-in-expand-fwd">Specialized Care<br/>for Your<br/>Special Journey</h2>
                    </div>
                    <div className="">
                        <img src={ NewSlider2 } alt="slider" width="100%" />
                    </div>
            </div>
        </div>
        </>
    )
}


export function ShortSlider3() {

    return (
        <>
        <div className="container py-12 px-5  bg-sky-100">
            <div className="w-full">
                    <div className="text-center">
                        <h2 className="text-3xl clr-blue font-semibold tracking-in-expand-fwd">Specialized Care<br/>for Your<br/>Special Journey</h2>
                    </div>
                    <div className="">
                        <img src={ NewSlider3 } alt="slider" width="100%" />
                    </div>
            </div>
        </div>
        </>
    )
}
