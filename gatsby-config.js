module.exports = {
  pathPrefix: "/iscn-io",
  siteMetadata: {
    title: `ISCN`,
    description: `The goal of International Standard Content Number, abbreviated as ISCN, is to create a fundamental schema for a digital content registration.`,
    author: `@likecoin`,
    image: "/images/logo-white.png",
    url: "https://iscn.io",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-copy-files",
      options: {
        source: `${__dirname}/specs/images`,
        destination: "images",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `specs`,
        path: `${__dirname}/specs`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ISCN`,
        short_name: `iscn`,
        start_url: `/`,
        background_color: `#28646E`,
        theme_color: `#28646E`,
        display: `minimal-ui`,
        icon: `static/images/logo-white.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
