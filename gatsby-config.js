/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Rebecca Monroy - Java Developer Portfolio",
    description: "Portfolio of Rebecca Monroy, an Oracle Certified Java SE 17 Professional and Salesforce Developer with expertise in Spring Boot, AWS, and microservices.",
    author: "Rebecca Monroy",
    keywords: "Java developer, Salesforce developer, Spring Boot, portfolio, software engineer",
  },
  plugins: [
    "gatsby-plugin-offline",
     /* other plugins */
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-WPPLG6N1S3",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Rebecca Monroy Portfolio",
        short_name: "Rebecca Monroy",
        start_url: "/",
        background_color: "#1a3c34",
        theme_color: "#a3d9c9",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
  ],
};