import React from "react"
import Layout from "../components/layout"
import Hero from "../components/index/hero"
import Services from "../components/index/services"
import Projects from "../components/index/projects"
import Features from "../components/index/features"
import Contact from "../components/index/contact"

export default function Indexpage(){
  return(
    <Layout>
      <Hero/>
      <Services/>
      <Features/>
      <Projects/>
      <Contact/>
    </Layout>
  )
}

export const Head = () => (
  <>
    <html lang="en" />
    <title>Web Design & Development, Hamilton, New Zealand | thoughtfulHQ</title>
    <meta name="description" content="Web Design & Development services for New Zealand business owners. We service Hamilton, Auckland and can also work nationally/internationally."/>
  </>
)
