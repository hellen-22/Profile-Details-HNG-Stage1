import React from 'react'
import './../css/Footer.css'
import Zuri from './../images/zuri.jpeg'
import i4g from './../images/i4g.jpg'

function Footer() {
  return (
    <div className='footer'>
        <hr></hr>
        <div className='row'>
            <div className='col-md-4 zuri'>
                <img src={Zuri} style={{width: 150, height:20}}/>
            </div>
            <div className='col-md-4 hng'>
                <p>HNG Internship 9 Frontend</p>
            </div>
            <div className='col-md-4 i4g'>
                <img src={i4g} style={{width: 100, height:20}}/>
            </div>
            
            
        </div>
    </div>
  )
}

export default Footer