import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import ogImage from "../images/bg.jpg"
import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                property: `og:title`,
                content: "LiteTech",
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: `https://litetech.cf/${ogImage}`,
              },
            ]}
          >
            <html lang="en" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
