import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
/* Button */
@keyframes btn-glow {
  0% {
    background-position: 0 100%;
  }
  100% {
    background-position: 0 300%;
  }
}

.btn {
// margin-top: 40px;
  position: relative;
  display: inline-block;
  border-radius: 20px;
  color: white;
  font-size: 20px;
//   font: 500 20px / 1 "Chivo Mono", monospace;
//   letter-spacing: 0.075em;
  text-decoration: none;
  text-align: center;
  transition: .3s;
  :hover {
     .btn__background:after {
        opacity: 0.4;
     }
  }
  &__inner {
    padding: 1px;
    position: relative;
    z-index: 2;
    display: block;
    overflow: hidden;
    border-radius: inherit;

    &:before {
      position: absolute;
      inset: 4px;
      z-index: 1;

      display: block;

      animation: btn-glow 5s infinite linear;
      background: linear-gradient(
          20deg,
          #00f8f1,
          #ffbd1e20 16.5%,
          #fe848f 33%,
          #fe848f20 49.5%,
          #00f8f1 66%,
          #00f8f160 85.5%,
          #ffbd1e 100%
        )
        0 100% / 100% 200%;
      border-radius: inherit;
      filter: blur(5px);
      mix-blend-mode: overlay;
      opacity: 0;
      transition: opacity 0.2s linear 0.1s;
      content: "";
    }
  }

  &__label {
    position: relative;
    
    display: block;
    overflow: hidden;
    padding: 0.95em 2.5em 0.9em;
    border-radius: inherit;
    color: transparent;
    white-space: nowrap;

    &:before,
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;

      display: block;
      padding-top: .9em;
    //   padding: inherit;
      width: 100%;
      height: 100%;

      color: white;
      white-space: nowrap;

      transition: transform 0.3s cubic-bezier(1, 0, 0, 1) 0s;
    }

    &:before {
      transform: translate3d(0, 0, 0);

      content: attr(data-label);
    }

    &:after {
      transform: translate3d(0, -100%, 0);

      content: attr(data-hover);
    }
    
    &__background {
      position: absolute;
      inset: -100px;

      display: block;

      background: #093740 url("https://assets.codepen.io/5817405/noise_2.png");
      background-blend-mode: overlay;

      animation: noise-background 0.5s steps(1) infinite;
    }
  }

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    display: block;
    width: 100%;
    height: 100%;

    border-radius: inherit;

    &:before,
    &:after {
      position: absolute;
      inset: 0;

      display: block;

      border-radius: inherit;

      content: "";
    }

    &:before {
      background: white;
      transition: background 0.3s linear 0s;
    }

    &:after {
      animation: btn-glow 5s infinite linear;
      background: linear-gradient(
          -20deg,
          #00f8f1,
          #00f8f120 16.5%,
          #00f8f1 33%,
          #00f8f110 49.5%,
          #00f8f1 66%,
          #00f8f100 85.5%,
          #00f8f1 100%
        )
        0 100% / 100% 200%;

      filter: blur(5px);
      opacity: 0;
      transition: opacity 0s linear 0s;
    }
  }

   .btn__background {
      &:before {
        background: #635bff;
        transition: background 0.07s linear;
      }

      &:after {
        opacity: 0.1;
        transition: opacity 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
      }
    }

    .btn__inner {
      &:before {
        opacity: 0.5;
      }
    }
}

`

export default function Button(){
    return (
        <Wrapper>
            <a href="/contact" class="btn">
           
                <span class="btn__inner">
                    <span class="btn__label" data-label="Book Discovery Call">
                    Book Discovery Call
                    </span>
                </span>
                <span class="btn__background"></span>
            </a>
        </Wrapper>
    )
}