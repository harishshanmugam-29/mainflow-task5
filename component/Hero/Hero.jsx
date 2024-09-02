import './Hero.css'
import arrow from '../../assets/arrow.png'
import pause_button from '../../assets/pause_button.png'
import play from '../../assets/play.png'


const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{heroData.Text1}</p>
            <p>{heroData.Text2}</p>
        </div>
        <div className="hero-explore">
            <p>Explore the features </p>
            <img src={arrow} alt=''/>
        </div>
        <div className="hero-dot-play">
            <ul className="hero-dots">
            <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
            <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
            <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
            </ul>
            <div className="hero-play">
                <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_button:play}alt=''/>
                <p>See the video</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
