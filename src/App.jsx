import './App.css'
import { useEffect, useState } from "react"
import Background from "./component/Backgroung/Background";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";


const App = () => {
  let heroData = [
    {Text1:"Dive into",Text2:"What you love"},
    {Text1:"Indulge",Text2:"your Passions"},
    {Text1:"Give in to",Text2:"your Passions"},
  ]
  const [heroCount,setHeroCount] = useState(1);
  const [playStatus,setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000)
  },[])
  return (
    <div>
      <Navbar/>
      
      <div>
          <Background playStatus={playStatus} heroCount={heroCount}/>
          
      </div>
      <Hero 
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
        <div className="home">
           <h1><u>home</u></h1>
           <p> Welcome to EV-Olution, your gateway to advanced automation. Powered by MainFlow Tasks, we revolutionize workflows, making your operations faster and more efficient. Embrace innovation and drive your business forward with our cutting-edge solutions.</p>
        <hr/>
        </div>
        <div className="about">
           <h1><u>About</u></h1>
           <p> EV-Olution is dedicated to transforming how businesses operate, integrating seamless automation with innovative technology. We empower organizations to enhance efficiency and stay ahead in a rapidly evolving digital landscape. Join us in redefining the future of work</p>
        <hr/>
        </div>
    </div>
    
  )
}

export default App