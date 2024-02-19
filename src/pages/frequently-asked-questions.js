import React, {useState} from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import SupportForm from "../components/support-form"

const Wrapper = styled.div`
max-width: 900px;
margin: auto;
`

const ContentBox = styled.div`
width: 800px;
display: flex;
flex-direction: row;
margin-bottom: 10px;
/* border-radius: 10px; */
color: black;
:hover {
  cursor: pointer;
}
img {
    border-radius: 2px;
}
.toggle {
  display: none;
}
div {
    transition: .3s;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}
h3 {
    font-size: 20px;
    margin: 0;
    font-weight: 400;
}
.question {
    width: 100%;
    display: flex;
    margin: 10px 0;
    
    justify-content: space-between;
    /* align-items: center; */
    align-items: start;
}
.answer {
  margin: 20px 0;
  p {
    margin: 5px 0;
  }
}
.arrow {
  margin-top: 5px;
  transition: .2s;
  margin-left: 20px;
  height: 3px;
  width: 3px;
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
@media(max-width: 1000px){
    flex-direction: column;
    div {
        width: auto;
    }
}
@media(max-width: 940px){
    width: 100%;
}
`

const Questions = [
  {
  question: "Q1: How much does a website?", 
  answer: ["Website costs range from $2000-$8000+ according to the size and complexity of the project.","Initial meetings are always free.","Hosting costs can also vary.","A business marketing website will generally be $20 monthly, whereas a more complex Ecommerce or API heavy website could be more depending on the costs involved."]
  },
  {
  question: "Q2: What will we talk about in the initial meeting?", 
  answer: ["The initial call is for me to learn the basics of your business, your problems, goals and vision for a website so we can come to an agreed vision for the project or I can make a suggestion on your best path forward if not with thoughtfulHQ."]
  },
  {
    question: "Q3: How does the rest of the process look?", 
    answer: ["After the initial meeting I’ll send a short contract documenting what we’ve agreed. ","After that it depends on the project but generally wireframes and written content would be created first. ","Any API’s or technologies needed would also be researched and tested. ","Then design and development alongside each other. ","At each stage you’ll be kept in the loop and we’ll communicate to make sure the project is meeting your vision. "]
  },
  {
    question: "Q4: What type of businesses do you normally work with?", 
    answer: ["We’ve worked across a number of industries helping small-medium businesses get their brand online.","This includes Real Estate Agencies, Shuttle Businesses, Law Firms, Mobile Mechanics, Luxury Car Dealerships, Lawn Care and more.","Whether you're just starting out or have a large established business and want a new or upgraded website we would love to hear from you."]
  },
  {
    question: "Q5: What does owning my website mean?", 
    answer: ["Honesty, respect, and doing what’s best for our clients is at the core of thoughtfulHQ.","We don’t have lock-in contracts or force clients to continue to work with us for a set time.","Thus owning your website means:","1. You’ll always have full access to your website files upon request.","2. You can decide to host your website with anyone.","3. If you want another agency or contractor to work on or maintain your website we’ll cooperate fully."]
  },
  {
    question: "Q6: Do you offer hosting, support and maintenance?", 
    answer: ["Yes, while we don’t have lock in contracts, we would love to host your site and offer competitive per project pricing.","This is generally the easiest option especially for more complex websites. ","If you need updates to your website, you may be able to do these yourself if a CMS has been set up, otherwise more complex changes can be made at an agreed upon rate. "]
  },
  {
    question: "Q7: I already have an old website, can you just update it?", 
    answer: ["The short answer is yes.","If you have an old website and want additional content or functionality added the best thing to do is call or send us an email explaining the situation.","From there we can advise on your options, what they would cost and the pros and cons of each."]
  }
]

const Content = ({question, answer,i}) => {
  const [toggle, setToggle] = useState(true);
  return (
      <ContentBox  onClick={() => {setToggle(!toggle)}}>
          <div key={"question " + i}>
              <h3><p className="question">{question}<span className={toggle ? "arrow" : "arrow down"}/></p></h3>
              <div className={toggle ? "answer toggle" : "answer"}>
                  {answer.map((answer, i) => (
                    <p>{answer}</p>
                  ))}
              </div>
          </div>
      </ContentBox>
  )
} 

export default function FAQPage(){
  return(
    <Layout>
      <Wrapper>
        <h1>Frequently Asked Questions</h1>
        <p>It’s difficult to figure out who to work with for any project. We want happy customers and are open about our process, pricing and capabilities. Have a read below and if there’s anything you're unsure about don’t hesitate to give us a call, email or submit a form below.</p>
        <div className="faq"> 
          {Questions.map((question, i) => (
              <Content question={question.question} answer={question.answer} i={i}/>
          ))}
        </div>
        <SupportForm/>
      </Wrapper>
    </Layout>
  )
}


export const Head = () => <title>FAQ | thoughtfulHQ</title>