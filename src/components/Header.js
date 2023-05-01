import React from 'react'
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Logo from "../logo.png"
import AutoComplete from './AutoComplete';


function Header({isMenuOpen,toggleMenu}) { 


  const Header = styled('div')`
      display: flex;
      margin: 10px 0px;
  `

   return (
    <Header >
     <IconButton onClick={toggleMenu }  style={{marginLeft:'20px',marginRight:'35px'}}>
      {isMenuOpen ? <MenuIcon />
        :
        <CloseIcon/>
      }

     </IconButton>
     <a href='/'>
     <img src={Logo} width='100px'/>
      </a>
      <AutoComplete/>
    </Header>
  )
}

export default Header
