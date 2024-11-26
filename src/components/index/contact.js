import React, {useState, useRef} from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import Typewriter from 'typewriter-effect';
import Button from "../contact-btn"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

const Wrapper = styled.div`
@keyframes noise-background {
  0% {
    transform: translate3d(0, 0, 0);
  }
  20% {
    transform: translate3d(50px, 30px, 0);
  }
  40% {
    transform: translate3d(10px, 50px, 0);
  }
  60% {
    transform: translate3d(30px, 20px, 0);
  }
  80% {
    transform: translate3d(50px, 0, 0);
  }
  100% {
    transform: translate3d(100px, 0, 0);
  }
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
    100% {
		background-position: 0% 50%;
	}
}
// background: #093740 url("https://assets.codepen.io/5817405/noise_2.png");
// background-blend-mode: brighten;
// animation: noise-background 0.5s steps(1) infinite;
overflow: clip;
:before {
  position: absolute;
  inset: -100px;
  z-index: -1;
  display: block;
//   background: rgba(0,0,0,0.5) url("https://assets.codepen.io/5817405/noise_2.png");
//   background-blend-mode: overlay;
//   animation: noise-background 0.5s steps(1) infinite;
  content: "";
}
position: relative;
z-index: 10;
display: flex;
height: 110vh;
justify-content: center;
color: white;
background-color: black;
opacity: 1;
// background: linear-gradient(-45deg, #000000, #211a23, #000000);
// background-size: 400% 400%;
// animation: gradient 30s ease infinite;
align-items: center;
.content {
    color: black;
    width: 700px;
    padding: 50px;
    text-align: center;
    h3 {
        font-size: 46px;
        margin-top: 0;
    }
    .middle-p {
        margin: 30px;
    }
    a {
        color: #635bff;
        text-decoration: none;
    }
    .book-button {
        // background-color: #D9D9D9;
        // color: black;
        background-color: #635bff;
        color: white;
        padding: 15px;
        margin: auto;
        max-width: 300px;
        display: block;
        box-sizing: border-box;
        text-align: center;
        border-radius: 15px;
        text-decoration: none;
    } 
}
.active {
    transform: scale(1.05);
}
.image {
    margin: 20px;
    transition: .3s;
    display: grid;
    grid-template-areas: "main";
    // width: 240px;
    height: fit-content;
    .Typewriter {
        font-size: 15px;
        grid-area: main;
        width: 162px;
        padding: 10px;
        height: 35px;
        margin: auto;
        z-index: 200;
        color: black;
        opacity: .4;
    }
    .gatsby-image-wrapper {
        grid-area: main;
    }
}
@media(max-width: 860px){
    height: 50vh;

    scroll-margin-block-start: 250px;

    .content {
        padding: 20px;
        width: 100%!important;
    }
    padding-bottom: 100px;
    .image {
        display: none;
    }
}
.background {
width: 100%;
height: 100%;
background-color: white;
display: flex;
height: 110vh;
justify-content: center;
align-items: center;
} 

`

export default function Contact(){
    const [active, setActive] = useState(false);
    const contactref = useRef();
    useGSAP(
        () => {
            gsap.to(".background", {
                backgroundColor: "black",
              scrollTrigger: {
                trigger: ".background",
                toggleActions: "play none none reverse",
                start: '35% 50%',
                end: '40% 50%',
                // scrub: true,
                // markers: true
              },
            });
            gsap.to(".content", {
                color: "white",
              scrollTrigger: {
                trigger: ".background",
                toggleActions: "play none none reverse",
                start: '35% 50%',
                end: '40% 50%',
                // scrub: true,
                // markers: true
              },
            });
        },
        { scope: contactref }
    )

    return(
        <Wrapper id="contact" ref={contactref}>
            <div className="background">
                {/* <div className={active? "image active" : "image"}>
                    <Typewriter
                    options={{
                        strings: ['Loading your website...'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                    <StaticImage src="../../images/PhoneIcon.png" alt="Phone silhouette" />
                </div> */}
                <div className="content">
                    <h3>Want to learn more?</h3>
                    {/* <a onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} target="_blank" href="https://calendly.com/thoughtfulhq/30min" className="book-button">Book A Free Discovery Call</a> */}
                    {/* <a onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} href="/contact" className="book-button">Book Discovery Call</a> */}
                    <Button/>
                    <p className="middle-p">Or</p>
                    <p>Call Daniel at <a  href="tel:+64220780868">+64 22 078 0868</a> / Email <a href="mailto:daniel@tyrocreative.co.nz">daniel@tyrocreative.co.nz</a></p>
                </div>
                {/* <div className={active? "image active" : "image"}>
                    <Typewriter
                    options={{
                        strings: ['Loading your website...'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                    <StaticImage src="../../images/PhoneIcon.png" alt="Phone silhouette" />
                </div> */}
            </div>
        </Wrapper>
    )
}