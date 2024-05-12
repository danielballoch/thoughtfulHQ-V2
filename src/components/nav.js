import React, {useState} from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import Hamburger from "../components/hamburger"

const Wrapper = styled.div`
position: relative;
// overflow-x: hidden;
z-index: 500;
.navbar {
    top: 0;
    left: 0;
    right: 0;
    z-index: 300;
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
.drawertoggle {
    transform: translateX(100%);
    box-shadow: unset!important;
}
.close-btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    // width: 300px;
    padding: 0!important;
    p {
        padding: 0;
        margin: 0;
        width: 100px;
    }
    top: 10px;
    right: calc(10vw - 20px);
    :hover {
        cursor: pointer;
    }
}
@media(max-width: 880px){
    .book-button {
        display: none;
    }
}
`



export default function Nav(){
    const [active, setActive] = useState(false)
    return(
        <Wrapper id="top">
            <div className="navbar">
                <Link to="/#top" className="logo">
                    <StaticImage src="../images/thoughtfulHQlogo.webp" alt="thoughtfulHQ" />
                    {/* ORDINARY DIGITAL &copy; */}
                </Link>
                {/* <div className="middle-content">
                    <Link to="/projects">Work</Link>
                    <Link to="/#services">Services</Link>
                    <Link to="/frequently-asked-questions">FAQ</Link>
                </div> */}
                <div className="book-button">
                    <a target="_blank" href="https://calendly.com/thoughtfulhq/30min">Book A Free Discovery Call</a>
                </div>
                <Hamburger setActive={() => setActive(!active)} active={active}/>
            </div>
            <div className={active? "sidedrawer" : "sidedrawer drawertoggle"}>
                <a className="close-btn" onClick={() => setActive(!active)}><p>Close</p><Hamburger setActive={() => setActive(!active)} active={active}/></a>
                <Link to="/#top" onClick={() => setActive(!active)}>Home</Link>
                <Link to="/projects">Work</Link>
                <Link to="/#services" onClick={() => setActive(!active)}>Services</Link>
                <Link to="/frequently-asked-questions">FAQ</Link>
                <Link to="/#contact" onClick={() => setActive(!active)}>Contact</Link>
            </div>
        </Wrapper>
    )
}