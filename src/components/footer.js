import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
display: flex;
justify-content: center;
width: 100vw;
height: 500px;
background-color: black;
color: white;
.main-footer {
display: flex;
.section1, .section2, .section3, .section4 {
    display: flex;
    flex-direction: column;
    padding: 100px;
}
}
.bottom-footer {
    display: flex;
    justify-content: center;
    a {
        padding: 10px;
        margin: 20px 0;
    }
}
`

export default function Nav(){
    return(
        <Wrapper>
            <div>
                <div className="main-footer">
                    <div className="section1">
                        <div>Logo</div>
                        <div>Blurb</div>
                        <div className="socials-div">
                            <a>fb</a>
                            <a>insta</a>
                            <a>linkedin</a>
                        </div>
                    </div>
                    <div className="section2">
                        <a>Gatsby Partner</a>
                        <a>Google Partner</a>
                    </div>
                    <div className="section3">
                        <p><b>Navigation</b></p>
                        <a>Services</a>
                        <a>Recent Projects</a>
                        <a>FAQ</a>
                        <a>Contact</a>
                    </div>
                    <div className="section3">
                        <p><b>Contact</b></p>
                        <a>daniel@thoughtfulhq.com</a>
                        <a>+64 22 078 0868</a>
                    </div>
                </div>
                <div className="bottom-footer">
                    <a>© 2024  thoughtfulHQ</a>
                    <a>Terms & Conditons</a>
                    <a>Back to top</a>
                </div>
            </div>
        </Wrapper>
    )
}