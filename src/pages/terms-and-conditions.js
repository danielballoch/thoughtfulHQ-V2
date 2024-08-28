import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"

const Wrapper = styled.div`
background-color: white;
position: relative;
z-index: 20;
.wrap {
  max-width: 900px;
  margin: auto;
  padding: 200px 0;
}
`

export default function TermsPage(){
  return(
    <Layout>
      <Wrapper>
        <div className="wrap">
          <h1>Terms and Conditions</h1>
          <h3>Application of Terms</h3>
          <p>These Terms apply to your use of the Website. By accessing and using the Website:<br/>
          a) you agree to these Terms; and<br/>
          b) where your access and use is on behalf of another person (e.g. a company), you confirm
          that you are authorized to, and do in fact, agree to these Terms on that person’s behalf
          and that, by agreeing to these Terms on that person’s behalf, that person is bound by
          these Terms.</p>
          <p>If you do not agree to these Terms, you are not authorized to access and use the Website, and you must immediately stop doing so.</p>
          <h2>Privacy</h2>
          <p>TYRO Creative ("us", "we", or "our") operates http://www.tyrocreative.co.nz (the "Site"). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site. We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy. Information Collection And Use While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name, email and phone number ("Personal Information").</p>
          <h3>Log Data:</h3>
          <p>Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").</p>
          <p>This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>
          <p>In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this.</p>
          <h3>Communications:</h3>
          <p>We may use your Personal Information to contact you in response to your inquiries or with newsletters, marketing or promotional materials and other information that will help keep you in the loop with our products, services and offerings.</p>
          <h3>Cookies:</h3>
          <p>Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.</p>
          <p>Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.</p>
          <h3>Security:</h3>
          <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
          <h3>Changes To This Privacy Policy:</h3>
          <p>This Privacy Policy is effective as of 30/12/2023 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.</p>
          <p>We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>
          <p>If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.</p>
          <h3>Contact Us:</h3>
          <p>If you have any questions about this Privacy Policy, please contact us.</p>
        </div>
      </Wrapper>
    </Layout>
  )
}


export const Head = () => (
  <>
    <html lang="en" />
    <title>Terms & Conditions</title>
    <meta name="description" content="Read our privacy policy and terms & conditions which apply on use of the website." />
  </>
)