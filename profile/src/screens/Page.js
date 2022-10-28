import React from 'react'
import Profile from '../components/Profile'
import Links from '../components/Links'
import './../css/Page.css'

function Page() {
  return (
    <div className='container'>
        <Profile />
        <Links />
    </div>
  )
}

export default Page