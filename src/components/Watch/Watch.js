import React, { Component } from 'react'
import './Watch.scss'
import {Video} from '../Video/Video'
import {VideoPreview} from '../VideoPreview/VideoPreview'
import {RelatedVideos} from '../RelatedVideos/RelatedVideos'
import {NextUpVideo} from '../RelatedVideos/NextUpVideo/NextUpVideo'
import {VideoMetadata} from '../VideoMetadata/VideoMetadata'
import {VideoInfoBox} from '../VideoInfoBox/VideoInfoBox'

export class Watch extends Component {
  render() {
    return (
      <div className='watch-grid'>
        {/* <Video id='-7fuHEEmEjs'/>
        <VideoPreview horizontal={true}/> */}
        {/* <NextUpVideo /> */}
        <Video className='video' id='-7fuHEEmEjs' />
        <VideoMetadata  className='moovee' viewCount={1000} style={{width: '100%', height: '100px', background: '#F91112'}}/>
        <VideoInfoBox />
        <div className='comments' style={{width: '100%', height: '100px', background: '#9013FE'}}>comments</div>
        <RelatedVideos className='relatedVideos'/>

      </div>
    )
  }
}
