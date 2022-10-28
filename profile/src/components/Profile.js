import React from 'react'
import ProfileImage from './../images/image.png'
import './../css/Profile.css'

function Profile() {
  return (
    <div className='profile'>
      <img src={ProfileImage} alt='Profile' id='profile__img' className='img-thumbnail rounded-circle mb-3' style={{width: 150, height:150}}/>
      <h5 id='twitter'>@wainainaHellen_</h5>
      <h5 id='slack' hidden>Hellen Wainaina</h5>
    </div>
  )
}

export default Profile