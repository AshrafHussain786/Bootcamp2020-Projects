import React from "react";
import Header from "../component/Header";
import Lolly from '../component/Lolly';
import { navigate } from "gatsby";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <div className="listLollies">
        <div>
          <Lolly fillLollyTop="#d52358" fillLollyMiddle="#e95946" fillLollyBottom="#deaa43"  />
        </div> 
        <div>
          <Lolly fillLollyTop="red" fillLollyMiddle="green" fillLollyBottom="blue"  />
        </div>  
      </div>
      <input type="button" value="Create New Lolly"
        onClick={
          ()=>{
            navigate("/CreateNew");
          }
        }
      ></input>
    </div>
  )
}
