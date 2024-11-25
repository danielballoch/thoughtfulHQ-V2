import React, {useState} from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import Typewriter from 'typewriter-effect';

const Wrapper = styled.div`
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
position: relative;
z-index: 10;
display: flex;
height: 100vh;
justify-content: center;
color: white;
background: linear-gradient(-45deg, #000000, #211a23, #000000);
background-size: 400% 400%;
animation: gradient 30s ease infinite;
align-items: center;
.content {
    width: 700px;
    padding: 50px;
    text-align: center;
    h3 {
        font-size: 42px;
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
    
`

export default function Contact(){
    const [active, setActive] = useState(false);
    return(
        <Wrapper id="contact">
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
                <h3>Want to have a chat?</h3>
                {/* <a onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} target="_blank" href="https://calendly.com/thoughtfulhq/30min" className="book-button">Book A Free Discovery Call</a> */}
                <a onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} href="/contact" className="book-button">Book Discovery Call</a>
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
        </Wrapper>
    )
}