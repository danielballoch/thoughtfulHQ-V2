import React from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"

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
    .book-button {
        background-color: #D9D9D9;
        padding: 15px;
        margin: auto;
        width: 300px;
        display: block;
        box-sizing: border-box;
        text-align: center;
        border-radius: 20px;
        color: black;
        text-decoration: none;
    } 
}
.image {
    width: 200px;
    height: fit-content;
}
`

export default function Contact(){
    return(
        <Wrapper id="contact">
            <div className="image"><StaticImage src="../../images/PhoneIcon.png" alt="A dinosaur" /></div>
            <div className="content">
                <h3>Want to have a chat?</h3>
                <a href="#" className="book-button">Book A Free Discovery Call</a>
                <p className="middle-p">Or</p>
                <p>Call Daniel at <a href="tel:+64220780868">+64 22 078 0868</a> / Email <a href="mailto:daniel@thoughtfulhq.com">daniel@thoughtfulhq.com</a></p>
            </div>
            <div className="image"><StaticImage src="../../images/PhoneIcon.png" alt="A dinosaur" /></div>
        </Wrapper>
    )
}