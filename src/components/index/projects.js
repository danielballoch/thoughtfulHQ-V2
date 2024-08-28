import React, { useRef, useState } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GlacierVideo from "../../videos/GlacierVideo.mp4"
import CAVideo from "../../videos/CAVideo.mp4"
import Manor from "../../videos/Manor.mp4"
import GlacierPoster from "../../images/project-posters/GlacierPoster.png"
import CAPoster from "../../images/project-posters/CAPoster.png"
import ManorPoster from "../../images/project-posters/ManorPoster.png"
import captions from "file-loader!../../videos/captions.vtt"

const Wrapper = styled.div`
position: relative;
z-index: 10;
display: flex;
flex-direction: column;
justify-content: center;
background-color: white;
align-items: center;
padding-top: 200px;
padding-bottom: 200px;
.animate-text {
    opacity: 0;
}
h2 {
    font-size: 50px;
}
.view-all {
    display: inline-block;
    background-color: #343a40;
    padding: 20px 0; 
    text-align: center;
    max-width: 360px;
    margin-top: 40px;
    width: 80vw;
    color: white;
    text-decoration: none;
    :hover {
        background-color: #2b3035;
    }
}
.project-toggle {
    transform: scale(1.04);
    box-shadow: rgb(38, 57, 77) 0px 35px 40px -10px, rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px!important;
}
.project {
    transition: 1s;
    background-color: white;
    // :hover {
    //     transform: scale(1.05);
    // }
    display: flex;
    flex-direction: row-reverse;
    width: 1300px;
    height: 500px;
    margin: 80px 0;
    // box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    .image, video {
        background-color: grey;
        width: 885px;
        height: 500px;
        border-right: solid 1px #efefef;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        width: 500px;
        height: 500px;
        box-sizing: border-box;
        .quote {
            h3 {
                font-size: 30px;
                margin-bottom: 0;
                text-align: center;
            }
            height: 450px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        p {
            padding: 20px 20px 0 20px;
            max-width: 500px;
            text-align: center;
        }
        a {
            display: inline-block;
            background-color: #343a40;
            color: white;
            padding: 15px 18px; 
            // border-radius: 5px;
            margin: auto 5px 0 5px;
            width: 130px;
            text-align: center;
            text-decoration: none;
            :hover {
                background-color: #2b3035;
            }
        }
        .button-div {
            // display: flex;
            // margin-top: auto;
            justify-self: flex-end;

        }
    }
}
@media(max-width: 1325px){
    h2 {
        width: 90%;
        margin: auto;
        text-align: center;
        font-size: 40px;
    }
.project {
    flex-direction: column-reverse;
    height: fit-content;
    margin: 60px 0;
    width: 90%;
    max-width: 885px;
    .image, video {
        max-width: 885px;
        height: auto;
        width: 100%;
        background-color: white;
    }
    .content {
        width: 100%;
        height: fit-content;
        .quote {
            height: fit-content;
            padding: 40px 0;
        }
    }
}
}
`

