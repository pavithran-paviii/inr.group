import React from "react";

export const DashboradSpends = ({ data }) => {
  return (
    <div id="DashboradSpends">
      <div style={{ position: "relative" }}>
        <img src={require(`../assets/img/${data.title}.png`)} alt="" />
      </div>
      <div>
        <div id="dashboard-product-desc">
          <div>{data.title}</div>
          <div>{data.description}</div>
        </div>
        <div id="dashboard-product-price" >
          {data.price}
        </div>
      </div>
    </div>
  );
};
