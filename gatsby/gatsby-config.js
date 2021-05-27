// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'Siyabulela',
    siteUrl: 'https://gatsby.pizza',
    description: 'Best pizza place in KwaDukuza',
    twitter: '@Siya_Khumalo18',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // the name of the plugin you're adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'flbvykkk',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-2282434311490598`,
      },
    },
  ],
};
