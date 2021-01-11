import React from "react"
import Lolly from "./Lolly"
import gql from "graphql-tag"
import Header from "./Header"
// import { Link } from "gatsby"
// import { useQuery } from "@apollo/client"

export const query = gql`
  query getLollyByPath($lollyPath: String!) {
    getLollyByPath(lollyPath: $lollyPath) {
      flavorBottom
      flavorMiddle
      flavorTop
      lollyPath
      message
      recipientName
      sendersName
    }
  }
`

export default function LollyPage({  data   }) {
  return (
    <div>
      <Header />
      <h5>Your sharable link: </h5>{" "}
      <span>
        {" "}
        {`https://bootcamp-project12ee-ashraf.netlify.app/lollies/${data.LOLLIES.getLollyByPath.lollyPath}`}
      </span>
      <Lolly
            fillLollyTop={data.LOLLIES.getLollyByPath.flavourTop}
            fillLollyBottom={data.LOLLIES.getLollyByPath.flavourBottom}
            fillLollyMiddle={data.LOLLIES.getLollyByPath.flavourMiddle}
        />

      <div>
          <h3>HI {data.LOLLIES.getLollyByPath.recipientName.toUpperCase()}</h3>
          <p>{data.LOLLIES.getLollyByPath.message}</p>
          <h4>From: {data.LOLLIES.getLollyByPath.sendersName}</h4>
        </div>
      </div>    
  )
}