import React from 'react'
import { Navbar } from './Navbar'

export const Layout = ({children}) => {
  return (
    <div className='min-h-screen'>
        <Navbar/>
        {children}
    </div>
  )
}
