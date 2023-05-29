import axios from "axios";

const API_KEY=process.env.REACT_APP_API_KEY

const API_URL='https://youtube138.p.rapidapi.com'

const options = {
    params: { hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };


export const FetchData = async (url) => {

    const response = await axios.get(`${API_URL}/${url}`,options);
    return response.data;
}