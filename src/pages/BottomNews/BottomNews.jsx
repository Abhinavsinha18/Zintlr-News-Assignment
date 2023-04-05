import "./BottomNews.css"
const BottomNews = (e) => {
  return (
    <div className="btmdiv">
         <div>
          <span>1 day ago</span>
          <h4>{e.e.title!=null? e.e.title.split(" ").splice(0,5).join(" "):""}</h4>
          <span>{e.e.description !=null ? e.e.description.split(" ").splice(0,15).join(" ") : ""}</span><br />
          <span>{e.e.author!=null ?  e.e.author.split(" ").splice(0,8).join(" ") : ""} Daily Beast</span>
          <p><span>Matt Young</span> - Daily Beast</p>
         </div>

   <div>
    <img src={e.e.urlToImage} alt="bottonimg" />
   </div>
    </div>
  )
}

export default BottomNews