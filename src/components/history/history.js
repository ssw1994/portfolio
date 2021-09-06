import React from "react";
import "./history.scss";
export function YearHistory({ year }) {
  return (
    <div className="year-history">
      <div className="period">
        {year.fromYear} - {year.toYear}
      </div>
      <div className="position">{year.position}</div>
      <div className="company">{year.company}</div>
      <div className="years">{year.years} Years</div>
    </div>
  );
}
export default function History({ history }) {
  return (
    <div className="history">
      {history.map((year, index) => {
        return (
          <div className={index % 2 === 0 ? "card even-card" : "card odd-card"}>
            <YearHistory year={year} key={index}></YearHistory>
          </div>
        );
      })}
    </div>
  );
}
