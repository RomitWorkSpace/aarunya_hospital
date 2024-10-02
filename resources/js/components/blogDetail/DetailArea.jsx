import React from 'react'

import BlogImg from 'imgPath/service2.png'

function DetailArea() {
    return (
        <>
        <div className="container px-4 py-14 md:px-20">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="md:w-3/5 md:pr-20 mb-5">
                        
                        <div className="">
                            <img src={ BlogImg } alt="Blog" width="100%" />
                        </div>
                        <h2 className="clr-purple text-3xl my-6 font-semibold">
                        Specialized care for your special jurney
                        </h2>
                        <div className="text-justify">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industry's standard dummy text ever since the</p><br/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industry's standard dummy text ever since the</p>
                        </div>
                    </div>
                    
                    <div className="md:w-2/5">
                    <hr className='md:hidden' />
                        <h2 className="clr-purple text-3xl my-4 font-semibold">Recent Posts</h2>
                        <div className="recent-post py-5">
                            <div className="flex items-center mb-5 shadow-md">
                                <div className="w-1/3">
                                    <img src={ BlogImg } alt="Blog" width="100%" />
                                </div>
                                <div className="w-2/3 p-4">
                                    <h4 className="text-xl">Specialized care for your special jurney</h4>
                                </div>
                            </div>
                            <div className="flex items-center mb-5 shadow-md">
                                <div className="w-1/3">
                                    <img src={ BlogImg } alt="Blog" width="100%" />
                                </div>
                                <div className="w-2/3 p-4">
                                    <h4 className="text-xl">Specialized care for your special jurney</h4>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DetailArea
