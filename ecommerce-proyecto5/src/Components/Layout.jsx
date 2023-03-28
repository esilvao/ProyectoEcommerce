import React from 'react'
import { Outlet } from "react-router-dom";
import Navigation from '../Router/Navegation/Navigation'
import Footer from '../Pages/footer/Footer'

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