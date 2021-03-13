module.exports = {
  plugins: [
    // Simple config, passing URL
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "lollies",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "Lollies",
        // Url to query from
         url: "https://bootcamp-project12ee-ashraf.netlify.app/.netlify/functions/vLolly",
      },
    }
  ],
}
