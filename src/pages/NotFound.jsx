import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-8xl font-bold">404</h1>
      <p> Sorry, we  find the page you're looking for.</p>
      <NavLink className="text-white px-4 py-2 rounded-3xl bg-blue-600" to={"/"}>
        Go back todas home
      </NavLink>
    </div>
  </div>
  )
}

export default NotFound