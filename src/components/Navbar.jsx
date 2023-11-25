
import React from 'react'
import { FaBitcoin } from "react-icons/fa";

const Navbar = () => {
  return (
<nav className="navbar  bg-info  ">
  <div className="container-fluid d-flex justify-content-center align-items-center  ">
    <span className="navbar-brand  h1  text-light  fs-2 "> <FaBitcoin/> Todo Redux </span>
  </div>
</nav>
  )
}

export default Navbar
