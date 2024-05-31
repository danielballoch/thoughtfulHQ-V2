import React, { useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import ResponsiveVideo from "../../videos/res.mp4"
import CMSFeatures from "../../videos/CMSF.mp4"
import CAFeatures from "../../videos/CAFeatures.mp4"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import captions from "file-loader!../../videos/captions.vtt"

const Wrapper = styled.div`
position: relative;
z-index: 10;
display: flex;
justify-content: center;
padding: 200px 0;
clip-path: inset(0 0 0 0);
overflow: clip;
// background: hsla(211, 100%, 13%, 1);
// background: radial-gradient(circle, hsla(211, 100%, 13%, 1) 0%, hsla(0, 0%, 0%, 1) 100%);
// background: -moz-radial-gradient(circle, hsla(211, 100%, 13%, 1) 0%, hsla(0, 0%, 0%, 1) 100%);
// background: -webkit-radial-gradient(circle, hsla(211, 100%, 13%, 1) 0%, hsla(0, 0%, 0%, 1) 100%);
// filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#001F40", endColorstr="#000000", GradientType=1 );

background: #8E0E00;  /* fallback for old browsers */
// background: -webkit-radial-gradient(circle, #635bff, #006bba); 
// background: radial-gradient(circle,  #635bff,#006bba); 

background: -webkit-radial-gradient(circle, #766fff,#0060a6); 
background: radial-gradient(circle,  #766fff,#0060a6); 



.content-left{
// background-color: green;
width: 35%;
height: fit-content;
position: sticky;
top: calc(50vh - 271px - 10px);
margin-right: 40px;
margin-top: 50px;
margin-bottom: 50px;
color: white;
h2 {
    font-size: 45px;
    font-weight: 200;
}
p {
    font-size: 20px;
}
.chew-text {
    font-size: 20px;
}
.mobile-show {
    display: none;
}
}
.vcrop {
    transform: scale(1.01);
}
.content-right {
    border-radius: 40px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: #343a40;
    // padding: 0 40px;
    width: 40%;
    
    .content-large {
        border-radius: 20px;
        // :nth-of-type(3) {
        //     border-radius: 0 0 20px 20px;
        // }
        // :first-of-type {
        //     border-radius: 20px 20px 0 0;
        // }
        text-align: center;
        padding: 40px;
        margin: 20px;
        background-color: #f8f8f8;
        h3 {
            font-size: 50px;
            margin: 0;
        }
        .image {
            transform: scale(2) translateY(130px);
            width: 100%;
            height: auto;
            // padding: 20px;
            box-sizing: border-box;
            overflow: hidden;
            video {
                object-fit: contain!important;
            }
        }
    }
    .content-small {
        border-radius: 20px;
        transform: scale(2) translateY(130px);
        background-color: #f8f8f8;
        margin: 20px;
        height: 140px;
        display: flex;
        .image {
            display: flex;
            justify-content: center;
            align-items: center;
            // flex-basis: 200px;
            // width: 100px;
            margin: 0 20px;
            img {
                width: 80%;
                overflow: none;
                margin: auto;
            }
            // height: 200px;
            // background-color: grey;
        }
        .content {
            h4 {
                font-size: 25px;
                margin: 0;
            }
            p {
                margin-bottom: 0;
                margin-top: 0;
            }
            display: flex;
            padding: 20px 0;
            flex-direction: column;
            justify-content: center;
            width: 80%;
        }
    }
}
@media(max-width: 900px){
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
    .content-left {
        position: relative;
        box-sizing: border-box;
        top: unset;
        width: 90%;
        margin: 0 40px;
        padding: 40px 20px;
        .mobile-hide {
            display: none;
        }
        .mobile-show {
            display: block;
        }
        h2 {
            font-size: 55px;
        }
        p {
            font-size: 16px;
        }
    }
    .content-right {
        box-sizing: border-box;
        width: 90%;
        .image {
            height: auto!important;
        }
        video {
            object-fit: contain!important;
            height: auto;
        }
    }
    .content-large {
        h3 {
            font-size: 40px!important;
        }
    }
    .content-small {
        height: fit-content!important;
        .content {
            padding: 20px 20px 20px 0!important;
            h4 {
                font-size: 20px!important;
                margin-bottom: 10px!important;
            }
        }
    }
}
`

export default function Features(){
    const featurebox = useRef();

    let mm = gsap.matchMedia();
   
    useEffect(() => {
        console.log("update??")
    },[])

    useGSAP(
        () => {
            console.log("hello")
          let boxes = gsap.utils.toArray('.image');
          const boxAdd = gsap.utils.toArray('.content-small')
          boxes.forEach((box) => {
            gsap.to(box, {
                duration: 1,
                y: 0,
                scale: 1,
              scrollTrigger: {
                trigger: box,
                start: 'top bottom',
                end: 'top 50%',
                scrub: true
              },
            });
          });
          boxAdd.forEach((box) => {
            gsap.to(box, {
                duration: 1,
                y: 0,
                scale: 1,
              scrollTrigger: {
                trigger: box,
                start: '-300px bottom',
                end: 'top 50%',
                scrub: true
              },
            });
          });
          mm.add("(min-width: 900px)", () => {

            gsap.to(".content-left", {
                scrollTrigger: {
                  trigger: ".content-left",
                  start: '50% 38%',
                  end: '1900px 50%',
                  pin: true,
                  scrub: true
                },
              })

          })
        },
        { scope: featurebox }
    );
    return(
        <Wrapper ref={featurebox}>
            <div className="content-left">
                <h2>Sick of<br className="mobile-show"/> feeling like <br /><i>just another number??</i></h2>
                <p className="chew-text"><b>We're a small business and don't bite off more <br className="mobile-hide"/>than we can chew.</b></p>
                
                <br></br>
                <p><b>That means, if you work with us:</b></p>
                <p>1. Your project will be a <b>priority.</b></p>
                <p>2. We’ll offer <b>fair and competitive pricing.</b></p>
                <p>3. You'll own and have full control of your website.</p>
                <p>4. We'll be <b>responsive with communication.</b></p>
                <p>5. You'll be supporting us do what we love.</p>
                <p></p>
            </div>
            <div className="content-right">
                <div className="content-large">
                    <h3>WOW your Customers</h3>
                    <p>Don’t settle for a boring template! We create beautiful custom websites with intuitive layouts, sensible imagery, and eye-catching animation.</p>
                    <div className="image">
                    <video
                    disablePictureInPicture
                    title="Wow Customers Video"
                    height="100%"
                    width="100%"
                    loop
                    muted
                    autoPlay={true}
                    playsInline 
                    preload="auto"
                    type="video/mp4"
                    style={{objectFit:"cover"}}
                    >
                        <source src={CAFeatures} type="video/mp4" />
                        <track src={captions} kind="captions" srclang="en" label="english_captions"></track>
                    </video>
                    </div>
                </div>
                <div className="content-large">
                    <h3>Responsive Design</h3>
                    <p>Approximately 58.67% website usage is mobile. Our websites have the same focus of turning users into buyers on all devices.</p>
                    <div className="image">
                    <video
                    className="vcrop"
                    disablePictureInPicture
                    title="Responsive Design Video"
                    height="100%"
                    width="100%"
                    loop
                    muted
                    autoPlay={true}
                    playsInline 
                    preload="auto"
                    type="video/mp4"
                    style={{objectFit:"cover"}}
                    >
                        <source src={ResponsiveVideo} type="video/mp4" />
                        <track src={captions} kind="captions" srclang="en" label="english_captions"></track>
                    </video>
                    </div>
                </div>
                <div className="content-large">
                    <h3>Easy Updates</h3>
                    <p>Simple interfaces for website updates. Automated CRM/Emails/SMS so customers are never left confused or guessing.</p>
                    <div className="image">
                    <video
                    disablePictureInPicture
                    title="Easy Updates Video"
                    height="100%"
                    width="100%"
                    loop
                    muted
                    autoPlay={true}
                    playsInline 
                    preload="auto"
                    type="video/mp4"
                    style={{objectFit:"cover"}}
                    >
                        <source src={CMSFeatures} type="video/mp4" />
                        <track src={captions} kind="captions" srclang="en" label="english_captions"></track>
                    </video>
                    </div>
                </div>
                <div className="content-small">
                    <div className="image">
                    <StaticImage src="../../images/seoicon.png" alt="target" />
                    </div>
                    <div className="content">
                        <h4>Search Engine Optimization (SEO)</h4>
                        <p>Our websites use the latest SEO best practises direct from google to make sure your business, services and products stand out from the competition.</p>
                    </div>
                </div>
                <div className="content-small">
                    <div className="image">
                    <StaticImage src="../../images/copyicon.png" alt="book & pen" />
                    </div>
                    <div className="content">
                        <h4>Effective Copy Writing</h4>
                        <p>Written communication is key in turning leads into customers.. so we don’t skimp on the script. We work with you to select the best words to use on each page to land your ideal clients.</p>
                    </div>
                </div>
                <div className="content-small">
                    <div className="image">
                    <StaticImage src="../../images/securityicon.png" alt="padlock" />
                    </div>
                    <div className="content">
                        <h4>Secure Servers & Payments</h4>
                        <p>SLL Certificates & HTTPS are provided on all website so your users know they're safe browsing your website.</p>
                    </div>
                </div>
                <div className="content-small">
                    <div className="image">
                    <StaticImage src="../../images/performanceicon.png" alt="graph" />
                    </div>
                    <div className="content">
                        <h4>Amazing Site Performance</h4>
                        <p>We use the latest stable tools & technologies. When revamping websites we’ve consistently seen google performance audits go from scores of 50-70 out of 100 to over 95+</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}