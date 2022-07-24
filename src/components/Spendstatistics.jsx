import React from "react";

export const Spendstatistics = ({ data }) => {
  let spend = data.spend.replaceAll(".", "");
  let limit = data.limit.replaceAll(".", "");
  let perc = (Number(spend) / Number(limit)) * 100;

  return (
    <div className="spend-statistics">
      <div className="spend-statistics-subhead">
        <div className="spend-statistics-bar">{data.title}</div>
        <div className="spend-statistics-bar" style={{ opacity: 0.8 }}>
          {data.limit}
        </div>
      </div>
      <div className="spend-statistics-whitebar">
        <div
          className="spend-statistics-greenbar"
          style={{ width: `${perc}%` }}
        ></div>
      </div>
    </div>
  );
};
