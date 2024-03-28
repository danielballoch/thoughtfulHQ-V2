import React from "react"
import styled from "@emotion/styled"
import ScrollAnimation from "./scrollAnimation"

const Wrapper = styled.div`
position: relative;
z-index: 10;
// filter: invert(100%);
height: calc(100vh - 120px);
display: flex;
background-color: white;
color: black;
justify-content: center;
align-items: center;
.center-content {
    max-width: 800px;
    text-align: center;
    margin: 20px;
    padding-bottom: 20px;
    h1 {
        font-size: 42px;
        font-weight: 600;
        margin-top: 0;
        margin-bottom: 20px;
    }
    p {
        max-width: 800px;
        margin: auto;
        font-size: 18px;
    }
}
`

export default function Hero(){
    return(
        <Wrapper >
            <div className="center-content">
                <h1>Hamilton Based Website Development</h1>
                <p>We help businesses: Look professional online → Simplify workflows → Increase profits.</p>
                <ScrollAnimation/>
            </div>
        </Wrapper>
    )
}