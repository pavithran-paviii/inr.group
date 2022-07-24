import React from "react";
import "../styles/dashboard.css";
import profile1 from "../assets/svg/profile1.svg";
import profile2 from "../assets/svg/profile2.svg";
import profile3 from "../assets/svg/profile3.svg";
import { Dashboardchildcontainers } from "./Dashboardchildcontainers";
import { dashboardspendtitles } from "../assets/data/dashboardspent";
import { Spendstatistics } from "./Spendstatistics";
import { spendstatistics } from "../assets/data/spendstatistics";
import { Tipscontainer } from "./Tipscontainer";

export const Dashboard = () => {
  return (
    <div id="dashboard">
      <div id="dashboardLeft">
        <div id="dashboard-left-head">
          <div>
            <h1 style={{ color: "#262A41" }}>Dashboard</h1>
            <h6 id="dashboardDate">01 - 15 July, 2022</h6>
          </div>
          <div id="dashboardImg">
            <img src={profile1} alt="" />
            <img src={profile2} alt="" />
            <img src={profile3} alt="" />
            <span>+</span>
          </div>
        </div>
        {dashboardspendtitles.map((data) => {
          return (
            <Dashboardchildcontainers data={data} key={data.dashboradtitle} />
          );
        })}
      </div>
      <div id="dashboardRight">
        <div id="dashboard-right-heading">Spend Statistics:</div>
        <div style={{ marginTop: "25px" }}>
          {spendstatistics.map((data) => {
            return <Spendstatistics data={data} key={data.title} />;
          })}
        </div>
        <Tipscontainer />
      </div>
    </div>
  );
};
