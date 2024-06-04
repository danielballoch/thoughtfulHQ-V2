import React, {useRef, useEffect, useState} from "react"
import styled from "@emotion/styled"
import { useForm } from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha";
import { navigate } from "gatsby";


const FormDiv = styled.div`
max-width: 100%;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
/* background-color: #543C3C; */
/* height: 800px; */
background-size: contain;
background-position: center;
background-filter: brightness(10%);
form {
    max-width: 600px;
    padding-right: 100px;
    width: 90vw;
    min-height: 500px;
    height: 100%;
    max-height: 800px;
    background-color: white;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .select-style {
        background-color: white;
        padding: 5px;
        border: solid 1px black;
        :hover {
            cursor: pointer;
        }
    }
    .button-style {
        margin-top: 40px;
        padding: 20px;
        background-color: black;
        color: white;
        border: none;
        border-radius: 15px;
        font-size: 14px;
        font-weight: 600;
        transition: .3s;
        :hover {
            cursor: pointer;
            background-color: #635bff;
        }
    }
    option:hover {
        cursor: pointer;
    }
    h2 {
        margin-top: 0;
    }
    label {
        font-weight: 600;
        margin-top: 50px;
        margin-left: 10px;
        margin-bottom: 4px;
    }
    textarea {
        height: 100px;
        resize:vertical;
    }
    input, textarea {
        font-size: 20px;
        padding: 15px;
        border-radius: 15px;
        border: 1px solid rgba(0,0,0,0.1);
        transition: .3s;
    }
    input:hover, textarea:hover {
        border: 1px solid rgba(0,0,0,0.5);
    }
    input:focus-visible, textarea:focus-visible {
        border: 1px solid rgba(0,0,0,0.5);
        outline: 0;
    }
    .names-wrapper {
        display: flex;
        justify-content: space-between;
    }
    .name-section {
        display: flex;
        flex-direction: column;
        width: 49%;
    }
}
@media(max-width: 1280px){
    form {
        padding-right: 0!important;
    }
    
}
@media(max-width: 500px){
    .names-wrapper {
        flex-direction: column;
    }
    .name-section {
        width: 100%!important;
    }
}
`



export default function ContactElectrical(){

    ///need to reformat dates here before adding to state, or do in useEffect

    const reRef = useRef();
    const [serverState, setServerState] = useState({formSent: false});




    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()


      async function onSubmit(data){
        // const reRef = useRef<>();
        const token = await reRef.current.executeAsync();
        reRef.current.reset();
        fetch("/api/postmark-form", {
          method: `POST`,
          body: JSON.stringify({
            first: data.First,
            last: data.Last,
            email: data.Email,
            phone: data.Phone,
            message: data.Message,
            token,
        }),
          headers: {
            "content-type": `application/json`,
          },
        })
          .then(res => res.json())
          .then(body => {
            console.log(`response from API:`, body);
          })
          .then(setServerState({formSent: true}))
      }
      console.log({ errors })
      useEffect(() => {
          if (serverState.formSent === true) {
            navigate("/contact-success/");
            setTimeout(() => {
                setServerState({
                    formSent: false
                })
            }, 3000)
          }
      })

  return (
            <FormDiv>
                <ReCAPTCHA 
                    sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY} 
                    size="invisible"
                    ref={reRef} 
                />
                <form onSubmit={handleSubmit(onSubmit)} autocomplete="on">
                    <div className="names-wrapper">
                        <div className="name-section">
                            <label htmlFor="first">First name:*</label>
                            <input
                                placeholder="Your first name"
                                id="first"
                                type="text" 
                                name="first" 
                                required  
                                {...register("First", { required: true, maxLength: 100 })} 
                            />
                        </div>
                        <div className="name-section">
                            <label htmlFor="last">Last name:*</label>
                            <input
                                placeholder="Your last name"
                                id="last"
                                type="text" 
                                name="last" 
                                required  
                                {...register("Last", { required: true, maxLength: 100 })} 
                            />
                        </div>
                    </div>
                    
                    <label htmlFor="email">Contact email:*</label>
                    <input
                        placeholder="Your email address"
                        id="email"
                        type="email" 
                        name="email" 
                        required  
                        {...register("Email", { required: true, maxLength: 100 })} 
                    />
                    <label htmlFor="phone">Phone number:</label>
                    <input
                        placeholder="Your phone number"
                        id="phone"
                        type="text" 
                        name="phone" 
                        required  
                        {...register("Phone", { required: true, maxLength: 100 })} 
                    />
                    <label htmlFor="message">Tell me about your project/goals:*</label>
                    <textarea
                        placeholder="Your business, goals, challenges etc"
                        id="message"
                        type="text" 
                        name="message" 
                        required  
                        {...register("Message", { required: true, maxLength: 100 })} 
                    />
         
                    <button
                        type="submit" 
                        className="g-recaptcha button-style"
                        data-sitekey="site_key"
                        data-callback='onSubmit'
                        data-action='submit'
                    >
                    Send Message</button>
                </form>
            </FormDiv>
  )
}