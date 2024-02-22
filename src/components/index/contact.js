import React, {useState, useEffect} from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import Typewriter from 'typewriter-effect';

const Wrapper = styled.div`
display: flex;
height: 100vh;
justify-content: center;
align-items: center;
.content {
    width: 700px;
    padding: 50px;
    text-align: center;
    h3 {
        font-size: 40px;
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
        width: 300px;
        display: block;
        box-sizing: border-box;
        text-align: center;
        border-radius: 20px;
        text-decoration: none;
    } 
}
.active {
    transform: scale(1.05);
}
.image {
    transition: .3s;
    display: grid;
    grid-template-areas: "main";
    width: 220px;
    height: fit-content;
    .Typewriter {
        font-size: 15px;
        grid-area: main;
        width: 162px;
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
`

export default function Contact(){
    const [active, setActive] = useState(false);

    useEffect(() => {
        console.log("active: ", active);
    })
    return(
        <Wrapper id="contact">
            <div className={active? "image active" : "image"}>
                <Typewriter
                options={{
                    strings: ['Loading your website...'],
                    autoStart: true,
                    loop: true,
                }}
                />
                <StaticImage src="../../images/PhoneIcon.png" alt="A dinosaur" />
                </div>
            <div className="content">
                <h3>Want to have a chat?</h3>
                <a onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} target="_blank" href="https://calendly.com/thoughtfulhq/30min" className="book-button">Book A Free Discovery Call</a>
                <p className="middle-p">Or</p>
                <p>Call Daniel at <a href="tel:+64220780868">+64 22 078 0868</a> / Email <a href="mailto:daniel@thoughtfulhq.com">daniel@thoughtfulhq.com</a></p>
            </div>
            <div className={active? "image active" : "image"}>
            <Typewriter
            options={{
                strings: ['Loading your website...'],
                autoStart: true,
                loop: true,
            }}
            />
            <StaticImage src="../../images/PhoneIcon.png" alt="A dinosaur" /></div>
        </Wrapper>
    )
}