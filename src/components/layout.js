import React from "react"
import Navbar from "./nav"
import Footer from "./footer"


export default function Layout({children}){
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}
