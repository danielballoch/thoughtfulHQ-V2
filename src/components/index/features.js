import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
display: flex;
margin-top: 200px;
justify-content: center;
.content-left{
// background-color: green;
width: 35%;
height: fit-content;
position: sticky;
top: 100px;
margin-right: 40px;
margin-top: 50px;
margin-bottom: 50px;
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
        background-color: #D9D9D9;
        h3 {
            font-size: 50px;
            margin: 0;
        }
        .image {
            width: 100%;
            height: 300px;
            background-color: grey;
            padding: 20px;
            box-sizing: border-box;
        }
    }
    .content-small {
        background-color: #D9D9D9;
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
                <p>That means if your work with us:</p>
                <br></br>
                <p>1. Your project will be a priority.</p>
                <p>2. We’ll offer fair and competitive pricing.</p>
                <p>3. You'll get personalised service.</p>
                <p>4. We'll be responsive with communication.</p>
                <p>5. You'll own and have full control of your website.</p>
                <p>6. We'll offer advice if we can't take on your project.</p>
                <p>7. You'll be supporting us do what we love.</p>
                <p></p>
            </div>
            <div className="content-right">
                <div className="content-large">
                    <h3>WOW your Customers</h3>
                    <p>Don’t settle for a boring template. We create custom websites with interactive, immersive and intuitive design.</p>
                    <div className="image"></div>
                </div>
                <div className="content-large">
                    <h3>Responsive & Mobile Focused</h3>
                    <p>Approximately 58.67% website usage is mobile. Our websites work on all devices with a focus on turning users into buyers.</p>
                    <div className="image"></div>
                </div>
                <div className="content-large">
                    <h3>Keep customers in the loop</h3>
                    <p>Easy to use CMS systems for website updates. Automated CRM/Emails/SMS so customers feel acknowledged.</p>
                    <div className="image"></div>
                </div>
                <div className="content-small">
                    <div className="image"></div>
                    <div className="content">
                        <h4>Search Engine Optimization (SEO)</h4>
                        <p>All websites have search engine optimization based on your products, services, locations covered, competitors, and customers to make sure you stand out from the competition. </p>
                    </div>
                </div>
                <div className="content-small">
                    <div className="image"></div>
                    <div className="content">
                        <h4>Effective Copy Writing</h4>
                        <p>Written communication is at the core of advertising.. so we don’t skimp on the script. We work alongside you to figure out the right words to use so your customers buy.</p>
                    </div>
                </div>
                <div className="content-small">
                    <div className="image"></div>
                    <div className="content">
                        <h4>Secure Servers & Payment</h4>
                        <p>All websites have search engine optimization based on your products, services, service areas (current and planned), competitors, and customers.   </p>
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