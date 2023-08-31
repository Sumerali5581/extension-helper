import React from "react";
import Base1 from "../components/Base1";
import {Link as ReactLink} from "react-router-dom"

const CodeChef=()=>{
    
    return(
        <Base1>
        <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
        <div>
        
        
<section class="info">
    <div class="info1">
    <ReactLink to="https://chrome.google.com/webstore/detail/coders-calendar/bageaffklfkikjigoclfgengklfnidll" >
            <h1>Coder Calender</h1>
            <p>Never miss a Coding contest again! Displays live and upcoming Programming Contests happening</p>
            </ReactLink>
    </div>
    <div class="info1">
        <ReactLink to="https://chrome.google.com/webstore/detail/competitive-companion/ggcfcaiiadodpdfnphnejkocgjejcbic">
            <h1>Competitive Companion</h1>
            <p></p>
        </ReactLink>
    </div>
    <div class="info1">
        <ReactLink to="https://chrome.google.com/webstore/detail/codechef-ranking/oinfhocbmbejhpajcpefdhoifkcdepba">
            <h1>Codechef Ranking</h1>
            <p>Let you know your Codechef college rank on contest's page only.</p>
        </ReactLink>
    </div>
    <div class="info1">
        <ReactLink to="https://chrome.google.com/webstore/detail/cpgpt-competitive-program/cedjhhjppifnfkfkgoflfeddidedofcg">
            <h1>Competitive Programming Assistant</h1>
            <p>An competitive programming assistant using ChatGPT.</p>
        </ReactLink>
    </div>
</section>

</div>
</Base1>
    )
}

export default CodeChef;