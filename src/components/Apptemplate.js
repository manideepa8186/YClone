import { Box ,  useMediaQuery, useTheme,} from '@mui/material'
import React, {Suspense, useState} from 'react'
import LeftNav from "./LeftNav"
import UpperNav from './UpperNav'
import "../App.css"

function Apptemplate({component:RawComponet,isMenuOpen,toggleMenu,...args}) {

  const [Category, setCategory] = useState('New')
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const handleCategoryChange = (Category) => {
    console.log("Category", Category);
    setCategory(Category)
  }

  return (
    <div className='app-template' style={{display:'flex',width:'100%'}}>
      <Box sx={{width:!isMenuOpen?'2%':'10%'}}>
      <LeftNav  isMenuOpen={isMenuOpen && isDesktop} Category={Category} handleCategoryChange={handleCategoryChange}/>
      </Box>
      <Box sx={{width:'90%', marginTop:'1%'}}>
       <UpperNav  handleCategoryChange={handleCategoryChange}/> 
       <Suspense  fallback={<div>Loading....</div>}> <RawComponet Category={Category} {...args}/> </Suspense>
      </Box>
    </div>
  )
}

export default Apptemplate
