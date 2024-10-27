import React from 'react'
import PageBanner from '../common/PageBanner'
import DkBanner from 'imgPath/banners/dk-about.jpg'
import MbBanner from 'imgPath/banners/mb-about.jpg'
import ContentArea from './ContentArea'

function About() {
    return (
        <>
        <PageBanner Banner = {DkBanner} MobileBanner = {MbBanner} />
        <ContentArea />
        </>
    )
}

export default About
