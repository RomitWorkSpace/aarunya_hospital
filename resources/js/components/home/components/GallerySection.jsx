import React from 'react'

import Gall from 'imgPath/gallery.jpg'

function GallerySection() {
    return (
        <>
        <div className="container bg-light-gray py-20 px-4">
            <h2 className="clr-purple text-xl md:text-3xl font-semibold text-center">OUR GALLERY</h2>

            <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:px-20 lg:grid-cols-3 gap-8">
                <div className="gallery">
                    <img src={ Gall } alt="gallery" width="100%" />
                </div>
                <div className="gallery">
                    <img src={ Gall } alt="gallery" width="100%" />
                </div>
                <div className="gallery">
                    <img src={ Gall } alt="gallery" width="100%" />
                </div>
            </div>
        </div>
        </>
    )
}

export default GallerySection