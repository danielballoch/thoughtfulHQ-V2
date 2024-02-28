import React from "react"
import styled from "@emotion/styled"
import ScrollAnimation from "./scrollAnimation"

const Wrapper = styled.div`
// filter: invert(100%);
height: calc(100vh - 120px);
display: flex;
// background-color: black;
color: black;
justify-content: center;
align-items: center;
.center-content {
    max-width: 760px;
    text-align: center;
    margin: 20px;
    padding-bottom: 20px;
    h1 {
        font-size: 50px;
        font-weight: 200;
        margin-top: 0;
        margin-bottom: 20px;
    }
    p {
        max-width: 600px;
        margin: auto;
    }
}
`

export default function Hero(){
    return(
        <Wrapper >
            <div className="center-content">
                <h1>Websites built for your needs.</h1>
                <p>we study your business & competitors &#8594; create a unique solution with you &#8594; take feedback onboard &#8594; improve the website & launch &#8594; provide hosting, active support & upgrades on request</p>
                <ScrollAnimation/>
            </div>
        </Wrapper>
    )
}