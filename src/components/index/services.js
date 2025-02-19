import React, { useRef } from "react"
import { Link } from 'gatsby'
import styled from "@emotion/styled"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

const Wrapper = styled.div`
position: relative;
z-index: 10;
display: flex;
flex-wrap: wrap;
padding: 200px 0 100px 0;
background-color: white;
// background-color: #282617;
justify-content: center;
align-items: center;
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
.service-box {
    // width: 20%;
    border: 1px solid rgba(0,0,0,0.2);
    padding: 0 20px;
    min-height: 400px;
    opacity: 0;
    // background-color: #f8f8f8;
    color: black;
    text-decoration: none;
    margin: 0 10px;
    transition: .3s;
    // height: fit-content;
    // box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    .image {
        width: 440px;
        height: 200px;
        padding: 4px;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        min-height: 290px;
        max-width: 440px;
        padding: 40px 20px;
        box-sizing: border-box;
        h2 {
            font-weight: 200;
            // text-decoration: underline;
            // border-bottom: 1px solid rgba(0,0,0,0.2);
        }
        p {
            font-size: 15px;
            :first-of-type {
                padding-top: 20px;
            }
            :last-of-type {
                padding-bottom: 20px;
            }
        }
        a {
            // font-weight: bold;
            font-size: 17px;
            display: inline-block;
            // background-color: #D9D9D9;
            // padding: 15px 30px; 
            margin-top: 20px;
            color: #001F40;
            text-decoration: none;
        }
    }
    :hover {
        cursor: pointer;
        transform: translateY(-3%);
        filter: brightness(98%);
        // background: linear-gradient(-45deg, #FFFF66, #50C878, #0080FF);
        // background-size: 400% 400%;
        // animation: gradient 3s ease infinite;
        
    }
    // :hover:first-of-type {
    //     background-color: #FFFF66;
    // }
    // :hover:nth-of-type(2) {
    //     background-color: #50C878;
    // }
    // :hover:nth-of-type(3) {
    //     background-color: #0080FF;
    // }
}
@media(max-width: 1192px){
    .content {
        min-height: 322px!important;
    }
}
@media(max-width: 982px){
    flex-direction: column;
    padding: 100px 0;
    .service-box {
        margin-bottom: 80px;
    }
}
`
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Services(){
    const main = useRef();
    const { contextSafe } = useGSAP({scope: main});

    const onHoverGood = contextSafe((service) => {
        gsap.to(service, {duration: .1, y: -45});
    })
    const onLeaveGood = contextSafe((service) => {
        gsap.to(service, {duration: .1, y: -40});
    })
    
    useGSAP(
        () => {
          const boxes = gsap.utils.toArray('.service-box');
          boxes.forEach((box) => {
            gsap.to(box, {
                y: -40,
                opacity: 1,
              scrollTrigger: {
                trigger: box,
                start: '50% bottom',
                end: 'top 50%',
                // scrub: true,
              },
            });
          });
        },
        { scope: main }
    );

    return(
        <Wrapper id="services" ref={main}>
            <Link to="/contact" className="service-box service1" onMouseEnter={() => onHoverGood(".service1")} onMouseLeave={() => onLeaveGood(".service1")}>
                {/* <div className="image"><StaticImage src="../../images/Motoschool.png" alt="A dinosaur" /></div> */}
                <div className="content">
                    <h2>Branding Websites</h2>
                    <p>Want to impress clients, land more jobs, and create a home-base for future marketing with a new website?</p>
                    <p>We would love to get to know your business and create something which speaks your customers language, shows the services you provide, and makes it a no-brainer to get in touch.</p>
                    <a href="/contact">Learn More →</a>
                </div>
            </Link>
            <Link to="/contact" className="service-box service2" onMouseEnter={() => onHoverGood(".service2")} onMouseLeave={() => onLeaveGood(".service2")}>
                {/* <div className="image"><StaticImage src="../../images/Glacier.png" alt="A dinosaur" /></div> */}
                <div className="content">
                    <h2>Ecommerce Websites</h2>
                    <p>Take your store online with our professional ecommerce solutions. We design sleek, responsive websites that not only look great but are optimized for performance and conversions.</p>
                    <a href="/contact">Learn More →</a>
                </div>
            </Link>
            <Link to="/contact" className="service-box service3" onMouseEnter={() => onHoverGood(".service3")} onMouseLeave={() => onLeaveGood(".service3")}>
                {/* <div className="image"><StaticImage src="../../images/CA.png" alt="A dinosaur" /></div> */}
                <div className="content">
                    <h2>Social Media / Photography</h2>
                    <p>Want to get your business on brand and looking slick across the socials? We offer Content Creation and Social Media Management services to highlight what's special about your business and get more customers in the door!</p>
                    <p>This includes photography, videography, reels, captions, scheduled posts, strategy etc.</p>
                    {/* <p>This includes photography, videography, reels, captions, scheduled posts, strategy etc.</p> */}
                    <a href="/contact">Learn More →</a>
                </div>
            </Link>
            {/* <Link to="/contact" className="service-box service4" onMouseEnter={() => onHoverGood(".service4")} onMouseLeave={() => onLeaveGood(".service4")}>
                <div className="content">
                    <h2>Custom Development</h2>
                    <p>Many businesses depend on repetitive, headache causing tasks and you might have the sense some of these can be automated.</p>
                    <p> If you want to figure out what can be off-loaded to software to save time, money and stress, or are interested in other services such as API integration, CMS, CRM setup get in touch!</p>
                    <a href="/contact">Learn More →</a>
                </div>
            </Link> */}
        </Wrapper>
    )
}