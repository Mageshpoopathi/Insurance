import React from "react";
import { AiFillHome } from "react-icons/ai";
const Dashboard=()=>{
    return(
        <>
        <input placeholder="Search"></input>
        <div id="Insurance-Container">
                <sapn>Health Insurance</sapn>
                <AiFillHome/>
                <span>$67898</span>
        </div>
         <div id="Insurance-Container">
                <sapn>Health Insurance</sapn>
                <AiFillHome/>
                <span>$67898</span>
        </div>
         <div id="Insurance-Container">
                <sapn>Auto Insurance</sapn>
                <AiFillHome/>
                <span>$67898</span>
        </div>
         <div id="Insurance-Container">
                <sapn>Home Insurance</sapn>
                <AiFillHome/>
                <span>$67898</span>
        </div>

        <div>
            <span>Policy portfolio State</span>
        </div>
          <div>
            <span>Claims Ratio</span>
        </div>
        </>
    )
}
export default Dashboard;