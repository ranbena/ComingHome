module.exports = {
  siteMetadata: {
    title: `Coming Home`,
    description: ``,
    author: `@gatsbyjs`,
  },
  pathPrefix: `/cominghome`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/video-posts`,
        name: `videos`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
      {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `citytree`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `proza libre`,
          `assistant`
        ],
        display: 'swap'
      }
    }
  ],
}
