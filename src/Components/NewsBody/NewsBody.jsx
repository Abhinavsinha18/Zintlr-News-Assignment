import React, { useEffect, useState } from 'react'
import NewsBox from '../../pages/NewsBox/NewsBox';
import "./NewsBody.css"
import CategoryNav from '../../pages/CategoryNav/CategoryNav';
import BottomNews from '../../pages/BottomNews/BottomNews';

const NewsBody = () => {
 
    const [state,setState] = useState([]);
    const [data,setData] = useState([]);
    // let apikey ="pub_20069a1f8154e7b1f8cc889b2b6fcac3d35ce"
    let url ='https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=10&apiKey=f0f24846fd7047cf817b92f66fc3e516'
    let url2 ='https://newsapi.org/v2/everything?q=apple&from=2023-04-03&to=2023-04-03&sortBy=popularity&pageSize=10&apiKey=f0f24846fd7047cf817b92f66fc3e516'

    useEffect(()=>{
   fetchNewsData( url,setState)
   fetchNewsData( url2,setData)
    },[])

    const fetchNewsData = (url,setState)=>{
        try { 
            fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
                setState(data.articles);
                console.log(data);
            })
            
        } catch (error) {
               console.log(error);
                throw error;
        }
    }

  return (
    <div>
        <div className='scrollDiv'>
          {state.length>0 ? state.map((e,i)=>{
            return <NewsBox e={e} key={i+1}/>
          }): "Loading..."}
        
        </div>

        <div className='scdNavDiv'>
          <h3>Top Stories For You</h3>
            <CategoryNav/>
        </div>

<div className='btmNewsDIv'>
  {data.length>0 ?
   data.map((e,i)=>{
         return  <BottomNews e={e} key={i+1}/> 
   })
   : "Loading..."}
  
</div>
    </div>
  )
}

export default NewsBody