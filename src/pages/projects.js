import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const Wrapper = styled.div`
position: relative;

.wrap {
    margin: auto;
    max-width: 1110px;
}
background-color: white;
padding: 200px 0;
margin: auto;
z-index: 20;
h1 {
    font-size: 55px;
    font-weight: 100;
    margin-bottom: 50px;
    padding: 0 20px;
    text-align: center;
}
h3 {
    font-size: 22px;
    margin: 0;
}
.projects-wrapper {
    display: flex;
    flex-wrap: wrap;
    a {
        color: black;
    }
}
.project {
    margin: 10px;
    position: relative;
}
.image {
    max-width: 350px;
    height: 600px;
    background-color: grey;
    img {
        object-fit: cover!important;
        transition: .3s;
        transition-timing-function: ease-out;
        filter: brightness(.3);
    }
    :hover {
        img {
            transform: scale(1.1);
            filter: brightness(.7);
        }
        
    }
}
.content {
    color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px 30px;
}
@media(max-width: 1110px){
    .projects-wrapper {
        justify-content: center;
    }
}
@media(max-width: 370px){
    h1 {
        font-size: 40px;
    }
}
`

export default function Projectspage(){
  return(
    <Layout>
        <Wrapper>
            <div className="wrap">
                <h1>Explore Our Recent Client Projects</h1>
                <div className="projects-wrapper">
                    {/* <a target="_blank" href="https://www.instagram.com/purposefill.skips/" className="project"> */}
                    <a href="/Purpose-Fill-Social-Media" className="project">
                        {/* <div className="image"></div> */}
                        <StaticImage className="image" src="../images/project-images/purposefill2.png" alt="target" />
                        <div className="content">
                            <h3>Purpose Fill</h3>
                            <p>Social Media</p>
                        </div>
                    </a>
                    <a target="_blank" href="https://www.glacier.nz/" className="project">
                        {/* <div className="image"></div> */}
                        <StaticImage className="image" src="../images/project-images/glacierinternational.jpg" alt="target" />
                        <div className="content">
                            <h3>Glacier International</h3>
                            <p>Custom Ecommerce</p>
                        </div>
                    </a>
                    <a target="_blank" href="https://www.centralaero.nz/" className="project">
                        <StaticImage className="image" src="../images/project-images/centralaero.jpg" alt="target" />
                        <div className="content">
                            <h3>Central Aero</h3>
                            <p>Custom Solution</p>
                        </div>
                    </a>
                    <a target="_blank" href="https://manorrealty.co.nz/" className="project">
                        <StaticImage className="image" src="../images/project-images/manorrealty.jpg" alt="target" />
                        <div className="content">
                            <h3>Manor Realty / Brander</h3>
                            <p>Webflow Conversion + API Integration</p>
                        </div>
                    </a>
                    <a target="_blank" href="https://www.kokatahiaccomodation.co.nz/" className="project">
                        <StaticImage className="image" src="../images/project-images/kokatahi3.jpg" alt="target" />
                        <div className="content">
                            <h3>Kokatahi Accomodation</h3>
                            <p>Branding Website</p>
                        </div>
                    </a>
                    <a target="_blank" href="https://www.motoschool.co.nz/" className="project">
                        <StaticImage className="image" src="../images/project-images/motoschool.jpg" alt="target" />
                        <div className="content">
                            <h3>Motoschool</h3>
                            <p>Custom Ecommerce</p>
                        </div>
                    </a>
                    <a target="_blank" href="https://www.coastsweep.co.nz/" className="project">
                        <StaticImage className="image" src="../images/project-images/coastsweep.jpg" alt="target" />
                        <div className="content">
                            <h3>Coast Sweep</h3>
                            <p>Branding Website</p>
                        </div>
                    </a>
                    <a target="_blank" href="https://www.robquin.co.nz/" className="project">
                        <StaticImage className="image" src="../images/project-images/robquinlaw.jpg" alt="target" />
                        <div className="content">
                            <h3>Rob Quin Law</h3>
                            <p>Branding Website</p>
                        </div>
                    </a>
                    <a target="_blank" href="https://tech2u.nz/" className="project">
                        <StaticImage className="image" src="../images/project-images/tech2u.jpg" alt="target" />
                        <div className="content">
                            <h3>Tech2U</h3>
                            <p>Website Conversion + Hosting</p>
                        </div>
                    </a>
                    <a target="_blank" href="https://www.raglanlandscapesupplies.co.nz/" className="project">
                        <StaticImage className="image" src="../images/project-images/raglanlandscapesupplies.jpg" alt="target" />
                        <div className="content">
                            <h3>Raglan Landscape Supplies / Brander</h3>
                            <p>Material Calculater Script</p>
                        </div>
                    </a>
                </div>
            </div>
        </Wrapper>
    </Layout>
  )
}

export const Head = () => (
    <>
      <html lang="en" />
      <title>Client Projects | TYRO Creative</title>
      <meta name="description" content="Explore our recent New Zealand Web Design & Development projects."/>
    </>
  )