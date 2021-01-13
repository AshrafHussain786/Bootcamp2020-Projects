import React from "react";
import Lolly from '../component/Lolly';


export default function LollyPage(lolly) {

  const {location, pageContext} = lolly;
  return (
    <div>

      <h5 className="sharableLinkContainer">Your sharable link: </h5>{" "}
      <span className="sharableLink">
        {" "}
        {`https://bootcamp-project12ee-ashraf.netlify.app${location.pathname}/`}
      </span>
      <div className="recievedContentContainer">
        <Lolly
          fillLollyTop={pageContext.lolly.flavourTop}
          fillLollyMiddle={pageContext.lolly.flavourMiddle}
          fillLollyBottom={pageContext.lolly.flavourBottom}
        />

        <div className="recievedTextContainer">
          <h3>HI {pageContext.lolly.recipientName}</h3>
          <p>{pageContext.lolly.message}</p>
          <h4>From: {pageContext.lolly.senderName}</h4>
        </div>
      </div>
    </div>
  );
}