module.exports = {
  siteMetadata: {
    title: `Coming Home`,
    author: `@ranbena`,
    siteUrl: `http://citytree.net/cominghome`,
    description: `A video series that shares the “home-wisdom” of CityTree, an urban ecological learning center in the heart of Tel Aviv`,
    banner: `/og.jpeg`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
    facebook: `Coming Home`,
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
