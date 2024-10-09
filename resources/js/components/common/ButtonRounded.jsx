import React from 'react'

function ButtonRounded({name}) {
    return (
        <>
        {/* <div className="bg-pink text-white inline-block cursor-pointer py-2 px-4 rounded-full text-sm">
            {name}
        </div> */}
        <button class="rounded-full clr-pink hover:before:bg-redborder-pink-500 
        relative h-[40px] w-40 overflow-hidden border border-pink-500 
        bg-white px-3 text-pink-500 shadow-xl transition-all 
        before:absolute before:bottom-0 before:left-0 before:top-0 
        before:z-0 before:h-full before:w-0 before:bg-pink-500 before:transition-all 
        before:duration-500 hover:text-white hover:shadow-red-100 hover:before:left-0 
        hover:before:w-full"><span class="relative z-10">{name}</span></button>
        </>
    )
}

export default ButtonRounded
