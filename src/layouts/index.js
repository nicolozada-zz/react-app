import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div>
    <div className="Hero">
        <div className="HeroGroup">
        <button class="btnBack">Volver a la cartera</button>
        <div>
            <img src="../images/logo-pacifico-white.png"/>
            <h1 class="bar-title">Asesoría ViP: Tomás Durrieu</h1>
        </div>
        <button class= "btnStop">Detener asesoría ViP</button>
        </div>
    </div>
</div>
    
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
