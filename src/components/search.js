import React ,{ useEffect ,useMemo,useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import {FetchData} from "../helper/api"
import { data } from '../helper/constants';
import { abbreviateNumber } from "js-abbreviation-number";
import useFetchData from '../hooks/useFetchData';


function Search(props) {
    const { query } = useParams();
    // const [SearchData,setSearchData]= useState([]);

    // useMemo(() => {
    //     // FetchData('search/?q='+query)
    //     // .then((data)=>{
    //     //     console.log(data)
    //     //     setSearchData(data.contents)
    //     // })
    //     console.log(data)
    //     setSearchData(data);
    // },[])

    const SearchData = useFetchData(query);

  return (
    <Box sx={{marginLeft: '3.5%', marginTop: '2%'}}>
        { SearchData?.map((item)=>{
            return(
                <>
                {item?.type=='video' && <SearchItem key={item} video={item?.video} />}
                </>
            )
        })
        }
    </Box>
  )
}

const SearchItem = ({video})=>{

    return(
        <Link to={'/video/'+video?.videoId}>
        <Box sx={{display:'flex',justifyContent: 'start',width:'80%',marginBottom:'2%' ,textDecoration:'none' }}>
            <Box sx={{ display:'flex' , flexDirection:'column'}}>
                <img src={video?.thumbnails[0]?.url} height='180px'  width='300px' style={{borderRadius:'15px'}}/>
            </Box>
            <Box sx={{marginLeft:'3%'}}>
               <Box sx={{justifyContent: 'center'}}>
                    <Typography
                        sx={{
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitLineClamp: '2',
                            WebkitBoxOrient: 'vertical',
                            Width:video?.thumbnails[0]?.width, 
                            textOverflow: 'ellipsis',
                            textDecoration:'none',
                            color:'black',
                            fontSize: '17px',
                            fontWeight:'500',
                            
                        }}>
                    {video?.title }  
                    </Typography>
                    <Typography
                        sx={{
                            marginTop:'2%',
                            fontSize: '13px'
                            ,color:'black'
                        }}>
                        {video?.descriptionSnippet}
                    </Typography>
               </Box>
               <Box sx={{display:'flex',textDecoration:'none',color:'#464646',marginTop:'2.5%',}}>
                    <Box>
                        <img src={video?.author.avatar[0]?.url} style={{borderRadius:'23px',height:'35px'}}/> 
                    </Box>
                    <Box sx={{marginLeft:'2%',}}>
                        <span style={{fontSize:'15px',display:'block',marginBottom:'2px'}}>{video?.author.title}</span>
                        {video?.stats.views && <span style={{fontSize:'15px',display:'inline-block'}}>{abbreviateNumber(video?.stats.views)} views</span>}
                        {video?.publishedTimeText && <span style={{marginLeft:'10px',fontSize:'15px',whiteSpace:'wrap'}}>&#183; {video?.publishedTimeText}</span>}
                    </Box> 
                </Box>
            </Box>
        </Box>
        </Link>
    )
}

export default Search
