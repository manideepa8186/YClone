import React, {useState} from 'react'
import { styled } from '@mui/system';
import { categories, Others } from '../helper/constants';
import { Box, Divider } from '@mui/material';

function LeftNav({ width, isMenuOpen, Category, handleCategoryChange }) {
  
  return (
    <Box sx={{ width: width, marginTop:'20px'}}>
        <Box >
          {categories.map((item, index) => (
            <NavItem key={index} Icon={item.Icon} text={item.text} isMenuOpen={isMenuOpen} Category={Category} handleCategoryChange={handleCategoryChange} width={width}/>
          ))}
        </Box>
        {isMenuOpen && <Divider sx={{width:'160px',marginBottom:'20px'}}/> }
        <Box>
          {Others.map((item, index) => (
            <NavItem key={index} Icon={item.Icon} text={item.text} isMenuOpen={isMenuOpen}  width={width}/>
          ))}
        </Box>
    </Box>
  )
}


const NavItem = ({ Icon, text, isMenuOpen ,Category, handleCategoryChange , width}) => {

  const IconButton = styled('div')`
    margin-right: 3%;
    
  `
  const styles={
    activenav:{
      width: Category===text || (text==='Home' && Category==='New')? isMenuOpen ?'180px':'25px':'',
      borderRadius:Category===text || (text==='Home' && Category==='New')?'10px':'',
      backgroundColor:Category===text || (text==='Home' && Category==='New')?'#E5E5E5':''
    }
  }
  
  return (
    <Box style={styles.activenav} 
    sx={{ display: 'flex' ,marginBottom:'10px' ,marginLeft:'18px', padding:'5px',fontWeight: Category===text || (text==='Home' && Category==='New') ?'bold':'normal',
    '&:hover':{
      width: isMenuOpen ? '180px' :'25px',
      border:'1px solid #E5E5E5',
      borderRadius:'10px',
      backgroundColor:'#E5E5E5',
    }
  }} onClick={()=>handleCategoryChange && handleCategoryChange(text)}>
      {
        isMenuOpen ?
          <>
            <Icon />
            <span style={{ marginLeft: '15px' , marginTop:'3px',whiteSpace: 'nowrap' }}>{text}</span>
          </>
          :
          <IconButton><Icon /></IconButton>
      }
    </Box>
  )
}



export default LeftNav
