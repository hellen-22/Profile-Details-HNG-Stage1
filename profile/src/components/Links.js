import React from 'react'
import { Link } from 'react-router-dom'
import './../css/Link.css'

function Links() {
  return (
    <div className='links'>
        <div className='row'>
            <a href='https://twitter.com/wainainaHellen_' target='_blank' rel="noreferrer"><button className='btn btn-primary' id='btn__zuri'>Twitter</button></a>
        </div>
        <div className='row'>
            <a href='https://training.zuri.team/' target='_blank' rel="noreferrer"><button className='btn btn-primary' id='btn__zuri'>Zuri Team</button></a>
        </div>
        <div className='row'>
            <a href='http://books.zuri.team' target='_blank' rel="noreferrer"><button className='btn btn-primary' id='books'>Design and Coding Books</button></a>
        </div>
        <div className='row'>
            <a href='https://books.zuri.team/python-for-beginners?ref_id=HellenWainaina' target='_blank' rel="noreferrer"><button className='btn btn-primary' id='book__python'>Python Books</button></a>
        </div>
        <div className='row'>
            <a href='https://background.zuri.team' target='_blank' rel="noreferrer"><button className='btn btn-primary' id='pitch'>Background Checker for Coders</button></a>
        </div>
        <div className='row'>
            <a href='https://books.zuri.team/design-rules' target='_blank' rel="noreferrer"><button className='btn btn-primary' id='book__design'>Free Design Book</button></a>
        </div>
        <div className='row'>
            <a href='https://books.zuri.team/design-rules' target='_blank' rel="noreferrer"><button className='btn btn-primary' id='book__design'>Contact Me</button></a>
        </div>
    </div>
  )
}

export default Links