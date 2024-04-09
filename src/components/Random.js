import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";



// const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
export default function Random() {
  // const [gif, setGif] = useState("");
  // const [loading,setLoading]=useState('false')
  
  // async function fetchData(){
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const {data}=await axios.get(url);
  //   const imageSource=data.data.images.downsized_large.url;
  //   setGif(imageSource)
  //   setLoading(false)
  // }
  // useEffect (()=>{
  //   fetchData();
  // },[])
  const {gif,loading,fetchData}=useGif();
  function clickHandler() {
    fetchData();
    

  }
  return (
    <div className="bg-green-500 w-1/2 flex flex-col items-center gap-y-4 font-mono font-bold border-white border-md rounded-md mt-8 ">
      <h1 className="underline text-2xl mt-[10px]">A Random Gif</h1>
      {
        loading?(<Spinner/>):(<img src={gif} ></img>)
      }
      
      <button
        onClick={clickHandler}
        className="w-11/12 bg-white opacity-90 my-4 rounded-lg ">
        Generate
      </button>
    </div>
  );
}
