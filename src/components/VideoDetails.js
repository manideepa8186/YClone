import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom';
import { FetchData } from '../helper/api';
import { abbreviateNumber } from "js-abbreviation-number";
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { VideoDataItem } from '../helper/constants';
import RecommendVideoDetails from './RecommendVideoDetails';


function VideoDetails() {
  const { id } = useParams();
  const [VideoData, setVideoData] = useState();

  useEffect(() => {
    FetchData('video/details/?id=' + id)
      .then((data) => {
        console.log(data)
        setVideoData(data);
      })

    //setVideoData(VideoDataItem)
  }, [])



  return (
    <Box className='rcard'>
      <Box className ='video' sx={{  marginTop: '2%'}}>
        <Box sx={{ display: 'flex', height: '76vh' }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`} //change as id
            controls
            width="100%"
            height="100%"
            style={{ backgroundColor: "#000000" }}
            playing={true}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography sx={{ fontSize: '1rem', fontWeight: '550' }}>{VideoData?.title}</Typography>
        </Box>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex' }}>
            <Box>
              <img src={VideoData?.author.avatar[0]?.url} style={{ borderRadius: '23px', height: '35px', marginRight: '1%', marginTop: '0.9rem' }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
              <Typography
                sx={{
                  color: 'black',
                  fontSize: '16px',
                  mt: 1,
                  fontWeight: 'bold',
                  display: '-webkit-box',
                  WebkitLineClamp: '2',
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {VideoData?.author.title}
              </Typography>
              <span sx={{ fontSize: '15px', display: 'block', color: 'black', opacity: '0.5' }}>{VideoData?.author?.stats?.subscribersText}</span>
            </Box>
          </Box>

          <Box className="Stats" sx={{ display: 'flex', mr: 2 }}>
            <Box sx={{ mr: 2, borderRadius: '10px', border: '1px solid #E5E5E5', backgroundColor: '#E5E5E5', width: '75px', height: '34px', padding: '1px', color: 'black', opacity: '0.8' }}>
              <ThumbUpOffAltIcon sx={{ position: 'relative', top: '7px', color: 'black' }} />
              <span >{abbreviateNumber(VideoData?.stats.likes)}</span>
            </Box>
            <Box sx={{ borderRadius: '10px', border: '1px solid #E5E5E5', backgroundColor: '#E5E5E5', width: '80px', height: '34px', padding: '1px', opacity: '0.8' }}>
              <ThumbDownOffAltIcon sx={{ position: 'relative', top: '7px' }} />
              <span>{(0)}</span>
            </Box>
          </Box>
        </Box>
        <Box className='description' sx={{ wordBreak: 'break-word', mt: 2, ml: 4 }} >
          {abbreviateNumber(VideoData?.stats.views)}  Views
        </Box>
      </Box>
      <Box sx={{marginTop: '2%'}}>
             <RecommendVideoDetails id={id}/>
      </Box>

    </Box>
  )
}

export default VideoDetails