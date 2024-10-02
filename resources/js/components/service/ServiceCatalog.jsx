import React from 'react'
import ServiceCard from './ServiceCard'

import Service1 from 'imgPath/gyno.jpg'
import Service2 from 'imgPath/service2.png'

function ServiceCatalog() {
    return (
        <>
        <div className="container py-10 lg:px-20">
            <h2 className="clr-purple text-3xl font-semibold">Area of Expertise</h2>
            <div className="service-bg">
                <div className="flex flex-wrap mt-10">
                <div className="md:w-1/3 p-4">
                    <ServiceCard name = "Adolescent Gynaecology" servicePhoto = {Service1} />
                </div>
                <div className="md:w-1/3 p-4">
                    <ServiceCard name = "Adolescent Gynaecology" servicePhoto = {Service2} />
                </div>
                <div className="md:w-1/3 p-4">
                    <ServiceCard name = "Adolescent Gynaecology" servicePhoto = {Service2} />
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ServiceCatalog
