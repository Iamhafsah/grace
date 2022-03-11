import React from 'react'
import ctl from '@netlify/classnames-template-literals'

const Home = () => {
  return (
    <div className={wrapStyle}>
        <p className={welcomeTextStyle}>
        👋🏽 &nbsp; Hello, I&apos;m Grace. A Product Designer based in Ontario, Canada.
        </p>

        <p className={messageStyle}>I create digital experiences that excite and are meaningful to humans & brands.</p>

    </div>
  )
}

const wrapStyle = ctl(`
    flex
    flex-col
    justify-center
    md:pl-[70px]
    pt-[173px]
`)
const welcomeTextStyle = ctl(`
    welcome-text
    text-gm-grey
    lg:text-[24px]
    text-[18px]
    mb-4
    font-medium
    animate-pop-out
`)
const messageStyle = ctl(`
    font-bold
    xl:text-[56px]
    lg:text-[44px]
    md:text-[40px]
    text-[32px]
    xl:max-w-[894px]
    md:max-w-[700px]
    leading-[130%]
    animate-pop-out
`)

export default Home