import React from "react";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <div className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-text mx-3">MSV96</div>
      </div>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item">
        <div className="nav-link collapsed">Users</div>
      </li>
    </ul>
  );
}

export default Sidebar;
