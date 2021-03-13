import React from "react";
import Lolly from '../component/Lolly';

export default function LollyPage(lollies) {

  const {location, pageContext} = lollies;
  return (
    <div>

      <h5 className="sharableLinkContainer">Share this lolly link to your friend: </h5>{" "}
      {/* <span className="sharableLink">
        {" "}        
        {`https://bootcamp-project12ee-ashraf.netlify.app${location.pathname}/`}
      </span>
      <div className="recievedContentContainer">
        <Lolly
          fillLollyTop={pageContext.lollies.flavourTop}
          fillLollyMiddle={pageContext.lollies.flavourMiddle}
          fillLollyBottom={pageContext.lollies.flavourBottom}
        />

        <div className="recievedTextContainer">
          <h3>HI {pageContext.lollies.recipientName}</h3>
          <p>{pageContext.lollies.message}</p>
          <h4>From: {pageContext.lollies.senderName}</h4>
        </div>
      </div> */}
    </div>
  );
}