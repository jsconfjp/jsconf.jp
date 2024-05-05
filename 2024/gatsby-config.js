module.exports = {
  graphqlTypegen: true,
  assetPrefix: `/2024`,
  pathPrefix: `/2024`,
  siteMetadata: {
    title: `JSConf JP`,
    description: `jsconf.jp is a JavaScript festival in Japan powered by Japan Node.js Association. This is the first event of jsconf in Japan. We would love to become a bridge between Japanese Web Developers and International Web Developers.`,
    author: `JSConf JP`,
    twitter: `jsconfjp`,
    siteUrl: `https://jsconf.jp`,
    ticketUrl: "", // "https://pretix.eu/jsconfjp/2024/",
    sponsorFormUrl: "", // `https://forms.gle/GHFbBciA22xP7Jd49`,
    cfpFormUrl: "",
    cfpDeadline: new Date("2023-09-30T23:59:59.999+0900"),
    previousFiscalYear: `2023`,
    enableSpeakers: false,
    enableVenue: false,
    enableSchedule: false,
    enableSponsors: false,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-zopfli`,
    `gatsby-plugin-brotli`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-NT6G523KSJ`,
        anonymize: true,
        respectDNT: true,
        defer: true,
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato:400,700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-external-links`,
        ],
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JSConf JP`,
        short_name: `JSConf JP`,
        start_url: `/2024/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ["**/*"],
      },
    },
    `gatsby-plugin-image`,
  ],
}
