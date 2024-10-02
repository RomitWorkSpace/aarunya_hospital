import React from 'react'
import PageBanner from '../common/PageBanner'

import DkBanner from 'imgPath/banners/dk-blog.jpg'
import MbBanner from 'imgPath/banners/mb-blogs.jpg'
import DetailArea from './DetailArea'

function BlogDetail() {
    return (
        <>
        <PageBanner Banner={ DkBanner } MobileBanner={ MbBanner } />
        <DetailArea />
        </>
    )
}

export default BlogDetail
