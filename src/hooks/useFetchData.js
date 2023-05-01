import React , {useState, useEffect} from 'react'
import { FetchData } from '../helper/api';
import {data} from '../helper/constants'

function useFetchData(query) {

    const [Data, setData] = useState([]);

    useEffect(() =>{

         FetchData('search/?q='+query)
        .then((data)=>{
            console.log(data)
            setData(data.contents)
        })
        // setData(data)

    },[query]);

    return Data

}
export default useFetchData
