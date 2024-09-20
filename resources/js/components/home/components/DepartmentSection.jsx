import React from 'react'
import DepartmentCard from './DepartmentCard'

function DepartmentSection() {
    return (
        <>
        <div className="container text-center h-64 mt-10 bg-department pt-14">
            <h2 className="text-xl text-white font-semibold md:text-2xl">OUR DEPARTMENT</h2>
        </div>
        <div className="container relative">
        <div className="flex justify-around flex-wrap relative top-[-95px]">
            <DepartmentCard />
            <DepartmentCard />
            <DepartmentCard />
        </div>
        </div>
        </>
    )
}

export default DepartmentSection
