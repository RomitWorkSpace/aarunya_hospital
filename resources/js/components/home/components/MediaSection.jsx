import React from 'react'

import MediaBG from 'imgPath/media-bg.jpg'
import Thumbnail from './Thumbnail'
import Video1 from 'imgPath/thumbnail/1.jpg'
import Video2 from 'imgPath/thumbnail/2.jpg'
import Video3 from 'imgPath/thumbnail/3.jpg'

function MediaSection() {
    return (
        <>
        <div className="container py-20 px-4" style={{backgroundImage:`url(${MediaBG})`}}>
            <h2 className="clr-purple text-2xl md:text-4xl font-semibold text-center">Aarunya Updates</h2>
            <h4 className="clr-purple text-lg text-center">We Have Some Good News</h4>

            <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:px-20 lg:grid-cols-3 gap-8">
                <div className="media">
                    <Thumbnail ChannelVideo = {Video1} />
                </div>
                <div className="media">
                    <Thumbnail ChannelVideo = {Video2} />
                </div>
                <div className="media">
                    <Thumbnail ChannelVideo = {Video3} />
                </div>
            </div>
        </div>
        </>
    )
}

export default MediaSection
