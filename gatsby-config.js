module.exports = {
  siteMetadata: {
    title: 'LiteTech',
    titleTemplate: "%s | Minecraft Server",
    author: 'Reese Gunardi',
    description: 'LiteTech is a technical 1.16 minecraft community.',
    url: "https://litetech.cf", // No trailing slash allowed!
    image: "/preview-image.jpg", // Path to your image you placed in the 'static' folder
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
