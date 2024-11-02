import React from 'react'
import Navbars from "../components/Navbars"
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <div>
      <Navbars/>
      <Outlet/>
    </div>
  )
}

export default RootLayout
