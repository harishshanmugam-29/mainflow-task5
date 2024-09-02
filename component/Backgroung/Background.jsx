import './Background.css'
import video from '../../Assets/video.mp4'
import image1 from '../../assets/image1.jpeg'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

const Background = ({playStatus,heroCount}) => {
  
    if(playStatus){
        return (
            <video className='background' autoPlay loop muted>
                <source src={video} type='video/mp4'/>
            </video>
        )
    }
    else if(heroCount===0)
    {
        return <img src={image1} width='1500px' height='800px'className='background fade-in' alt="" />
    }
    else if(heroCount===1)
    {
        return <img src={image2} width='1500px' height='800px' className='background fade-in' alt="" />
    }
     else if(heroCount===2)
    {
        return <img src={image3} width='1500px' height='800px' className='background fade-in' alt="" />
    }
}

export default Background
