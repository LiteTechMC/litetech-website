module.exports = {
  siteMetadata: {
    title: 'LiteTech',
    author: 'Reese Gunardi',
    description: 'A website for the LiteTech Minecraft Server. The website uses the Dimension Gatsby Starter template by HTML5 UP',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon-circle.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
