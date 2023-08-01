import React from "react"
import logo1 from "../assets/f-logo.png"
import "./header.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>

          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
              <i class='fab fa-facebook-f' />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
              <i class='fab fa-twitter' />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
              <i class='fab fa-instagram' />
            </a>
            <a href="https://www.linkedin.com/in/lokinder007/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i class='fab fa-linkedin-in' />
            </a>
          </div>

          <div className='f-img'>
            <img src={logo1} alt='' />

            {/* <img src={logo1} alt='' /> */}
            {/* <h1 style={{ color: "white" }}>Loki007</h1> */}
          </div>

          Copyright &copy; {new Date().getFullYear()}. ReactApp |
          {""} All rights reserved | Powered by {""}
          <a
            href="https://www.google.com" target="_blank" rel="noopener noreferrer"
            // style={{ cursor: "pointer", color: "yellow" }}

            title="Visit The Site"
          >
            Lokinder007
          </a>

          {/* <a style={{ color: "yellow", ":hover": { color: "red" } }}>Link Text</a> */}

        </div>
      </footer>
    </>
  )
}

export default Footer
