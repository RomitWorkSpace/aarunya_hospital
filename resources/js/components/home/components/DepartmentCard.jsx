import React from 'react'

import Gyno from 'imgPath/gyno.jpg'
import DepartmentLabel from './DepartmentLabel'
import ButtonRounded from '../../common/ButtonRounded'

function DepartmentCard() {
    return (
        <>
        <div className="md:w-1/3 px-4 mb-4">
            <div className="department-card">
                <img src={ Gyno } alt="department" width="100%" className='rounded-md' />
                <div className="px-4 py-6 text-center shadow-md bg-gray">
                    <DepartmentLabel />
                    <div className="py-4 text-justify">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industry's standard dummy text ever since the.........</p>
                    </div>
                    <ButtonRounded name="FIND OUT MORE" />
                </div>
            </div>
        </div>
        </>
    )
}

export default DepartmentCard