export default function Projects(){
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const text = useRef();
    const video1 = useRef();
    const video2 = useRef();
    const video3 = useRef();

    useGSAP(
        () => {
            gsap.to(".animate-text", {
                y: -40,
                opacity: 1,
              scrollTrigger: {
                trigger: ".animate-text",
                start: '50% bottom',
                end: 'top 50%',
                scrub: true
              },
            })
            ScrollTrigger.create({
                trigger: ".project1",
                start: 'top 50%',
                end: 'bottom 50%',
                onEnter: () => {video1.current.play(); setToggle1(true)},
                onEnterBack: () => {video1.current.play(); setToggle1(true)},
                onLeave: () => {video1.current.pause(); setToggle1(false)},
                onLeaveBack: () => {video1.current.pause(); setToggle1(false)},
            })
            ScrollTrigger.create({
                trigger: ".project2",
                start: 'top 50%',
                end: 'bottom 50%',
                onEnter: () => {video2.current.play(); setToggle2(true)},
                onEnterBack: () => {video2.current.play(); setToggle2(true)},
                onLeave: () => {video2.current.pause(); setToggle2(false)},
                onLeaveBack: () => {video2.current.pause(); setToggle2(false)},
            })
            ScrollTrigger.create({
                trigger: ".project3",
                start: 'top 50%',
                end: 'bottom 50%',
                onEnter: () => {video3.current.play(); setToggle3(true)},
                onEnterBack: () => {video3.current.play(); setToggle3(true)},
                onLeave: () => {video3.current.pause(); setToggle3(false)},
                onLeaveBack: () => {video3.current.pause(); setToggle3(false)},
            })
        },
        { scope: text }
    );

    return(
        <Wrapper id="recent-projects" ref={text}>
            <h2  className="animate-text">Our Client Success Stories</h2>
            <div className={toggle1? "project project1 project-toggle" :"project project1"}
                // onMouseOver={() => video1.current.play()}
                // onMouseOut={() => video1.current.pause()}
            >
                <div className="content">
                    <div className="quote">
                        <h3>Glacier International</h3>
                        <p>"Daniel delivered above and beyond for us with a highly professional end to end service. A high performance website was the delivered result which expressed clear communication to our customers about our product, services and a hassle free payment gateway as our main call to action for marketing. We enjoyed the development process and ongoing support is appreciated so thank you from myself and the Glacier International team."</p>
                        <p><i>-Malcom King, CEO</i></p>
                    </div>
                    <div className="button-div">
                        <a href="https://www.glacier.nz" target="_blank">View Website</a>
                        {/* <a href="/case-studies/glacier-international">Read Case Study</a> */}
                    </div>
                </div>
                <div className="image">
                <video
                poster={GlacierPoster}
                ref={video1}
                disablePictureInPicture
                title="Glacier International Project"
                height="100%"
                width="100%"
                loop
                muted
                playsInline 
                preload="auto"
                type="video/mp4"
                style={{objectFit:"cover"}}
                >
                    <source src={GlacierVideo} type="video/mp4" />
                    <track src={captions} kind="captions" srclang="en" label="english_captions"></track>
                </video>
                </div>
            </div>
            <div className={toggle2? "project project2 project-toggle" :"project project2"}
                // onMouseOver={() => video2.current.play()}
                // onMouseOut={() => video2.current.pause()}
            >
                <div className="content">
                    <div className="quote">
                        <h3>Central Aero</h3>
                        <p>"Great communication throughout the whole process, very accommodating and helpful when working with a beginner like me!"</p>
                        <p><i>-Hamish Ross, Owner & Electrical Director</i></p>
                    </div>
                    <div className="button-div">
                        <a href="https://www.centralaero.co.nz" target="_blank">View Website</a>
                        {/* <a href="/case-studies/central-aero">Read Case Study</a> */}
                    </div>
                </div>
                <div className="image">
                <video
                poster={CAPoster}
                ref={video2}
                disablePictureInPicture
                title="Central Aero Project"
                height="100%"
                width="100%"
                loop
                muted
                playsInline 
                preload="auto"
                type="video/mp4"
                style={{objectFit:"cover"}}
                >
                    <source src={CAVideo} type="video/mp4" />
                    <track src={captions} kind="captions" srclang="en" label="english_captions"></track>
                </video>
                </div>
            </div>
            <div className={toggle3? "project project3 project-toggle" :"project project3"}
                // onMouseOver={() => video3.current.play()}
                // onMouseOut={() => video3.current.pause()}
            >
                <div className="content">
                    <div className="quote">
                        <h3>Manor Realty</h3>
                        <p>"Daniel played a pivotal role in the success of our recent project. His expertise in integrating a variety of third-party APIs enabled seamless automatic updates across our client's CRM and website platform. Daniel's excellent communication skills and extensive knowledge made working with him a pleasure, as he effortlessly tackled every task we presented. I highly recommend Daniel and the TYRO Creative team for their exceptional work."</p>
                        <p><i>-Josh Sprosen, Digital Lead (Brander)</i></p>
                    </div>
                    <div className="button-div">
                        <a href="https://www.manorrealty.co.nz" target="_blank">View Website</a>
                        {/* <a href="/case-studies/manor-realty">Read Case Study</a> */}
                    </div>
                </div>
                <div className="image">
                <video
                poster={ManorPoster}
                ref={video3}
                disablePictureInPicture
                title="Manor Realty Project"
                height="100%"
                width="100%"
                loop
                muted
                playsInline 
                preload="auto"
                type="video/mp4"
                style={{objectFit:"cover"}}
                >
                    <source src={Manor} type="video/mp4" />
                    <track src={captions} kind="captions" srclang="en" label="english_captions"></track>
                </video>
                </div>
            </div>
            <Link className="view-all" to="/projects#top">View All Projects</Link>
        </Wrapper>
    )
}