import React from 'react'
import PageBanner from '../common/PageBanner'

import ContactBanner from 'imgPath/banners/contact.png'
import ContactSection from '../home/components/ContactSection'
import InfoSection from '../home/components/InfoSection'

function Contact() {
    return (
        <>
        <PageBanner Banner = {ContactBanner} />
        <ContactSection />
        <InfoSection />
        </>
    )
}

export default Contact
