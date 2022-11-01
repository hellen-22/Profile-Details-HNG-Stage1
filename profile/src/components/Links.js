import React from 'react'
import './../css/Link.css'

function Links() {
  return (
    <div className='links'>
        <div className='row'>
            <a href='https://training.zuri.team/' target='_blank' rel="noreferrer"><button className='btn btn-primary' id='btn__zuri'>Zuri</button></a>
        </div>
        <div className='row'>
            <a href='http://books.zuri.team' target='_blank' rel="noreferrer"><button className='btn btn-primary' id='books'>Design and Coding Books</button></a>
        </div>
        <div className='row'>
            <a href='https://books.zuri.team/python-for-beginners?ref_id=HellenWainaina' target='_blank' rel="noreferrer"><button className='btn btn-primary' id='book__python'>Python Book</button></a>
        </div>
        <div className='row'>
            <a href='https://background.zuri.team' target='_blank' rel="noreferrer"><button className='btn btn-primary' id='pitch'>Background Checker</button></a>
        </div>
        <div className='row'>
            <a href='https://books.zuri.team/design-rules' target='_blank' rel="noreferrer"><button className='btn btn-primary' id='book__design'>Free Design Book</button></a>
        </div>
    </div>
  )
}

export default Links