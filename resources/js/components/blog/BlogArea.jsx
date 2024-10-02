import React from 'react'
import BlogCard from './BlogCard'

function BlogArea() {
    return (
        <>
        <div className="container py-10 px-4 lg:px-20">
            <h2 className="clr-purple text-2xl text-center font-semibold lg:text-3xl">Our Latest Blogs</h2>

            <div className="container py-10">
                <div className="flex flex-wrap">
                    <div className="md:w-1/3 mb-5 md:px-4">
                        <BlogCard />
                    </div>
                    <div className="md:w-1/3 mb-5 md:px-4">
                        <BlogCard />
                    </div>
                    <div className="md:w-1/3 mb-5 md:px-4">
                        <BlogCard />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogArea
