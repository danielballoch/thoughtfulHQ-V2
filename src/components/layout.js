import React, { useRef } from "react"
import Navbar from "./nav"
import Footer from "./footer"
import gsap from 'gsap'
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
#smooth-wrapper {
  max-width: 100vw;
  overflow-x: clip;
  
}
`

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Layout({children}){

  const main = useRef();
  const smoother = useRef();

  useGSAP(
    () => {
      // create the smooth scroller FIRST!
      smoother.current = ScrollSmoother.create({
        smooth: 2, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      });
    },
    { scope: main }
  );



  return (
    <Wrapper>
    <div id="smooth-wrapper" ref={main}>
      <div id="smooth-content">
        {/* <Navbar smoother={smoother}/> */}
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </div>
    </div>
    </Wrapper>
  )
}
