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
      <Projects/>
      <Features/>
      <Contact/>
    </Layout>
  )
}


export const Head = () => <title>Home Page</title>
