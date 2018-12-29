import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo-pacifico-white.png'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
        <div className="HeaderGroup">
          <Link to="/">
            <button className="btnBack">Volver a la cartera </button>
          </Link>
          <div className="HeaderTitle">
              <img src={logo} height="20"/>
              <h1 className="bar-title">Asesoría ViP: Tomás Durrieu</h1>
          </div>
          <Link to="/stop">
            <button className= "btnStop">Detener asesoría ViP</button>
          </Link>
        </div>
    </div>
)

export default Header
