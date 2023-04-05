import React, { useState } from 'react'
import { useEffect } from 'react';
import "./SlideNews.css"

const SideNews = ({showNews}) => {
let [state,setState] = useState([]);

useEffect(()=>{
fetchData()
},[])

const fetchData = ()=>{
    try {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=6&apiKey=f0f24846fd7047cf817b92f66fc3e516`)
        .then((res)=>res.json())
        .then((d)=>{
          setState(d.articles)
        })
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className='slideNews'>
      <button className='btnBack' onClick={showNews}>🔙</button>
     {state.length >0 ?  state.map((e,i)=>{
      return <div className='divSlide'>
          <img src={e.urlToImage} alt="" />
      <div className='textOnImageDiv'> 
        <span>10 Hour Ago</span>
        <h2>{e.title!=null? e.title.split(" ").splice(0,5).join(" "):""}</h2>
        <span>{e.description!=null ? e.description.split(" ").splice(0,10).join(" ") : ""}</span><br />
        <span>{e.source.name} The Wall Street Journal</span>
      </div>


      </div>
     })     : ""}

    </div>
  )
}

export default SideNews;