import React from 'react'

function ExpertiseSection() {
    return (
        <>
        <div className="container py-20 px-4 bg-light-pink">
            <h2 className="text-xl clr-purple md:text-3xl text-center font-semibold">Area of Expertise</h2>

            <div className="md:w-1/2 mx-auto pt-10">
                <div className="flex flex-wrap">
                    <div className="md:w-1/2">
                        <h4 className="clr-purple font-semibold text-lg mb-4">Obstetrician and Gynaecologist</h4>
                        <ul>
                            <li>-High risk obstetrics</li>
                            <li>-Gynae Endoscopy, Hysteroscopy</li> 
                            <li>-Robotic assisted surgery</li> 
                            <li>-Colposcopy</li> 
                            <li>-Gynae Endocrinology</li> 
                            <li>-Gynae Ultra-sonology</li> 
                            <li>-Adolescent Gynaecology</li> 
                            <li>-Menopausal Gynaecology</li> 
                            <li>-Menstrual Disorders and Hygiene management</li> 
                            <li>-Gynae oncology</li>
                        </ul>
                    </div>
                    <div className="md:w-1/2">
                        <h4 className="clr-purple font-semibold text-lg mb-4">Neurosciences</h4>
                        <ul>
                            <li>-headache-Backache</li> 
                            <li>-ellipse-neurological problems</li>
                            <li>-spinal disk</li>
                            <li>-spinal injury</li>
                            <li>-spinal tumors</li>
                            <li>-brain trauma</li>
                            <li>-brain tumors</li>
                            <li>-brain hemorrhage</li>
                            <li>-Parkinson</li>
                            <li>-Neuralgia </li>
                            <li>-Myalgia</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ExpertiseSection
