import React from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
height: 100vh;
display: flex;
// background-color: lightgrey;
justify-content: center;
align-items: center;
.service-box {
    background-color: white;
    margin: 0 10px;
    height: fit-content;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    .image {
        background-color: darkgrey;
        width: 440px;
        height: 200px;
    }
    .content {
        min-height: 400px;
        max-width: 440px;
        padding: 20px;
        box-sizing: border-box;
        a {
            display: inline-block;
            background-color: #D9D9D9;
            padding: 15px 30px; 
            margin-top: 20px;
            color: black;
            text-decoration: none;
        }
    }
}
`

export default function Services(){
    return(
        <Wrapper id="services">
            <div className="service-box">
                <div className="image"><StaticImage src="../../images/Motoschool.png" alt="A dinosaur" /></div>
                <div className="content">
                    <h2>Business Marketing Websites</h2>
                    <p>Want to Impress potential clients?</p>
                    <p>Create a base for future marketing? </p>
                    <p>Earn more sales? </p>
                    <p>Find new employees?</p>
                    <p>We would love to get to know your business and create something which speaks your customers language, shows the services you provide, and makes it a no-brainer to get in touch with you.</p>
                    <a href="#">Request a Quote</a>
                </div>
            </div>
            <div className="service-box">
                <div className="image"><StaticImage src="../../images/CA.png" alt="A dinosaur" /></div>
                <div className="content">
                    <h2>Eccomerce / Sell Online </h2>
                    <p>If you have products or services you want to sell online we can showcase these with the best technology and design  based on your vision/budget.</p>
                    <p>Whether your starting out and want to save money (while being able to upgrade in the future) or have an established business and want to create a stunning experience for your customers with all the bells & whistles. </p>
                    <a href="#">Request a Quote</a>
                </div>
            </div>
            <div className="service-box">
                <div className="image"><StaticImage src="../../images/Glacier.png" alt="A dinosaur" /></div>
                <div className="content">
                    <h2>Custom Solutions</h2>
                    <p>Not just design.</p>
                    <p>If you own a complex business and want to integrate tools that simplify work for your team, we can help.</p>
                    <p>That could mean creating a product customization section for your store, hooking up CRM, CMS, dynamic content, bookings, finance tracking, internal communication - whatever the case, we’ve got your back.</p>
                    <a href="#">Request a Quote</a>
                </div>
            </div>
        </Wrapper>
    )
}