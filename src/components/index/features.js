import React from "react"
import styled from "@emotion/styled"
import GlacierFeatures from "../../videos/GlacierMenu.mp4"
import CMSFeatures from "../../videos/CMSUpdate.mp4"
import CAFeatures from "../../videos/CAFeatures.mp4"

const Wrapper = styled.div`
display: flex;
justify-content: center;
padding: 200px 0;

// background: hsla(211, 100%, 13%, 1);
// background: radial-gradient(circle, hsla(211, 100%, 13%, 1) 0%, hsla(0, 0%, 0%, 1) 100%);
// background: -moz-radial-gradient(circle, hsla(211, 100%, 13%, 1) 0%, hsla(0, 0%, 0%, 1) 100%);
// background: -webkit-radial-gradient(circle, hsla(211, 100%, 13%, 1) 0%, hsla(0, 0%, 0%, 1) 100%);
// filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#001F40", endColorstr="#000000", GradientType=1 );

background: #8E0E00;  /* fallback for old browsers */
background: -webkit-radial-gradient(circle, #635bff, #0076CE);  /* Chrome 10-25, Safari 5.1-6 */
background: radial-gradient(circle,  #635bff,#0076CE); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



.content-left{
// background-color: green;
width: 35%;
height: fit-content;
position: sticky;
top: 100px;
margin-right: 40px;
margin-top: 50px;
margin-bottom: 50px;
color: white;
h2 {
    font-size: 45px;
    font-weight: 200;
}
}
.content-right {
    width: 40%;
    .content-large {
        text-align: center;
        padding: 40px;
        margin: 40px 0;
        background-color: #f8f8f8;
        h3 {
            font-size: 50px;
            margin: 0;
        }
        .image {
            width: 100%;
            height: 300px;
            background-color: grey;
            // padding: 20px;
            box-sizing: border-box;
        }
    }
    .content-small {
        background-color: #f8f8f8;
        margin: 40px 0;
        display: flex;
        .image {
            flex-basis: 200px;
            width: 200px;
            height: 200px;
            background-color: grey;
        }
        .content {
            h4 {
                font-size: 25px;
                margin: 0;
            }
            display: flex;
            padding: 10px;
            flex-direction: column;
            justify-content: center;
            width: 80%;
        }
    }
}
`

export default function Features(){
    return(
        <Wrapper>
            <div className="content-left">
                <h2>Sick of feeling like just another number??</h2>
                <p><b>We're a small business and don't bite off more than we can chew.</b></p>
                <p>That means if you work with us:</p>
                <br></br>
                <p>1. Your project will be a <b>priority.</b></p>
                <p>2. We’ll offer <b>fair and competitive pricing.</b></p>
                <p>3. You'll own and have full control of your website.</p>
                <p>4. We'll be <b>responsive with communication.</b></p>
                <p>5. You'll be supporting us do what we love.</p>
                {/* <p>1. Your project will be a priority.</p>
                <p>2. We’ll offer fair and competitive pricing.</p>
                <p>3. You'll get personalised service.</p>
                <p>4. We'll be responsive with communication.</p>
                <p>5. You'll own and have full control of your website.</p>
                <p>6. We'll offer advice if we can't take on your project.</p>
                <p>7. You'll be supporting us do what we love.</p> */}
                <p></p>
            </div>
            <div className="content-right">
                <div className="content-large">
                    <h3>WOW your Customers</h3>
                    <p>Don’t settle for a boring template! We create beautiful custom websites with intuitive layouts, sensible imagery, and eye-catching animation.</p>
                    <div className="image">
                    <video
                    disablePictureInPicture
                    id="BgVideo"
                    title="Glacier International Project"
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
                        <source src={GlacierFeatures} type="video/mp4" />
                    </video>
                    </div>
                </div>
                <div className="content-large">
                    <h3>Responsive & Mobile Focused</h3>
                    <p>Approximately 58.67% website usage is mobile. Our websites have the same focus of turning users into buyers on all devices.</p>
                    <div className="image">
                    <video
                    disablePictureInPicture
                    id="BgVideo"
                    title="Glacier International Project"
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
                    </video>
                    </div>
                </div>
                <div className="content-large">
                    <h3>Easy Updates</h3>
                    <p>Easy to use CMS systems for website updates. Automated CRM/Emails/SMS so customers always know the important stuff.</p>
                    <div className="image">
                    <video
                    disablePictureInPicture
                    id="BgVideo"
                    title="Glacier International Project"
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
                    </video>
                    </div>
                </div>
                <div className="content-small">
                    <div className="image"></div>
                    <div className="content">
                        <h4>Search Engine Optimization (SEO)</h4>
                        <p>Our websites use the latest SEO best practises direct from google to make sure your business, services and products stand out from the competition.</p>
                    </div>
                </div>
                <div className="content-small">
                    <div className="image"></div>
                    <div className="content">
                        <h4>Effective Copy Writing</h4>
                        <p>Written communication is key in turning leads into customers.. so we don’t skimp on the script. We work with you to select the best words to use on each page to land your ideal clients.</p>
                    </div>
                </div>
                <div className="content-small">
                    <div className="image"></div>
                    <div className="content">
                        <h4>Secure Servers & Payments</h4>
                        <p>SLL Certificates & HTTPS are provided on all website so your users know they're safe browsing your website.</p>
                    </div>
                </div>
                <div className="content-small">
                    <div className="image"></div>
                    <div className="content">
                        <h4>Amazing Site Performance</h4>
                        <p>We use the latest stable tools & technologies. When revamping websites we’ve consistently seen google performance audits go from scores of 50-70 out of 100 to over 95+</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}