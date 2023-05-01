import { Box } from '@mui/material'
import React,{ useEffect, useState} from 'react'
import RecommendVideoCard from './RecommendVideoCard'
import { FetchData } from '../helper/api';
import { VideoDataItem } from '../helper/constants';


function RecommendVideoDetails({id}) {
    const [VideoData, setVideoData] = useState();

  useEffect(() => {

    FetchData('video/related-contents/?id=' + id)
      .then((data) => {
        console.log(data)
        setVideoData(data.contents);
      })

    //setVideoData([{type:'video', video:VideoDataItem}])
  }, [])

  return (
    <Box>
        
        {
            VideoData?.map((video)=>(
                <>
                 {video?.type=='video' && <RecommendVideoCard video={video.video}/>}
                </>
            ))
        }
    </Box>
  )
}

export default RecommendVideoDetails
