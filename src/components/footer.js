import React, { useRef } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

const Wrapper = styled.div`
// position: absolute;
// bottom: 0;
// transform: translateY(-304px);
// left: 0;
z-index:0;
display: flex;
justify-content: center;
// width: 100vw;
background-color: black;
// background-color: #0a2540;
// background-color: #f8f8f8;
// color: black;
// background-color: #343a40;
color: white;
.wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.main-footer {
display: flex;
.section1, .section2, .section3, .section4 {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 40px 0px;
    padding: 0 80px;
    a {
        font-size: 14px;
        // color: black;
        color: white;
        text-decoration: none;
    }
}
.section1 {
    display: flex;
    // flex-direction: row;
    // align-items: center;
    padding-left: 0;
    width: 260px;
}

.section1 .blurb {
    padding: 10px;
    height: fit-content;
    font-size: 14px;
    // max-width: 250px;
}
.head {
    font-size: 16px!important;
    margin: 0!important;
    padding: 10px 0!important;
}
.section2 {
    border-left: 1px solid rgba(255,255,255,0.2);
    a {
        display: inline-block;
        padding: 5px 0;
        margin: 5px 0;
    }
}
.section3 {
    border-left: 1px solid rgba(255,255,255,0.2);
    padding-right: 0;
    a {
        display: inline-block;
        padding: 5px 0;
        margin: 5px 0;
    }
}
.logo {
    margin-top: 20px;
    // height: 140px;
    width: 140px;
    // filter: invert(100%);
    margin-left: -8 px;
    img {
        // height: 140px;
        // width: 140px;
    }
}
.logo-invert {
filter: invert(100%);
}
.socials-div {
    margin-left: 6px;
    margin-top: 20px;
    a {
        transition: all .3s;
        display: inline-block;
        margin-right: 14px;
        border: solid 2px white;
        border-radius: 50px;
        filter: invert(100%);
        :hover {
            border: solid 2px white;
             filter: invert(0%);
        }
    }
    img {
        width: 30px;
        height: 30px;
    }
}
}
.bottom-footer {
    display: flex;
    justify-content: center;
    // background-color: #22262a;
    width: 100%;
    a {
        font-size: 14px;
        padding: 10px;
        margin: 40px 0 0 0;
        color: white;
        // color: black;
        text-decoration: none;
    }
}
@media(max-width: 1000px){
    position: relative;
    .main-footer {
        flex-direction: column;
        width: 100vw;
        overflow: hidden;
        .section1 {
            padding: 0 80px;
            max-width: 270px;
            width: unset;
            flex-direction: column;
            align-items: flex-start;
            // max-width: 400px;
            // width: 90%;
        }
        .section1, .section2, .section3, .section4 {
            margin: 50px 0;
        }
        .section2, .section3, .section4 {
            width: fit-content;
            margin-left: 60px;
        }
    }
}
@media(max-width: 520px){
    .section1 {
        padding: 0 20px!important;
    }
    .bottom-footer {
        flex-direction: column;
        align-items: center;
    }
}
`

export default function Nav(){

    const footer = useRef();
    // const { contextSafe } = useGSAP({scope: footer});
    
    // useGSAP(
    //     () => {
    //         gsap.to("#main", {
    //             opacity: 1,
    //             background: 'white',
    //             y: "end",
    //           scrollTrigger: {
    //             trigger: "#main",
    //             pin: true,
    //             start: '304px bottom',
    //             end: '608px bottom',
    //             scrub: true,
    //           },
    //         })
    //     },
    //     { scope: footer }
    // );


    return(
        <div ref={footer} style={{padding:"0"}}>
        <Wrapper id="main">
            <div className="wrap" >
                <div className="main-footer">
                    <div className="section1">
                        <Link to="/" className="logo logo-invert">
                        <StaticImage src="../images/TYRO_Logo.png" alt="TYRO Creative Logo" />
                        </Link>
                        {/* <div className="blurb">Helping New Zealand businesses look professional online, simplify workflows, and increase profits.</div> */}
                        <div className="socials-div">
                            <a target="_blank" href="https://www.facebook.com/thoughtfulHQ"><StaticImage src="../images/icons/Facebook.png" alt="Facebook Logo" /></a>
                            <a target="_blank" href="https://www.instagram.com/thoughtful_hq/"><StaticImage src="../images/icons/Instagram.png" alt="Instagram Logo" /></a>
                            <a target="_blank" href="https://www.linkedin.com/company/thoughtfulhq/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B85NHyayhTnyWSqzr%2FU4dQw%3D%3D"><StaticImage src="../images/icons/Linkedin.png" alt="Linkedin Logo" /></a>
                        </div>
                    </div>
                    {/* <div className="section2">
                        <a>Gatsby Partner</a>
                        <a>Google Partner</a>
                    </div> */}
                    <div className="section2">
                        <p className="head"><b>Navigation</b></p>
                        <Link to="/projects">Work</Link>
                        {/* <Link to="/#services">Services</Link> */}
                        <Link to="/frequently-asked-questions">FAQ</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className="section3">
                        <Link to="/contact" className="head"><b>Contact</b></Link>
                        <a href="mailto:daniel@thoughtfulhq.co.nz">daniel@tyrocreative.co.nz</a>
                        <a href="tel:+64220780868">+64 22 078 0868</a>
                        <Link to="/contact">Book discovery call</Link>
                    </div>
                </div>
                <div className="bottom-footer">
                    <Link to="/">© 2024  tyrocreative</Link>
                    <Link to="/terms-and-conditions">Terms & Conditons</Link>
                    {/* <Link to="#top">Back To The Top</Link> */}
                </div>
            </div>
        </Wrapper>
        </div>
    )
}