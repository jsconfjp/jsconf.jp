module.exports = {
  graphqlTypegen: true,
  pathPrefix: `/2024`,
  siteMetadata: {
    title: `JSConf JP`,
    description: `jsconf.jp is a JavaScript festival in Japan powered by Japan Node.js Association. This is the fifth time event of jsconf in Japan. We would love to become a bridge between Japanese Web Developers and International Web Developers.`,
    author: `JSConf JP`,
    twitter: `jsconfjp`,
    siteUrl: `https://jsconf.jp`,
    ticketUrl: "https://pretix.eu/jsconfjp/2024/",
    sponsorFormUrl: "https://forms.gle/1E7XC48NzH3Z52vN9",
    cfpFormUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLScWYqrnSqD-CTnJX6GATU8IzTk6qKwJyXb8GOoVD70EbGXbDA/viewform",
    cfpDeadline: new Date("2024-10-01T00:00:00.000+0900"),
    previousFiscalYear: `2023`,
    enableSpeakers: true,
    enableVenue: true,
    enableSchedule: true,
    enableSponsors: true,
  },
  plugins: [
    `gatsby-plugin-typescript`,
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
