import React from 'react'
import { VideoDataItem } from '../helper/constants'
import { Box, Typography } from '@mui/material';
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from 'react-router-dom';


function RecommendVideoCard({video}) {
    // video= VideoDataItem
  // console.log("Recvideo")
  return (
    <Link to={'/video/' + video?.videoId}>
    <Box sx={{display:'flex',mb:1}}>
      <Box sx={{ ml:0.5,mr:1}}>
      <img src={video?.thumbnails[0]?.url} height= '94px' width ='168px'/>
      </Box>
      <Box>
      <Typography
      className='rvideo-title'
            sx={{
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
                Width:video?.thumbnails[0]?.width, 
                maxWidth:'340px',
                textOverflow: 'ellipsis',
                textDecoration:'none',
                color:'black',
                fontSize: '15px'
            }}
            >
                {video?.title}  
    </Typography>
    <Box sx={{textDecoration:'none',color:'#464646',marginTop:'8px'}}>
        <span style={{marginLeft:'10%',fontSize:'12px',display:'block',marginBottom:'2px'}}>{video?.author.title}</span>
        {video.stats.views && <span style={{marginLeft:'10%',fontSize:'12px',display:'inline-block'}}>{abbreviateNumber(video?.stats.views)} views</span>}
        {video.publishedTimeText && <span style={{marginLeft:'5px',fontSize:'12px'}}>&#183; {video?.publishedTimeText}</span>}    
    </Box>
      </Box>
    </Box>
    </Link>
  )
}

export default RecommendVideoCard
