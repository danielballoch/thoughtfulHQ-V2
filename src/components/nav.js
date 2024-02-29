import React, {useState} from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import Hamburger from "../components/hamburger"

const Wrapper = styled.div`
// position: fixed;
// overflow-x: hidden;
z-index: 200;
.navbar {
    top: 0;
    left: 0;
    right: 0;
    z-index: 300;
    position: absolute;
    background-color: white;
    display: flex;
    // width: 100vw;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    z-index: 200;
    min-height: 80px;
    // height: 100vh;
    // padding: 0 250px;
    align-items: center;
    box-sizing: border-box;
    .logo {
        z-index: 200;
        margin-right: 100px;
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
            border-radius: 20px;
            text-decoration: none;
            transition: .3s;
            :hover {
                background-color: #635bff;
            }
        }
    }
}
.sidedrawer {
 display: none;   
}
@media(max-width: 1060px){
    .navbar {
        position: fixed;
        justify-content: space-around;
        width: 100vw;
        z-index: 500;
        .middle-content, .book-button {
            display: none;
        }
        .logo {
            margin-right: unset;
            margin: 0 20px;
        }
    }
    .drawertoggle {
        transform: translateX(100%);
        box-shadow: unset!important;
    }
    .sidedrawer {
        transition: .3s;
        position: fixed;
        width: 70vw;
        height: 100vh;
        z-index: 200;
        background-color: white;
        top: 0px;
        right: 0;
        display: flex;
        flex-direction: column;
        padding: 200px 40px;
        box-sizing: border-box;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        // box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
        a {
            font-size: 30px;
            padding: 10px;
            color: black;
            text-decoration: none;
        }
    }
}
`



export default function Nav(){
    const [active, setActive] = useState(false)
    return(
        <Wrapper id="top">
            <div className="navbar">
                <a href="/#top" className="logo">
                    <StaticImage src="../images/thoughtfulHQlogo.webp" alt="thoughtfulHQ" />
                    {/* ORDINARY DIGITAL &copy; */}
                </a>
                <div className="middle-content">
                    <a href="/projects">Work</a>
                    <a href="/#services">Services</a>
                    <a href="/frequently-asked-questions">FAQ</a>
                </div>
                <div className="book-button">
                    <a target="_blank" href="https://calendly.com/thoughtfulhq/30min">Book A Free Discovery Call</a>
                </div>
                <Hamburger setActive={() => setActive(!active)} active={active}/>
            </div>
            <div className={active? "sidedrawer" : "sidedrawer drawertoggle"}>
                <a href="/#top" onClick={() => setActive(!active)}>Home</a>
                <a href="/projects">Work</a>
                <a href="/#services" onClick={() => setActive(!active)}>Services</a>
                <a href="/frequently-asked-questions">FAQ</a>
                <a href="/#contact" onClick={() => setActive(!active)}>Contact</a>
            </div>
        </Wrapper>
    )
}