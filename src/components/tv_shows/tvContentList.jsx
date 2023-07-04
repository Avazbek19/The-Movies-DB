import React from 'react'
import TvshowsContent from './tvshowsContent'

export default function TvContentList(props) {
    // console.log(props);
  return (
    <div className='row'>
        <TvshowsContent tvList={props.tvList}/>
    </div>
  )
}
