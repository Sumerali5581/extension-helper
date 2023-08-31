import React from "react";
import Base1 from "../components/Base1";
import './User.css';
import {Link as ReactLink} from "react-router-dom"
const UserDashboard=()=>{
    return(
        <Base1>
        <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>

        <div>
        
        
<section className="info">
    <div className="info1" >
        <ReactLink to="/leet" >
            <h1>LeetCode</h1>
            <p>Leetcode is an online platform to enhance your skills and prepare for tech interviews. Their site has over
                1900 coding problems with questions to help you prepare.</p>
        </ReactLink>
    </div>
    <div class="info1">
    <ReactLink to="/code" >
            <h1>CodeChef</h1>
            <p>CodeChef is an online educational and competitive programming platform.</p>
            </ReactLink>
    </div>
    <div class="info1">
    <ReactLink to="https://chrome.google.com/webstore/detail/EasyFinder/lfaikonkheambcglnllagblnbflmljkh" >
            <h1>EasyFinder</h1>
            <p>No need to find different coding platforms on ourself. Just click here to get direct access to different platforms.</p>
            </ReactLink>
    </div>
</section>

</div>
</Base1>
    )
}

export default UserDashboard