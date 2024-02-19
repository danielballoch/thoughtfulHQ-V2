import React from "react"
import Layout from "../../components/layout"
import styled from "@emotion/styled"

const Wrapper = styled.div`
max-width: 900px;
margin: 150px auto;
`

export default function ManorRealty(){
  return(
    <Layout>
      <Wrapper>
        <h1>Manor Realty</h1>
      </Wrapper>
    </Layout>
  )
}


export const Head = () => <title>Manor Realty Case Study | thoughtfulHQ</title>