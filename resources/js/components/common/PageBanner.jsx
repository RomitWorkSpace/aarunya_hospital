import React from 'react'

function PageBanner({Banner}) {
    return (
        <>
        <div className="container relative">
            <img src={ Banner } alt="banner" width="100%" />
        </div>
        </>
    )
}

export default PageBanner
