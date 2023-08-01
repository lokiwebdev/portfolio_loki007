import React, { useState } from "react"
import "./header.css"
import logo from "../assets/h-logo.png"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 300)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            {/* <img src={logo} alt="" /> */}

            <Link className="logo " to="/">
              <img src={logo} alt="logo" className="logoImg" />
              <h2>
                <span>L</span>oki<span>007</span>
              </h2>
            </Link>

          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <NavLink to='/projects'>Projects</NavLink>
              </li>
              <li>
                <NavLink to='/features'>features</NavLink>
              </li>
              <li>
                <NavLink to='/portfolio'>portfolio</NavLink>
              </li>
              <li>
                <NavLink to='/resume'>resume</NavLink>
              </li>
              <li>
                <NavLink to='/clients'>clients</NavLink>
              </li>
              <li>
                <NavLink to='/blog'>blog</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>contact</NavLink>
              </li>
              <li>
                <button className='home-btn'>BUY NOW</button>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
