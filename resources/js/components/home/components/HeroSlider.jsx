import React from 'react'

import MobileSlider from './MobileSlider.jsx';
import DesktopSlider from './DesktopSlider.jsx';

export default function HeroSlider(){
    const isMobileSlider = window.matchMedia('(max-width: 768px)').matches;
    if (isMobileSlider){
        return ( <MobileSlider /> );
    }else {
        return ( <DesktopSlider /> );
    }
}