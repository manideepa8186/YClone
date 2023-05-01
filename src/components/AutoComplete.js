import React ,{useState} from 'react'
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function AutoComplete() {

    const [SearchQuery,setSearchQuery] = useState();

    const UpdateSearch = (e) => {
        setSearchQuery(e.target.value);
    }

    const onSubmit = () => {
        window.location.href = '/search/'+SearchQuery
    }

  return (
    <Box sx={{
        marginLeft:'30%',
        display: 'flex'
    }}>
        <input  style={{ border:'1px solid #D8D8D8',borderRadius:'10px 0px 0px 10px',padding:'4%',width:'350px',height:'10px',
        outline:'none'
        }}
        type="text" onChange={UpdateSearch}
        onKeyDown={(e) => (e.key === 'Enter') ? onSubmit() : ''}
        />
        <SearchIcon sx={{fontSize:'25px', border:'1px solid #D8D8D8' ,borderRadius:'0px 20px 20px 0px',padding:'2%'}} onClick={()=>onSubmit()}/>
    </Box>
  )
}

export default AutoComplete
