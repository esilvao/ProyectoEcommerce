import React from 'react'
import { Outlet } from "react-router-dom";
import Navigation from '../../Router/Navigation/Navigation'
import Footer from '../footer/Footer'

const Layout = () => {
  return (
    <div id="todo">
    <Navigation />
    <Outlet />
    <Footer />
</div>
  )
}

export default Layout