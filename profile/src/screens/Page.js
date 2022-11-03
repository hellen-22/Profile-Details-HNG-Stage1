import React from 'react'
import Profile from '../components/Profile'
import Links from '../components/Links'
import Footer from '../components/Footer'
import Socials from '../components/Socials'
import './../css/Page.css'

function Page() {
  return (
    <>
      <div className='container'>
        <div className='container'>
          <Profile />
          <Links />
        </div>
      </div>
        <Socials />
      <div className='container'>
        <Footer />
      </div>
    </>
  )
}

export default Page