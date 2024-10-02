import React from 'react'

import Blog1 from 'imgPath/service2.png'
import ButtonRounded from '../common/ButtonRounded'
import { Link } from 'react-router-dom'

function BlogCard() {
    return (
        <>
        <div className="w-full shadow-md rounded-lg">
            <img src={ Blog1 } alt="Blog" width="100%" className='rounded-lg' />
            <div className="p-4">
                <h4 className="clr-purple text-xl font-semibold">Specialized care for your special jurney</h4>
                <div className="text-justify mt-4">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industry's standard dummy text ever since the.........</p>
                </div>
                <div className="text-center pt-4">
                    <Link to="/blog-detail">
                        <ButtonRounded name="Read More" />
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogCard
