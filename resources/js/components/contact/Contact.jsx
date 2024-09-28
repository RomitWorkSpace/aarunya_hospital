import React from 'react'
import PageBanner from '../common/PageBanner'

import DkBanner from 'imgPath/banners/dk-contact.jpg'
import MbBanner from 'imgPath/banners/mb-contact.jpg'
import ContactSection from '../home/components/ContactSection'
import InfoSection from '../home/components/InfoSection'

function Contact() {
    return (
        <>
        <PageBanner Banner = {DkBanner} MobileBanner = {MbBanner} />
        <ContactSection />
        <InfoSection />
        </>
    )
}

export default Contact
