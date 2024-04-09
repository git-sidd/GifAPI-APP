import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";



// const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
export default function Tag() {
  const [tag,setTag]=useState("rohit sharma")
  // const [gif, setGif] = useState("");
  // const [loading,setLoading]=useState('false')
  
  // async function fetchData(){
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data}=await axios.get(url);
  //   const imageSource=data.data.images.downsized_large.url;
  //   setGif(imageSource)
  //   console.log(data)
  //   setLoading(false)
  // }
  // useEffect (()=>{
  //   fetchData();
  // },[])
  const {gif,loading,fetchData}=useGif(tag);
  function clickHandler() {
    fetchData(tag);
  }
  function changeHandler(event){
      setTag(event.target.value)
  }

  return (
    <div className="bg-blue-500 w-1/2 flex flex-col items-center justify-center mx-auto gap-y-4 font-mono font-bold border-white border-md rounded-md mt-8 ">
      <h1 className="underline uppercase text-2xl mt-[10px]"> Random {tag} Gif</h1>
      {
        loading?(<Spinner/>):(<img src={gif} ></img>)
      }
      <input
      className="rounded-md w-11/12 text-lg text-center uppercase outline-none" 
      onChange={changeHandler}
      value={tag}
      />
      
      <button
        onClick={clickHandler}
        className="w-11/12 bg-white opacity-90 my-4 rounded-md ">
        Generate
      </button>
    </div>
  );
}
