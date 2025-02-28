import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/navbar/Navbar'

function Applayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Applayout