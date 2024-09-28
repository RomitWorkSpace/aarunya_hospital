import React from 'react'

function PageBanner({Banner, MobileBanner}) {
    const isMobileSlider = window.matchMedia('(max-width: 768px)').matches;
    if (isMobileSlider){
        return ( 
            <>
            <div className="container relative">
                <img src={ MobileBanner } alt="banner" width="100%" />
            </div>
            </>
        );
    }else {
        return ( 
            <>
            <div className="container relative">
                <img src={ Banner } alt="banner" width="100%" />
            </div>
            </>
        );
    }
}

export default PageBanner
