import { Box } from '@mui/system'
import React, { useEffect, useState, useMemo } from 'react'
import { FetchData } from '../helper/api'
import VideoCard from './VideoCard'
import {data} from '../helper/constants'
import useFetchData from '../hooks/useFetchData'


function AllVideos({ Category }) {
    console.log(Category)
    // const [VideoData, setVideoData] = useState([])

    // useEffect(() => {

    //     // FetchData('search/?q=' + Category)
    //     //     .then((data) => {
    //     //         console.log(data.contents, Category);
    //     //         setVideoData(data.contents)
    //     //     })
    //     setVideoData(data)
    // }, [Category])
    const VideoData = useFetchData(Category);
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap',marginLeft:'5%'}} id='videos'>
            {VideoData.length > 0 && VideoData?.map((data, index) => {
                if (data.video) {
                    return (
                        <VideoCard key={index} video={data?.video} />
                    )
                }
            }
            )
            }
        </Box>
    )
}

export default AllVideos