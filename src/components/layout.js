import React, { useRef } from "react"
import Navbar from "./nav"
import Footer from "./footer"
import gsap from 'gsap'
// import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import styled from "@emotion/styled"
import { ReactLenis, useLenis } from 'lenis/react'

const Wrapper = styled.div` 
overflow-x: clip;
#smooth-content {
overflow-x: clip;
}
#smooth-wrapper {
  max-width: 100vw;
  overflow-x: clip;
}
`

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Layout({children}){

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  const main = useRef();
  // const smoother = useRef();

  // useGSAP(
  //   () => {
  //     // create the smooth scroller FIRST!
  //     smoother.current = ScrollSmoother.create({
  //       smooth: 2, // seconds it takes to "catch up" to native scroll position
  //       effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
  //     });
  //   },
  //   { scope: main }
  // );



  return (
    <Wrapper>
    <ReactLenis root>
        {/* <Navbar smoother={smoother}/> */}
        <Navbar/>
        <main>{children}</main>
        <Footer/>
    </ReactLenis>
    </Wrapper>
  )
}
