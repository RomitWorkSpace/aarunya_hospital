import React from 'react'
import DkBanner from 'imgPath/banners/dk-blog.jpg'
import MbBanner from 'imgPath/banners/mb-blogs.jpg'
import BlogArea from './BlogArea'
import PageBanner from '../common/PageBanner'

function Blog() {
    return (
        <>
        <PageBanner Banner = { DkBanner } MobileBanner={MbBanner} />
        <BlogArea />
        </>
    )
}

export default Blog
