import React, {useRef} from "react"
import Layout from "../../components/layout"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from "gatsby"


const Wrapper = styled.div`
padding-top: 150px;
.shoot2-title {
font-size: 50px;
}
.content1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: auto;
    h1 {
        font-size: 50px;
        margin-top: 0;
    }
    .content-left {
    width: 500px;
    margin-right: 60px;
    }
    .content-right {
    width: 710px;
    p {
    color: #7E7575;
    text-align: center;
    }
    }
}
.content2 {
    padding-top: 100px;
    display: flex;
    justify-content: center;
    // align-items: center;
    width: 90%;
    margin: auto;
    h1 {
        font-size: 50px;
        margin-top: 0;
    }
    .content-left2 {
    width: 710px;
    margin-right: 60px;
    p {
    color: #7E7575;
    text-align: center;
    }
    }
    .content-right2 {
  
    width: 500px;
    
    }
    .content-pin-wrap {
      position: sticky;
      top: calc(50% - 180px);
    }
}
.content3 {
width: 90%;
 max-width: 1270px;
  // max-width: 1200px;
font-size: 18px;
  padding: 100px 100px;
  display: flex;
  flex-direction: column;
  // width: 1270px;
  margin: auto;
  .stats {
    display: flex;
    flex-direction: column;;
    ul {
      display: flex;
      flex-direction: row;
      margin-top: 0;
      li {
        width: 33%;
        font-size: 18px;
      }
    }
  }
}
  .content4 {
  max-width: 1400px;
  margin: auto;
   padding-bottom: 100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  a {
    padding: 1.5px;
  transition: .3s;
  :hover {
  filter: brightness(75%);
  }
  }
  img {
  width: 220px;
  }
  }
  .content5 {
  
  display: flex;
  padding-bottom: 100px;
  justify-content: center;
    a {
    text-decoration: none;
    margin: 0 20px;
    }
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: black;
      color: white;
      width: 450px;
      height: 70px;
    }
      .right {
      background-color: #343A40;
      }
  }
.content2-mobile {
display: none;
}
@media(max-width: 1050px){
.content1 {
  margin-top: 50px;
  flex-direction: column;
     .content-left {
    width: 100%;
    margin-right: 0;
    }
    .content-right {
    width: 100%;
    }
}
.content2 {
display: none;
}
.content2-mobile {
padding-top: 50px;
display: flex;
width: 90%;
margin: auto;
flex-direction: column-reverse;
.content2-left-mobile {
padding-top: 50px;
.gatsby-image-wrapper {
width: 100%!important;
}
img {
object-fit: contain!important;
}
 p {
    color: #7E7575;
    text-align: center;
    }
}
}

.content3 {
width: 90%;
padding: 100px 0;
  .stats {
    ul{
      display: flex;
      flex-direction: column;
      li {
        width: fit-content;
      }
    }
  }
}

.content4 {
a {
max-width: 49%;
height: fit-content;
}
img {
width: 100%;
object-fit: contain!important;
}
}

.content5 {
display: flex;
flex-direction: column;
.btn {
width: unset;
}
.right {
margin-top: 20px;
}
}

}
`


