import React from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
display: flex;
width: 100vw;
justify-content: space-between;
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
height: 120px;
padding: 0 50px;
align-items: center;
box-sizing: border-box;
.logo {
    width: 260px;
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
    width: 260px;
    a {
        background-color: #D9D9D9;
        padding: 15px;
        width: 100%;
        display: block;
        box-sizing: border-box;
        text-align: center;
        border-radius: 20px;
        color: black;
        text-decoration: none;
    }
}
`

export default function Nav(){
    return(
        <Wrapper id="top">
            <a href="/" className="logo"><StaticImage src="../images/thoughtfulHQlogo.webp" alt="A dinosaur" /></a>
            <div className="middle-content">
                <a href="/#services">Services</a>
                <a href="/#recent-projects">Recent Work</a>
                <a href="/frequently-asked-questions">FAQ</a>
            </div>
            <div className="book-button">
                <a href="#">Book A Free Discovery Call</a>
            </div>
        </Wrapper>
    )
}