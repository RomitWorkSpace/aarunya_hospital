import React from 'react'

function ButtonRounded({name}) {
    return (
        <>
        <div className="bg-pink text-white inline-block cursor-pointer py-2 px-4 rounded-full text-sm">
            {name}
        </div>
        </>
    )
}

export default ButtonRounded
