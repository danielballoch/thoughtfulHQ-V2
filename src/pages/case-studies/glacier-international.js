import React from "react"
import Layout from "../../components/layout"
import styled from "@emotion/styled"

const Wrapper = styled.div`
max-width: 900px;
margin: 150px auto;
`

export default function TermsPage(){
  return(
    <Layout>
      <Wrapper>
        <h1>Glacier International</h1>
      </Wrapper>
    </Layout>
  )
}


export const Head = () => <title>Glacier International Case Study | thoughtfulHQ</title>