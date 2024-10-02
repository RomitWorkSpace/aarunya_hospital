import React from 'react'
import PageBanner from '../common/PageBanner'
import DkBanner from 'imgPath/banners/dk-service.jpg'
import MbBanner from 'imgPath/banners/mb-service.jpg'
import ServiceCatalog from './ServiceCatalog'

function Service() {
    return (
        <>
        <PageBanner Banner = { DkBanner } MobileBanner = {MbBanner} />
        <ServiceCatalog />
        </>
    )
}

export default Service
