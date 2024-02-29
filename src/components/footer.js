import React from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
display: flex;
justify-content: center;
// width: 100vw;
// background-color: #0a2540;
background-color: #f8f8f8;
color: black;
.main-footer {
display: flex;
.section1, .section2, .section3, .section4 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 100px 0;
    padding: 0 60px;
    a {
        color: black;
        text-decoration: none;
    }
}
.section1 {
    
    width: 360px;
}

.section1 .blurb {
    padding: 10px;
    font-size: 14px;
}
.section2 {
    
   a {
    padding: 10px 30px;
    margin: 10px;
    background-color: white;
    color: black;
   }
}
.section3 {
    border-left: 1px solid black;
    a {
        display: inline-block;
        padding: 5px 0;
        margin: 5px 0;
    }
}
.logo {
    height: 70px;
    // filter: invert(100%);
    margin-left: -8 px;
    img {
        height: 70px;
    }
}
.socials-div {
    a {
        display: inline-block;
        padding: 10px;
    }
    img {
        // filter: invert(100%);
    }
}
}
.bottom-footer {
    display: flex;
    justify-content: center;
    a {
        font-size: 14px;
        padding: 10px;
        margin: 10px 0;
        // color: white;
        color: black;
        text-decoration: none;
    }
}
@media(max-width: 1000px){
    .main-footer {
        flex-direction: column;
        width: 100vw;
        overflow: hidden;
        .section1 {
            width: unset;
            .logo {
                img {
                    object-fit: contain!important;
                }
            }
            // max-width: 400px;
            // width: 90%;
        }
        .section1, .section2, .section3, .section4 {
            margin: 50px 0;
        }
        .section3, .section4 {
            width: fit-content;
            margin-left: 60px;
        }
    }
}
@media(max-width: 520px){
    .bottom-footer {
        flex-direction: column;
        align-items: center;
    }
}
`

export default function Nav(){
    return(
        <Wrapper>
            <div>
                <div className="main-footer">
                    <div className="section1">
                        <a href="/" className="logo"><StaticImage src="../images/thoughtfulHQlogo.webp" alt="A dinosaur" /></a>
                        <div className="blurb">Helping New Zealand businesses look profesional online, simplify workflows, and increase profits.</div>
                        <div className="socials-div">
                            <a target="_blank" href="https://www.facebook.com/thoughtfulHQ"><StaticImage src="../images/fb-icon.svg" alt="A dinosaur" /></a>
                            <a target="_blank" href="https://www.instagram.com/thoughtful_hq/"><StaticImage src="../images/insta-icon.svg" alt="A dinosaur" /></a>
                            <a target="_blank" href="https://www.linkedin.com/company/thoughtfulhq/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B85NHyayhTnyWSqzr%2FU4dQw%3D%3D"><StaticImage src="../images/linkedin-icon.svg" alt="A dinosaur" /></a>
                        </div>
                    </div>
                    {/* <div className="section2">
                        <a>Gatsby Partner</a>
                        <a>Google Partner</a>
                    </div> */}
                    <div className="section3">
                        <p><b>Navigation</b></p>
                        <a href="/#recent-projects">Work</a>
                        <a href="/#services">Services</a>
                        <a href="/frequently-asked-questions">FAQ</a>
                        <a href="/#contact">Contact</a>
                    </div>
                    <div className="section3">
                        <p><b>Contact</b></p>
                        <a href="mailto:daniel@thoughtfulhq.com">daniel@thoughtfulhq.com</a>
                        <a href="tel:+64220780868">+64 22 078 0868</a>
                    </div>
                </div>
                <div className="bottom-footer">
                    <a href="/">© 2024  thoughtfulHQ</a>
                    <a href="/terms-and-conditions">Terms & Conditons</a>
                    <a href="#top">Back To The Top</a>
                </div>
            </div>
        </Wrapper>
    )
}