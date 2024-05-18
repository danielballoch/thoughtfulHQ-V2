import React from "react"
import Navbar from "./nav"
import Footer from "./footer"


// gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function Layout({children}){
  return (
    <div >
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}
