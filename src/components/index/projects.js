import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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
    width: 1200px;
    height: 400px;
    margin: 80px 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    .image {
        background-color: grey;
        width: 600px;
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
            margin-top: 20px;
            color: black;
            text-decoration: none;
        }
    }
}
`

export default function Projects(){
    return(
        <Wrapper>
            <div className="project">
                <div className="content">
                    <p>Testimonial or project breakdown: "Daniel delivered above and beyond for us with a highly professional end to end service. A high performance website was the delivered result which expressed clear communication to our customers about our product, services and a hassle free payment gateway as our main call to action for marketing. We enjoyed the development process and ongoing support is appreciated so thank you from myself and the Glacier International team."</p>
                    <a href="#">Read Case Study</a>
                </div>
                <div className="image"></div>
            </div>
            <div className="project">
                <div className="content">
                    <p>Testimonial or project breakdown: "Daniel delivered above and beyond for us with a highly professional end to end service. A high performance website was the delivered result which expressed clear communication to our customers about our product, services and a hassle free payment gateway as our main call to action for marketing. We enjoyed the development process and ongoing support is appreciated so thank you from myself and the Glacier International team."</p>
                    <a href="#">Read Case Study</a>
                </div>
                <div className="image"></div>
            </div>
            <div className="project">
                <div className="content">
                    <p>Testimonial or project breakdown: "Daniel delivered above and beyond for us with a highly professional end to end service. A high performance website was the delivered result which expressed clear communication to our customers about our product, services and a hassle free payment gateway as our main call to action for marketing. We enjoyed the development process and ongoing support is appreciated so thank you from myself and the Glacier International team."</p>
                    <a href="#">Read Case Study</a>
                </div>
                <div className="image"></div>
            </div>
            <a className="view-all" href="#">View All Projects</a>
        </Wrapper>
    )
}