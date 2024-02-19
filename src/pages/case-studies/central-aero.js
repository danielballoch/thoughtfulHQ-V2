import React from "react"
import Layout from "../../components/layout"
import styled from "@emotion/styled"

const Wrapper = styled.div`
max-width: 900px;
margin: 150px auto;
`

export default function CentralAero(){
  return(
    <Layout>
      <Wrapper>
        <h1>Central Aero</h1>
      </Wrapper>
    </Layout>
  )
}


export const Head = () => <title>Central Aero Case Study | thoughtfulHQ</title>