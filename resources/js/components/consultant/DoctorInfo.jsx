import React from 'react'

function DoctorInfo({name, specialist, profile, photo}) {
    return (
        <>
        <div className="container px-4 py-14">
            <div className="lg:w-3/5 mx-auto shadow-lg">
                <div className="flex flex-wrap items-center">
                    <div className="md:w-3/5 p-4">
                        <h2 className="clr-blue font-semibold text-3xl">{name}</h2>
                        <h4 className="clr-blue font-semibold text-lg">{specialist}</h4>
                        <div className="py-4 clr-purple">
                            {profile}
                        </div>
                    </div>
                    <div className="md:w-2/5">
                        <img src={ photo } alt="doctor" className="rounded-md" width="100%" />
                    </div>
                </div>
            </div>
            <div className="lg:w-3/5 mx-auto pt-14">
                <div className="inline-block clr-blue font-semibold text-center px-12 py-4 bg-gray-300">
                    <h2 className="text-2xl">Brief Profile</h2>
                </div>
                <div className="doctor-info text-justify pt-5">
                    <p><b>Lorem Ipsum is simply dummy text of the printing andtypesetting industry.</b></p><br/>
                     <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                     <br/>
                     <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default DoctorInfo
