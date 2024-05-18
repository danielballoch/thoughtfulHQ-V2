import React, { useEffect } from "react"
import Layout from "../components/layout"
import Hero from "../components/index/hero"
import Services from "../components/index/services"
import Projects from "../components/index/projects"
import Features from "../components/index/features"
import Contact from "../components/index/contact"
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin( ScrollTrigger, ScrollSmoother);






export default function Indexpage(){

  // useEffect(() => {
  //   let smoother = ScrollSmoother.create({
  //     wrapper: '#smooth-wrapper',
  //     content: '#smooth-content',
  //     smooth: 2
  //   })
  // })
  return(
    <Layout  >
      {/* <div id="smooth-wrapper">
        <div id="smooth-content"> */}
          <Hero/>
          <Services/>
          <Features/>
          <Projects/>
          <Contact/>
        {/* </div>
      </div> */}
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
