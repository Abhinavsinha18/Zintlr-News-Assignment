import React from 'react'
import "./NewsBox.css"

const NewsBox = ({e}) => {
    // console.log(e);
  return (
    <div  className='boxNews'>

        <img src={e.urlToImage} alt={""} />
<div className='txttoimgtop'>
    Technology
</div>
{/* <div className='bg'>

</div> */}

        <div className='txtOnimage'>
            <span>10 Hour Ago</span>
            <p>{e.title !=null ? e.title.split(" ").splice(0,5).join(" ") : ""}</p>
            <span>{e.source.name}</span>
            <span>{e.description !=null ? e.description.split(" ").splice(0,9).join(" ") : ""}...</span>
        </div>
    </div>
  )
}

export default NewsBox