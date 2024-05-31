import React, {useState, useEffect} from "react"
import styled from "@emotion/styled"
import ScrollAnimation from "./scrollAnimation"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
@media(max-width: 1060px){
    flex-direction: column;
    .hero-content-left {
        margin-top: 100px;
        width: 100%!important;
        padding: 20px;
        box-sizing: border-box;
    }
    .content-right {
        width: 100%!important;
        height: 50vh!important;
    }
}
position: relative;
z-index: 10;
min-height: 100vh;
display: flex;
background-color: white;
color: black;
justify-content: center;
align-items: center;
.hero-content-left {
width: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
    .text {
        max-width: 500px;
        
        h1 {
            font-size: 55px;
            font-weight: 300;
            color: #222;
        }
        p {
            font-size: 24px;
            color: #222;
        }
    }
}
.content-right {
    width: 50%;
    height: 100vh;
    display: flex;
    overflow: clip;
    // :hover{
    //     cursor: pointer;
    // }
    img {
        height: 100%;
        width: 100%;
    }
}
.next-btn {
    position: absolute;
    right: 0px;
    bottom: 0px;
}
.current {
    opacity: 1;
    transition: .3s;
}
.hide {
    // opacity: .2;
    // display: none;
}
.track {
    display: flex;
    width: 100%;
    transition: 1s;
}
.gatsby-image-wrapper {
    flex-shrink: 0!important;
    width: 100%;
}
.active1 {
    transform: translateX(0);
}
.active2 {
transform: translateX(-100%);
}
.active3 {
    transform: translateX(-200%);
}
.active4 {
    transform: translateX(-300%);
}
.animation {
    stroke: white;
    stroke-width: 10px;
    transform: rotate(-90.5deg);
    transform-origin: center;
    transition: all 0.001s;
}
button {
    background: rgba(0,0,0,0);
    border: none;
}
`

const Demo = ({ max, width, height, radius, updateImage, pause }) => {
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
      setTimeout(() => {
        // if(!pause){
            setSeconds(s => s + 0.01)
        // };
      }, 10);
      if (seconds > max - 0.01){setSeconds(0); updateImage()}
      
    }, [seconds, max, pause]);
    
    const countdown = seconds % (max + .01);
    
    const circumference = 2 * Math.PI * radius;
    const offset = (max - countdown) / max * circumference;
  
    const cx = width / 2;
    const cy = height / 2;
  
    return (
      <div>
        {/* <div>{countdown}</div> */}
        
        <svg width={width} height={height}>
          <circle
            className="animation" 
            r={radius} 
            cx={cx}
            cy={cy}
            fill="none" 
            strokeDasharray={circumference}
            strokeDashoffset={offset}>
          </circle>
        </svg>
      </div>
    );
  };

export default function Hero(){
    const [image, setImage] = useState(0)
    const [pause, setPause] = useState(false)

    function updateImage(){
        if(image < 3){setImage(image + 1)}
        else {setImage(0)}
    }

    return(
        <Wrapper >
            <div className="hero-content-left"> 
                <div className="text">
                    <h1>New Zealand Based Digital Agency</h1>
                    <p>We’re dedicated to helping good businesses: look <b>professional</b> online, <b>simplify workflows,</b> and sustainably <b>increase profits.</b></p>
                </div>  
            </div>
            <div className="content-right" 
            // onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)}
            >
                <div className={image === 0? "track active1" : image === 1? "track active2" : image === 2? "track active3" : "track active4"}>
                    <StaticImage className={image === 0? "current" : "hide"} src="../../images/manorrealty.jpg" alt="project image" placeholder="blurred"/>
                    <StaticImage className={image === 1? "current" : "hide"} src="../../images/glacierinternational.jpg" alt="project image" placeholder="blurred"/>
                    <StaticImage className={image === 2? "current" : "hide"} src="../../images/centralaero5.jpg" alt="project image" placeholder="blurred"/>
                    <StaticImage className={image === 3? "current" : "hide"} src="../../images/motoschool.jpg" alt="project image" placeholder="blurred"/>
                </div>
            </div>
            <div className="next-btn"><button onClick={() => updateImage()}><Demo pause={pause} updateImage={() => updateImage()} max={3} width={100} height={100} radius={20} /></button></div>
        </Wrapper>
    )
}