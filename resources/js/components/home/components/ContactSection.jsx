import React from 'react'
import ContactForm from './ContactForm'

function ContactSection() {
    return (
        <>
        <div className="container py-20 px-4">
            <h2 className="clr-purple text-center text-3xl font-semibold">
                How Can We Help You?
            </h2>
            <h4 className="clr-purple text-center text-lg">Services At One Glance</h4>

            <div className="md:w-3/5 mx-auto">
                <div className="flex flex-wrap">
                    <div className="md:w-1/2 contact-form">
                        <ContactForm />
                    </div>
                    <div className="md:w-1/2"></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ContactSection