export default function Indexpage(){

  // const contenttopin = useRef();
    // useGSAP(
    //     () => {
    //         console.log("hello");
    //         gsap.to(".content-right2", {
    //           scrollTrigger: {
    //             trigger: ".content-right2",
    //             pin: true,
    //             start: "225px center",
    //             // end: "1100px center",
    //             end: "bottom-=220px center",
    //             scrub: true,
    //           },
    //         })
    //     },
    //     { scope: contenttopin }
    // );

  return(
    <Layout>
        <Wrapper 
        // ref={contenttopin}
        >
            <div className="content1"> 
                <div className="content-left">
                    <h1>Fresh Social Media </h1>
                    <h2>Creating Content for Waikato Locals - Purpose Fill Waste Management </h2>
                    <p><b>Brief:</b> Paul and Anne’s goal is to make Purpose Fill the best Waste Management business in New Zealand.</p>
                    <p>They’re already providing high quality services, at great prices, and with excellent customer service, but struggle finding time to keep their Social Media at the standard they want.</p>
                    <p>After already doing some work on <a target="_blank" href="https://www.purposefill.co.nz">www.purposefill.co.nz</a> Anne asked me about helping here too and I was excited to with the opportunity! </p>
                </div>
                <div className="content-right">
                    <StaticImage src="../../images/projects/purposefill/Directors2.jpg" alt="A dinosaur" />
                    <p>*Purpose Fill Owners Paul & Anne with Truck Driver Glen</p>
                </div>
            </div>
            <div className="content2"> 
                <div className="content-left2">
                    <StaticImage src="../../images/projects/purposefill/Frame.png" alt="A dinosaur" />
                    <p>*Social Media Research & Post Creation</p>
                </div>
                <div className="content-right2">
                    <div className="content-pin-wrap">
                      <p><b>Process:</b> First I <b>researched</b> local competitors, similar international companies, adjacent businesses and other brands with great social media. I also dug into the Purpose Fill website and all content already online around their services and brand.</p>
                      <p>Then I did a ride along <b>photography/videography session</b> with one of their friendly truck drivers.</p>
                      <p>This gave me a base of knowledge and content to create <b>NEW posts</b> which would: </p>
                      <ul>
                        <li><b>Give Purpose Fill a professional online presence.</b></li>
                        <li>Show they are credible, responsive, reliable and value their customers.</li>
                        <li><b>Advertise products and services simply with clear next steps and calls to action.</b></li>
                      </ul>
                      <p>Posts were created with a mix of Adobe Suite products and Figma before being uploaded to the company google drive, drafted & scheduled on their Meta Social Media account after review.</p>
                    </div>
                </div>
            </div>
            {/* mobile content 2  */}
            <div className="content2-mobile"> 
                <div className="content2-left-mobile">
                    <StaticImage src="../../images/projects/purposefill/Frame.png" alt="A dinosaur" />
                    <p>*Social Media Research & Post Creation</p>
                </div>
                <div className="content2-right-mobile">
                    <div>
                      <p><b>Process:</b> First I researched local competitors, similar international companies, adjacent businesses and other brands with great social media. I also dug into the Purpose Fill website and all content already online around their services and brand.</p>
                      <p>Then I did a ride along photography/videography session with one of their friendly truck drivers.</p>
                      <p>This gave me a base of knowledge and content to create NEW posts which would: </p>
                      <ul>
                        <li>Give Purpose Fill a professional online presence.  </li>
                        <li>Indirectly show they are credible, responsive, reliable and value their customers.</li>
                        <li>Advertise products and services simply with clear next steps and calls to action.</li>
                      </ul>
                      <p>Posts were created with a mix of Adobe Suite products and Figma before being uploaded to the company google drive, drafted & scheduled on their Meta Social Media account after review.</p>
                    </div>
                </div>
            </div>
            <div className="content3">
              <p><b>Initial Results:</b></p>
              <div className="stats">
                <div>
                  <ul>
                    <li>9 Photo/Carousal Posts</li>
                    <li>4 Reel Posts</li>
                    <li>111 Likes/Reactions</li>
                  </ul>
                </div>
                <div >
                  <ul>
                    <li>555 Average reel view count</li>
                    <li><b>4631 Unique views (organic reach)</b></li>
                    <li><b>Increased Content Interaction rate by 83.5%</b></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content4">
              <a target="_blank" href="https://www.instagram.com/p/DArZECFqvPu/"><StaticImage src="../../images/projects/purposefill/1.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/p/DAHcxT5Bc41/"><StaticImage src="../../images/projects/purposefill/2.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/p/DAAQqqTCP1L/"><StaticImage src="../../images/projects/purposefill/3.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/p/C_jZmPrvc8T/?img_index=1"><StaticImage src="../../images/projects/purposefill/4.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/p/C_cNi20sI5M/?img_index=1"><StaticImage src="../../images/projects/purposefill/5.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/p/C_RYEvrp9-i/"><StaticImage src="../../images/projects/purposefill/6.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/p/C_1bJ3QAaYn/"><StaticImage src="../../images/projects/purposefill/7.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/purposefill.skips/reel/DA9aoZgv72R/"><StaticImage src="../../images/projects/purposefill/8Update.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/p/C_uPF4uMtmk/"><StaticImage src="../../images/projects/purposefill/9.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/p/C_KL_Zlo5ag/?img_index=1"><StaticImage src="../../images/projects/purposefill/10.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/p/C-_Wbh1tprj/"><StaticImage src="../../images/projects/purposefill/11.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/p/C-4KaicNn-o/"><StaticImage src="../../images/projects/purposefill/12.png" alt="A dinosaur" /></a>
            </div>

            <div className="content5">
              <Link to="/contact"><div className="btn">Book Discovery Call</div></Link>
              <Link to="/projects"><div className="btn right">Explore All Projects</div></Link>
            </div>

            <div className="content1">
              <div className="content-left">
                <h1>Bigger, Brighter & More Personality:</h1>
                <h2>Purpose Fill Shoot 2</h2>
                <p><b>Feedback:</b> while happy with the work, Anne did give me some feedback and instruction for the next shoot.</p>
                <ul>
                  <li>Photos & video needed to be brighter.</li>
                  <li>Show more of the drivers and team.</li>
                  <li>Focus on commercial projects/building sites & home skip bins.</li>
                </ul>
                <p>Brightness was an easy adjustment to make and with the other needs front of mind I set out for the day.</p>
                <p>Check out the results below!</p>
              </div>
              <div className="content-right">
                    <StaticImage src="../../images/projects/purposefill/Angel.png" alt="A dinosaur" />
                    <p>*Purpose Fill employee Angel who was very friendly!</p>
                </div>
            </div>
            
            <div className="content3">
              <p><b>Results:</b></p>
              <div className="stats">
                <div>
                  <ul>
                    <li>11 Posts (Carousals/Reels)</li>
                    <li><b>Over 13,100+ views (Paid Ads)</b></li>
                    <li>5 More Employees Shown</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="content4">
              <a target="_blank" href="https://www.instagram.com/tyrocreativenz/"><StaticImage src="../../images/projects/purposefill/secondshoot/Shoot2_5.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/purposefill.skips/p/DDqeIE3vcaF/"><StaticImage src="../../images/projects/purposefill/secondshoot/Shoot2_7.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/purposefill.skips/p/DDYclA_o5Fl/"><StaticImage src="../../images/projects/purposefill/secondshoot/Shoot2_8.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/purposefill.skips/p/DC7leyrp7i5/"><StaticImage src="../../images/projects/purposefill/secondshoot/Shoot2_2.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/purposefill.skips/reel/DC0ZhpNB2-9/"><StaticImage src="../../images/projects/purposefill/secondshoot/Shoot2_10Update.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/purposefill.skips/p/DCiX3sMiIhB/"><StaticImage src="../../images/projects/purposefill/secondshoot/Shoot2_3.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/purposefill.skips/p/DDfom6ns94S/"><StaticImage src="../../images/projects/purposefill/secondshoot/Shoot2_4.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/purposefill.skips/p/DCpj69CKEFZ/"><StaticImage src="../../images/projects/purposefill/secondshoot/Shoot2_6.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/purposefill.skips/p/DDGbAXYM7jW/"><StaticImage src="../../images/projects/purposefill/secondshoot/Shoot2_11.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/purposefill.skips/p/DDxqKH9tEG3/"><StaticImage src="../../images/projects/purposefill/secondshoot/Shoot2_1.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/purposefill.skips/reel/DDNnH9Hiz94/"><StaticImage src="../../images/projects/purposefill/secondshoot/Shoot2_9Update.png" alt="A dinosaur" /></a>
              <a target="_blank" href="https://www.instagram.com/tyrocreativenz/"><StaticImage src="../../images/projects/purposefill/secondshoot/Shoot2_12.png" alt="A dinosaur" /></a>
            </div>

            <div className="content5">
              <Link to="/contact"><div className="btn">Book Discovery Call</div></Link>
              <Link to="/projects"><div className="btn right">Explore All Projects</div></Link>
            </div>
        </Wrapper>
    </Layout>
  )
}

export const Head = () => (
  <>
    <html lang="en" />
    <title>Purpose Fill Social Media | TYRO Creative</title>
    <meta name="description" content="Web Design & Development services for New Zealand business owners. We service Hamilton, Auckland and can also work nationally/internationally."/>
  </>
)