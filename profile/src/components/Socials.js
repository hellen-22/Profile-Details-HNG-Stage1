import React from 'react'
import "./../css/Socials.css"
import Slack from './../images/slack.jpg'
import Github from './../images/github.png'
import "./../css/Socials.css"

function Socials() {
  return (
    <div className='container'>
            <div className='d-flex justify-content-center'>
                <div className='slack'>
                    <a href='Wainaina'><img src={Slack} style={{width: 40, height:40}} alt='Slack Icon'/></a>
                </div>
                <div className='github'>
                    <a href='https://github.com/hellen-22'><img src={Github} style={{width: 40, height:40}} alt='Github Icon'/></a>
                </div>
                
            </div>
    </div>
  )
}

export default Socials