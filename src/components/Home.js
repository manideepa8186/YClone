import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FetchData } from '../helper/api'


function Home() {

  const [Category, setCategory] = useState('New')

  const Container = styled('div')`
    margin-top: 1%;
  `

  const fetchDatafromAPI = async() =>{
    const data = await FetchData('search/?q='+Category)
    console.log(data);
  }


  useEffect( ()=>{

    fetchDatafromAPI();
    
  },[])

  return (
    <Container>
      Home
    </Container>
  )
}

export default Home
