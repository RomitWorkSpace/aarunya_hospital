import React from 'react'
import PageBanner from '../common/PageBanner'

import DkBanner from 'imgPath/banners/dk-consultant.jpg'
import MbBanner from 'imgPath/banners/mb-consultant.jpg'
import DoctorInfo from './DoctorInfo'

import Photo from 'imgPath/team/dr-aradhana.png'

function Consultant() {
    return (
        <>
        <PageBanner Banner = {DkBanner} MobileBanner={MbBanner} />
        <DoctorInfo name="Dr. Aradhana Singh" specialist="MBBS, MS, FICOG, FICMCH, FGL, PGDS" 
        profile="Senior Consultant, Obstetrician & Gynaecologist Fellowship in Gynae Laparoscopy (Keil, Germany) President Noida Obstetrics & Gynaecological Society ( 2021-2023)"
        photo={Photo} />
        </>
    )
}

export default Consultant
