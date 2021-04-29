module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Project-12e: Virtual Lolly `,
    author: `@Ashraf`,
  },
  plugins: [
    // Simple config, passing URL
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "lolly",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "Lollies",
        // Url to query from        
         url: `https://bootcamp-project12ee-ashraf.netlify.app/.netlify/functions/vLolly`,
      },
    }
  ],
}
// FaunaDB 
// https://dashboard.fauna.com/collections/Lollies/@db/LollyDB