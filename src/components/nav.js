import React from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import Hamburger from "../components/hamburger"

const Wrapper = styled.div`
// filter: invert(100%);
background-color: white;
display: flex;
width: 100vw;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
z-index: 200;
height: 80px;
// padding: 0 250px;
align-items: center;
box-sizing: border-box;
.logo {
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
@media(max-width: 1060px){
    justify-content: space-around;
    .middle-content, .book-button {
        display: none;
    }
    .logo {
        margin-right: unset;
        margin: 0 20px;
    }
}
`

export default function Nav(){
    return(
        <Wrapper id="top">
            <a href="/" className="logo">
                <StaticImage src="../images/thoughtfulHQlogo.webp" alt="thoughtfulHQ" />
                {/* ORDINARY DIGITAL &copy; */}
            </a>
            <div className="middle-content">
                <a href="/#recent-projects">Work</a>
                <a href="/#services">Services</a>
                <a href="/frequently-asked-questions">FAQ</a>
            </div>
            <div className="book-button">
                <a target="_blank" href="https://calendly.com/thoughtfulhq/30min">Book A Free Discovery Call</a>
            </div>
            <Hamburger/>
        </Wrapper>
    )
}