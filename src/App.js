import { useRef } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import NewsBody from './Components/NewsBody/NewsBody';
import SideNews from './Components/SideNews/SideNews';

function App() {

  let box = useRef(null)


const showNews = ()=>{
  if(box.current.style.display == "none"){

    box.current.style.display = "block"
  }else{
    box.current.style.display = "none"
  }
}

  return (
    <div className="App">
  <Navbar/>
  {/* <div className='break'> */}
  <NewsBody/>
{/* <SideNews/> */}
 
<div className='divBtm' ref={box}>
  <SideNews showNews={showNews}/>
  {/* <div className='bg'></div> */}
</div>

<div className='btn'>
  <button onClick={showNews}>Explore</button>
</div>
    </div>
  );
}

export default App;
