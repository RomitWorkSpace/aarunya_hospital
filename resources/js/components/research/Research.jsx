import React from 'react'

import PageBanner from '../common/PageBanner'

import DkBanner from 'imgPath/banners/dk-research.jpg'
import MbBanner from 'imgPath/banners/mb-research.jpg'
import ReseachArea from './ReseachArea'

function Research() {
    return (
        <>
        <PageBanner Banner = {DkBanner} MobileBanner={MbBanner} />
        <ReseachArea />
        </>
    )
}

export default Research
