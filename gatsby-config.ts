import type { GatsbyConfig } from "gatsby";
import path from "path";
const config: GatsbyConfig = {
  siteMetadata: {
    title: `Ryan Ali | Portfolio`,
    siteUrl: `https://ryan-ali.onrender.com`,
  },
  flags: {
    PARTIAL_HYDRATION: false,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-react-helmet"],
};

export default config;
