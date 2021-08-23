import React from "react";
import Users from "./Users";

function Dashboard(props) {
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>
      <Users datas={props.datas}></Users>
    </div>
  );
}

export default Dashboard;
