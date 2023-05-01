import React, {useState , useEffect} from 'react'
import { Box } from '@mui/system'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {TrendingWords} from "../helper/constants"

function UpperNav({handleCategoryChange}) {
    const [Trendings,setTrendings] = useState('All')
    const [TrendingWordsIndex,setTrendingWordsIndex] = useState(0)

    const [windowSize, setWindowSize] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleWindowResize = () => {
        setWindowSize(window.innerWidth);
      };
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    });
    const Width = Math.round(windowSize * 0.0052)
    console.log(Width)
    const ShowList = TrendingWords.slice(TrendingWordsIndex,TrendingWordsIndex+Width)

    const UpdateTrendingWordsIndex = (v) =>{
      console.log(v)
      if(v>=0 && v< TrendingWords.length){
      setTrendingWordsIndex(v)
      setTrendings(TrendingWords[v])
      handleCategoryChange(TrendingWords[v])
      }
    }
    const UpdateTrending = (text) =>{
      setTrendings(text)
      const Index = TrendingWords.indexOf(text)
      setTrendingWordsIndex(Index)
      handleCategoryChange(text)
    }
    // console.log(TrendingWordsList)
  
  return (
    <Box sx={{marginLeft:'8%',display:'flex',overflow:'hidden'}}>
        <ChevronLeftIcon sx={{mt:0.5,fontSize: '30px'}} onClick={()=>UpdateTrendingWordsIndex(TrendingWordsIndex-1)}/>
     { ShowList.map((item)=>(
        <UpperNavItem key={item} text={item} SelectedUpperNavValue={Trendings} handleCategoryChange={UpdateTrending} />
        ))
     }
     <ChevronRightIcon sx={{mt:0.5,marginLeft:'2%',fontSize: '30px'}} onClick={()=>UpdateTrendingWordsIndex(TrendingWordsIndex+1)}/>
    </Box>
  )
}


function UpperNavItem({text,SelectedUpperNavValue,handleCategoryChange}){


    return(

        <Box  
    sx={{ display: 'flex' ,marginBottom:'10px' ,marginLeft:'18px', padding:'5px',color: SelectedUpperNavValue===text  ?'white':'',
      width: 'fit-content',
      border:'1px solid #E5E5E5',
      borderRadius:'10px',
      backgroundColor:SelectedUpperNavValue!==text  ? '#E5E5E5' :'black',
  }} onClick={()=>handleCategoryChange(text)}>
      {
            <span style={{ padding:'2px', marginTop:'3px',whiteSpace: 'nowrap' }}>{text}</span>
      }
    </Box>
    )


}

export default UpperNav


