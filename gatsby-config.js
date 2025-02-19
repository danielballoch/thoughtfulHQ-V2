require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `thoughtfulhq`,
    siteUrl: `https://www.thoughtfulhq.com`
  },
  plugins: [ 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap",
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/favicon.png"
    }
  }, "gatsby-transformer-sharp",
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      defaults: {
        formats: [`auto`, `webp`],
        placeholder: `dominantColor`,
        quality: 100,
        breakpoints: [750, 1080, 1366, 1920],
        backgroundColor: `transparent`,
        tracedSVGOptions: {},
        blurredOptions: {},
        jpgOptions: {},
        pngOptions: {},
        webpOptions: {},
        avifOptions: {},
      }
    }
  },
  {
    resolve: `gatsby-plugin-clarity`,
    options: {
      // String value for your clarity project id
      // Project id is found in your clarity dashboard url
      // https://clarity.microsoft.com/projects/view/{clarity_project_id}/
      clarity_project_id: "oqffxxuyes",
      // Boolean value for enabling clarity while developing
      // true will enable clarity tracking code on both development and production environments
      // false will enable clarity tracking code on production environment only
      enable_on_dev_env: true,
    },
  },
  {
    resolve: `gatsby-plugin-facebook-pixel`,
    options: {
      pixelId: "2297367860596536",
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },{
    resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-VLY5VJMNS3", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          delayOnRouteUpdate: 0,
        },
      },
  }]
};