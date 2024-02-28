import React, { useRef } from "react"
import styled from "@emotion/styled"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import GlacierVideo from "../../videos/GlacierVideo.mp4"
import CAVideo from "../../videos/CAVideo.mp4"
import Manor from "../../videos/Manor.mp4"

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 200px;
margin-bottom: 200px;
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
    margin-top: 20px;
    width: 80vw;
    color: white;
    text-decoration: none;
    :hover {
        background-color: #2b3035;
    }
}
.project {
    transition: .3s;
    :hover {
        transform: scale(1.05);
    }
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
        },
        { scope: text }
    );

    return(
        <Wrapper id="recent-projects" ref={text}>
            <h2  className="animate-text">Our Client Success Stories</h2>
            <div className="project"
                onMouseOver={() => video1.current.play()}
                onMouseOut={() => video1.current.pause()}
            >
                <div className="content">
                    <div className="quote">
                        <p>"Daniel delivered above and beyond for us with a highly professional end to end service. A high performance website was the delivered result which expressed clear communication to our customers about our product, services and a hassle free payment gateway as our main call to action for marketing. We enjoyed the development process and ongoing support is appreciated so thank you from myself and the Glacier International team."</p>
                        <p><i>-Malcom King, Glacier International</i></p>
                    </div>
                    <div className="button-div">
                        <a href="https://www.glacier.nz" target="_blank">View Website</a>
                        {/* <a href="/case-studies/glacier-international">Read Case Study</a> */}
                    </div>
                </div>
                <div className="image">
                <video
                poster="../images/project-posters/GlacierPoster.png"
                ref={video1}
                disablePictureInPicture
                id="BgVideo"
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
                </video>
                </div>
            </div>
            <div className="project"
                onMouseOver={() => video2.current.play()}
                onMouseOut={() => video2.current.pause()}
            >
                <div className="content">
                    <div className="quote">
                    <p>"Great communication throughout the whole process, very accommodating and helpful when working with a beginner like me!"</p>
                    <p><i>-Hamish Ross, Central Aero</i></p>
                    </div>
                    <div className="button-div">
                        <a href="https://www.centralaero.co.nz" target="_blank">View Website</a>
                        {/* <a href="/case-studies/central-aero">Read Case Study</a> */}
                    </div>
                </div>
                <div className="image">
                <video
                poster="../images/project-posters/CAPoster.png"
                ref={video2}
                disablePictureInPicture
                id="BgVideo"
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
                </video>
                </div>
            </div>
            <div className="project"
                onMouseOver={() => video3.current.play()}
                onMouseOut={() => video3.current.pause()}
            >
                <div className="content">
                    <div className="quote">
                    <p>Daniel played a pivotal role in the success of our recent project. His expertise in integrating a variety of third-party APIs enabled seamless automatic updates across our client's CRM and website platform. Daniel's excellent communication skills and extensive knowledge made working with him a pleasure, as he effortlessly tackled every task we presented. I highly recommend Daniel and the ThoughtfulHQ team for their exceptional work.</p>
                    <p><i>-Josh Sprosen, Brander (Design Agency)</i></p>
                    </div>
                    <div className="button-div">
                        <a href="https://www.manorrealty.co.nz" target="_blank">View Website</a>
                        {/* <a href="/case-studies/manor-realty">Read Case Study</a> */}
                    </div>
                </div>
                <div className="image">
                <video
                poster="../images/project-posters/ManorPoster.png"
                ref={video3}
                disablePictureInPicture
                id="BgVideo"
                title="Manor Realty"
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
                </video>
                </div>
            </div>
            <a className="view-all" href="/projects">View All Projects</a>
        </Wrapper>
    )
}