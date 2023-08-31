import React from "react";
import Base1 from "../components/Base1";

import { NavLink as ReactLink } from "react-router-dom";

const LeetCode = () => {
  return (
    <Base1>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
        <section class="info">
          <div class="info1">
            <ReactLink to="https://chrome.google.com/webstore/detail/coders-calendar/bageaffklfkikjigoclfgengklfnidll">
              <h1>Coder Calender</h1>
              <p>Never miss a Coding contest again! Displays live and upcoming Programming Contests happening</p>
            </ReactLink>
          </div>
          <div class="info1">
            <ReactLink to="https://chrome.google.com/webstore/detail/competitive-companion/cjnmckjndlpiamhfimnnjmnckgghkjbl">
              <h1>Competitive Companion</h1>
              <p></p>
            </ReactLink>
          </div>
          <div class="info1">
            <ReactLink to="https://chrome.google.com/webstore/detail/leetcode-video-solutions/ilnmgkahgjdpkoliooildngldmilhelm">
              <h1>Video Solutions</h1>
              <p>Watch free LeetCode video ▶ solutions on the problem page itself.</p>
            </ReactLink>
          </div>
          <div class="info1">
            <ReactLink to="https://chrome.google.com/webstore/detail/cpgpt-competitive-program/cedjhhjppifnfkfkgoflfeddidedofcg">
              <h1>Competitive Programming Assistant</h1>
              <p>An competitive programming assistant using ChatGPT.</p>
            </ReactLink>
          </div>
        </section>
    </Base1>
  );
};

export default LeetCode;
