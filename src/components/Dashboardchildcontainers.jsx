import React from "react";
import { DashboradSpends } from "./DashboradSpends";

export const Dashboardchildcontainers = ({ data }) => {
  console.log(data);
  return (
    <div style={{ margin: "30px 0" }}>
      <div id="dashboard-spend">
        <h5>{data.dashboradtitle}</h5>
        <div>. . .</div>
      </div>
      <div>
        {data.dashboardspends.map((data) => {
          return <DashboradSpends data={data} />;
        })}
      </div>
    </div>
  );
};
