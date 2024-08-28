import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import ContactForm from "../components/contact-form"
// import email from '../images/contact/appleemail.png'
// import phone from '../images/contact/applephone.png'
import email from '../images/contact/send.png'
import phone from '../images/contact/smartphone.png'


const Wrapper = styled.div`
padding-top: 200px;
padding-bottom: 100px;
display: flex;
flex-direction: column;
width: 90vw;
max-width: 1220px;
margin: auto;
h1 {
    max-width: 1220px;
    font-weight: 100;
    font-size: 55px;
    color: #222;
}
.main {
    display: flex;
    margin: 50px auto 100px auto;
}
.contact {
    width: 500px;
    height: 500px;
    background-color: grey;
    margin-right: 100px;
}
.content-right {
    width: 420px;
    border-left: 1px solid rgba(0,0,0,0.1);
    padding-left: 100px;
    .paragraph {
        font-size: 18px;
        font-weight: 100;
    }
    .contact-item {
        font-size: 18px;
        font-weight: 600;
        a {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: black;
            transition: .3s;
            :hover {
                color: #635bff;
            }
        }
        img {
            width: 30px;
            margin-right: 10px;
        }
    }
    .heading {
        margin-top: 50px;
        display: flex;
        align-items: center;
        h2 {
            padding-left: 20px;
            font-size: 30px;
            font-weight: 100;
        }
        img {
            height: 100px;
            width: 100px;
            border-radius: 10px;
        }
    }
}
@media(max-width: 1280px){
    padding-top: 100px;
    padding-bottom: 50px;
    .main {
        flex-direction: column-reverse;
    }
    .content-right {
        border-left: unset;
        width: 90vw;
        max-width: 600px;
        padding-left: 0;
    }
    h1 {
        max-width: 600px;
        margin: auto;
        display: none;
    }
}
@media(max-width: 500px){
    h1 {
        font-size: 34px;
    }
}
`


export default function Indexpage(){
  return(
    <Layout>
        <Wrapper>
        <h1>Want to get a professional website or digital content made for your business?</h1>
        <div className="main">
            <ContactForm/>
            <div className="content-right">
                <div className="heading"><StaticImage src="../images/DanielBalloch.jpg" alt="Daniel Balloch Profile" /><h2>Hey, I'm Daniel!</h2></div>
                <p className="paragraph">I would love to hear about your business, challenges, goals and vision for your project. <br/><br/>Reach out now, I'll book a discovery call.</p>
                <p className="contact-item"><a href="mailto:daniel@tyrocreative.co.nz"><img src={email} alt="email icon"/>daniel@tyrocreative.co.nz</a></p>
                <p className="contact-item"><a href="tel:+64220780868"><img src={phone} alt="email icon"/>+64 22 078 0868</a></p>
            </div>
        </div>
        </Wrapper>
    </Layout>
  )
}

export const Head = () => (
  <>
    <html lang="en" />
    <title>Contact | TYRO Creative</title>
    <meta name="description" content="Web Design & Development services for New Zealand business owners. We service Hamilton, Auckland and can also work nationally/internationally."/>
  </>
)
