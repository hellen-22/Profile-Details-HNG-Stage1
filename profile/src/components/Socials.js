import React from 'react'
import "./../css/Socials.css"
import { FaGithub, FaSlack } from 'react-icons/fa'
import Slack from './../images/slack.jpg'
import Github from './../images/github.png'
import "./../css/Socials.css"

function Socials() {
  return (
    <div className='container'>
            <div className='d-flex justify-content-center'>
                <div className='slack'>
                    <a href='#'><img src={Slack} style={{width: 40, height:40}}/></a>
                </div>
                <div className='github'>
                    <a href='https://github.com/hellen-22'><img src={Github} style={{width: 40, height:40}} /></a>
                </div>
                
            </div>
    </div>
  )
}

export default Socials