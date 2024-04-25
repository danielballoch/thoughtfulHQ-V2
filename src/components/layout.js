import React from "react"
import Navbar from "./nav"
import Footer from "./footer"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Layout({children}){
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}
