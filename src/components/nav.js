import React, { useState, useRef, useEffect } from "react"
import { Link, navigate } from "gatsby"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import Hamburger from "../components/hamburger"
import backgroundimg from "../images/favicon.png"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'



const Wrapper = styled.div`
// position: absolute;
// height: 100vh;
width: 100vw;
overflow-x: hidden;
z-index: 500;
.navbar {
    top: 0;
    left: 0;
    right: 0;
    z-index: 400!important;
    position: absolute;
    // background-color: rgba(255,255,255,.9);
    display: flex;
    // width: 100vw;
    justify-content: flex-end;
    // box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    z-index: 200;
    min-height: 80px;
    // height: 100vh;
    // padding: 0 250px;
    align-items: center;
    box-sizing: border-box;
    .logo {
        justify-self: flex-start;
        z-index: 200;
        margin-left: 10%;
        margin-right: auto;
        text-align: center;
        width: 260px;
        img {
            object-fit: contain!important;
        }
        text-decoration: none;
        color: black;
        font-size: 24px;
    }
    .middle-content {
        a {
            padding: 10px;
            margin: 0 20px;
            color: black;
            text-decoration: none;
            font-size: 16px;
        }
    }
    .book-button {
        // margin-right: 10%;
        margin-left: 100px;
        width: 260px;
        a {
            width: 260px;
            margin: auto;
            background-color: black;
            color: white;
            padding: 15px;
            // width: 100%;
            display: block;
            box-sizing: border-box;
            text-align: center;
            border-radius: 15px;
            text-decoration: none;
            transition: .3s;
            :hover {
                background-color: #635bff;
            }
        }
    }
}
.sidedrawer {
    max-width: 580px;
    // transition: .3s;
    position: absolute;
    width: 70vw;
    height: 100vh;
    z-index: 400;
    background-color: white;
    // top: 0;
    right: -80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 200px 40px;
    box-sizing: border-box;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    // ::before {
    //     content: "";
    //     background-image: url(${backgroundimg});
    //     background-size: contain;
    //     background-repeat: no-repeat;
    //     position: absolute;
    //     top: 90px;
    //     right: 20px;
    //     bottom: 10px;
    //     left: 20px;
    //     opacity: 0.04;
    // }
    
    // box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    a {
        z-index: 100;
        font-size: 50px;
        padding: 10px;
        color: black;
        text-decoration: none;
    }
}
// .drawertoggle {
//     transform: translateX(100%);
//     right: 0;
//     box-shadow: unset!important;
// }
.close-btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    // width: 300px;
    padding: 0!important;
    font-size: 30px!important;
    p {
        padding: 0;
        margin: 0;
        width: 100px;
    }
    top: 10px;
    right: calc(10vw - 20px);
    :hover {
        cursor: pointer;
        .hamburger {
            background-color: #635bff!important;
        }
    }
}
.phone {
    font-size: 20px!important;
    position: absolute;
    bottom: 0;
}
.email {
    font-size: 20px!important;
    position: absolute;
    bottom: 0;
    right: 40px;
}
@media(max-width: 880px){
    .book-button {
        display: none;
    }
}
@media(max-width: 755px){
    .email {
        display: none;
    }
}
`



export default function Nav({smoother}){
    const [active, setActive] = useState(false)

    // if(window){ console.log("location: ", window.location.hash)}
   

    const navref = useRef();
    const { contextSafe } = useGSAP({ scope: navref });

    const onClickGood = contextSafe(() => {
        if(!active){
            setActive(!active);
            gsap.to('.sidedrawer', { x: "-80vw" });
        } else {
            setActive(!active);
            gsap.to('.sidedrawer', { x: 0 });
        }
        
    });

    // useEffect(()=>{
    //     console.log("is the navigation running?")
    //     let location = window.location.hash
    //     console.log(location)
    //     if (location === "#contact"){
    //         smoother.scrollTo("#contact", true)
    //     }
        
    // },[])

    useGSAP(
        () => {
            gsap.to(".sidedrawer", {
                y: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: ".sidedrawer",
                  start: 0,
                  end: "max",
                  pin: true
                },
            })
        },
        { scope: navref }
    );

    return(
        <Wrapper id="top" 
        ref={navref}
        >
            <div className="navbar">
                <Link to="/" className="logo">
                    <StaticImage src="../images/thoughtfulHQlogo.webp" alt="thoughtfulHQ" />
                    {/* ORDINARY DIGITAL &copy; */}
                </Link>
                {/* <div className="middle-content">
                    <Link to="/projects">Work</Link>
                    <Link to="/#services">Services</Link>
                    <Link to="/frequently-asked-questions">FAQ</Link>
                </div> */}
                <div className="book-button">
                    {/* <a target="_blank" href="https://calendly.com/thoughtfulhq/30min">Book A Free Discovery Call</a> */}
                    <a href="/contact">Book Discovery Call</a>
                </div>
                {/* <Hamburger setActive={() => setActive(!active)} active={active}/> */}
                <Hamburger setActive={() => onClickGood()} active={active}/>
            </div>
            {/* <div className={active? "sidedrawer" : "sidedrawer drawertoggle"}> */}
            <div className="sidedrawer">
                <a className="close-btn" onClick={() => onClickGood()}><p>Close</p><Hamburger setActive={() => setActive(!active)} active={active}/></a>
                <Link to="/" onClick={() => onClickGood()}>Home</Link>
                <Link to="/projects" onClick={() => onClickGood()}>Work</Link>
                {/* <Link to="/" onClick={() => {onClickGood()}}>Services</Link> */}
                <Link to="/frequently-asked-questions" onClick={() => onClickGood()}>FAQ</Link>
                <Link to="/contact" onClick={() => onClickGood()}>Contact</Link>
                <a className="email" href="mailto:daniel@thoughtfulhq.com">daniel@thoughtfulhq.com</a>
                <a className="phone" href="tel:+64220780868">Call +64 22 078 0868</a>
            </div>
        </Wrapper>
    )
}