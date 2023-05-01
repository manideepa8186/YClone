import axios from "axios";

const API_URL= process.env.REACT_APP_API_URL

const options = {
    params: { hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': 'd86ae1ec5fmsh63ded84fabfb9ccp1a7d0djsn086fef4db9ae',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };


export const FetchData = async (url) => {

    const response = await axios.get(`${API_URL}/${url}`,options);
    return response.data;
}