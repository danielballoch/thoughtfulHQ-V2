import React from "react"
import styled from "@emotion/styled"
import GlacierVideo from "../../videos/GlacierVideo.mp4"
import CAVideo from "../../videos/CAVideo.mp4"
import Manor from "../../videos/Manor.mp4"

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 200px;
h2 {
    font-size: 50px;
}
.view-all {
    display: inline-block;
    background-color: #D9D9D9;
    padding: 20px 120px; 
    margin-top: 20px;
    color: black;
    text-decoration: none;
}
.project {
    display: flex;
    flex-direction: row-reverse;
    width: 1300px;
    height: 400px;
    margin: 80px 0;
    // box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    .image, video {
        background-color: grey;
        width: 700px;
        height: 400px;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 600px;
        height: 400px;
        p {
            max-width: 500px;
            text-align: center;
        }
        a {
            display: inline-block;
            background-color: #D9D9D9;
            padding: 15px 30px; 
            margin: 20px 10px 0;
            width: 155px;
            color: black;
            text-align: center;
            text-decoration: none;
        }
        .button-div {
            // display: flex;

        }
    }
}
`

export default function Projects(){
    return(
        <Wrapper id="recent-projects">
            <h2>Our Client Success Stories</h2>
            <div className="project">
                <div className="content">
                    <p>"Daniel delivered above and beyond for us with a highly professional end to end service. A high performance website was the delivered result which expressed clear communication to our customers about our product, services and a hassle free payment gateway as our main call to action for marketing. We enjoyed the development process and ongoing support is appreciated so thank you from myself and the Glacier International team."</p>
                    <p><i>-Malcom King, Glacier International</i></p>
                    <div className="button-div">
                        <a href="https://www.glacier.nz" target="_blank">View Website</a>
                        <a href="/case-studies/glacier-international">Read Case Study</a>
                    </div>
                </div>
                <div className="image">
                <video
                disablePictureInPicture
                id="BgVideo"
                title="Glacier International Project"
                height="100%"
                width="100%"
                loop
                muted
                autoPlay={true}
                playsInline 
                preload="auto"
                type="video/mp4"
                style={{objectFit:"cover"}}
                >
                    <source src={GlacierVideo} type="video/mp4" />
                </video>
                </div>
            </div>
            <div className="project">
                <div className="content">
                    <p>"Great communication throughout the whole process, very accommodating and helpful when working with a beginner like me!"</p>
                    <p><i>-Hamish Ross, Central Aero</i></p>
                    <div className="button-div">
                        <a href="https://www.centralaero.co.nz" target="_blank">View Website</a>
                        <a href="/case-studies/central-aero">Read Case Study</a>
                    </div>
                </div>
                <div className="image">
                <video
                disablePictureInPicture
                id="BgVideo"
                title="Central Aero Project"
                height="100%"
                width="100%"
                loop
                muted
                autoPlay={true}
                playsInline 
                preload="auto"
                type="video/mp4"
                style={{objectFit:"cover"}}
                >
                    <source src={CAVideo} type="video/mp4" />
                </video>
                </div>
            </div>
            <div className="project">
                <div className="content">
                    <p>insert testimonial</p>
                    <p><i>-Josh Sprosen, Brander (Design Agency)</i></p>
                    <div className="button-div">
                        <a href="https://www.manorrealty.co.nz" target="_blank">View Website</a>
                        <a href="/case-studies/manor-realty">Read Case Study</a>
                    </div>
                </div>
                <div className="image">
                <video
                disablePictureInPicture
                id="BgVideo"
                title="Manor Realty"
                height="100%"
                width="100%"
                loop
                muted
                autoPlay={true}
                playsInline 
                preload="auto"
                type="video/mp4"
                style={{objectFit:"cover"}}
                >
                    <source src={Manor} type="video/mp4" />
                </video>
                </div>
            </div>
            <a className="view-all" href="#">View All Projects</a>
        </Wrapper>
    )
}