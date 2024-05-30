import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"



const Wrapper = styled.div`
padding-top: 200px;
padding-bottom: 100px;
display: flex;
flex-direction: column;
max-width: 960px;
width: 90vw;
margin: auto;
h1 {
    max-width: 1220px;
    font-weight: 100;
    font-size: 55px;
    color: #222;
}
p, a {
    font-size: 24px;
}
a {
    text-decoration: none;
    color: #635bff;
}

`


export default function Indexpage(){
  return(
    <Layout>
        <Wrapper>
        <h1>Thanks for reaching out!</h1>
        <p>Your form has been sent and I'll be in touch shortly.</p>
        <a href="/">Return to Homepage →</a>
        </Wrapper>
    </Layout>
  )
}

export const Head = () => (
  <>
    <html lang="en" />
    <title>Form Sent | thoughtfulHQ</title>
    <meta name="description" content="Web Design & Development services for New Zealand business owners. We service Hamilton, Auckland and can also work nationally/internationally."/>
  </>
)
