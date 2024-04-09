import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';

export default function useGif(tag) {
  const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

  const [gif, setGif] = useState("");
  const [loading,setLoading]=useState('false')
  const randomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const tagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  async function fetchData(tag){
    setLoading(true)
    
    const {data}=await axios.get(tag?tagMemeurl:randomMemeurl);
    const imageSource=data.data.images.downsized_large.url;
    setGif(imageSource)
    setLoading(false)
  }
  useEffect (()=>{
    fetchData(tag);
  },[])
 
return {gif,loading,fetchData}
  
  
}
