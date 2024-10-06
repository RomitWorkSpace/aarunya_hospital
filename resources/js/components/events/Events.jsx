import React from 'react'
import PageBanner from '../common/PageBanner'

import DkBanner from 'imgPath/banners/dk-events.jpg'
import MbBanner from 'imgPath/banners/mb-events.jpg'
import EventArea from './EventArea'

function Events() {
    return (
        <>
        <PageBanner Banner = {DkBanner} MobileBanner={MbBanner} />
        <EventArea />
        </>
    )
}

export default Events
