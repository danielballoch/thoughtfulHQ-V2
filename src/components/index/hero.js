import React from "react"
import styled from "@emotion/styled"
import ScrollAnimation from "./scrollAnimation"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
position: relative;
z-index: 10;
min-height: 100vh;
display: flex;
background-color: white;
color: black;
justify-content: center;
align-items: center;
.content-left {
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
}
@media(max-width: 1060px){
    display: grid;
    .content-left {
        margin-top: 100px;
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
    }
    .content-right {
        width: 100%;
        height: 100%;
    }
}
`

export default function Hero(){
    return(
        <Wrapper >
            <div className="content-left"> 
                <div className="text">
                    <h1>New Zealand Based Digital Agency</h1>
                    <p>We’re dedicated to helping good businesses: look <b>professional</b> online, <b>simplify workflows,</b> and sustainably <b>increase profits.</b></p>
                </div>  
            </div>
            <StaticImage className="content-right" src="../../images/manorrealty.jpg" alt="project image" />
        </Wrapper>
    )
}