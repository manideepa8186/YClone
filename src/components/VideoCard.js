import { Box } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

function VideoCard({video}) {

    const ref= useRef()
    const [Isvisible,setVisible] = useState(false)

    
    useEffect(()=>{

        let observer = new IntersectionObserver(([entry])=>{
            if(entry.isIntersecting)
                setVisible(true)
        },{threshold:0.8});
        observer.observe(ref.current)

        return(()=>{
            observer.disconnect()
        })

    },[])


  return (  Isvisible?(
    <Link to={`/video/${video?.videoId}`} id='lazy-component' >
        <Box sx={{maxWidth : '382px'}}> 
            <Box sx={{
                margin: '18px',
                borderRadius:'15px'
                }
            }>
                <img src={video?.thumbnails[0]?.url} height='202px'  width='360px' style={{borderRadius:'15px'}}/>
                <Box sx={{mt:'12px'}} >
                    <Box sx={{display:'flex'}}>
                    <img src={video?.author.avatar[0]?.url} style={{borderRadius:'23px',height:'35px',marginRight:'1%',marginTop:'1%'}}/>
                    <Typography
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
                                fontSize: '16px'
                            }}
                            >
                              {video?.title}  
                    </Typography>
                    </Box>

                </Box>
                    <Box sx={{textDecoration:'none',color:'#464646',marginTop:'8px'}}>
                        <span style={{marginLeft:'10%',fontSize:'15px',display:'block',marginBottom:'2px'}}>{video.author.title}</span>
                        {video.stats.views && <span style={{marginLeft:'10%',fontSize:'15px',display:'inline-block'}}>{abbreviateNumber(video.stats.views)} views</span>}
                        {video.publishedTimeText && <span style={{marginLeft:'5px',fontSize:'15px'}}>&#183; {video.publishedTimeText}</span>}
                        
                    </Box>
            </Box>
    
    </Box>
    </Link>):<div className='shimmer-wrapper'><div ref={ref} className='shimmer' id={video?.videoId} style={{borderRadius:'15px'}}></div></div>
    )

}

export default VideoCard