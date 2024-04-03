"use client";
import Dashboard from "@/app/assets/icons/Dashboard";
import KeyIcon from "@/app/assets/icons/KeyIcon";
import { useState } from "react";
import classes from "./sidebar.module.css";
const Sidebar = () => {
  const [active, setActive] = useState(0);
  const links = [
    {
      id: 0,
      label: "Dashboard",
      icon: <KeyIcon width={16} height={16} />,
      path: "/",
    },
    {
      id: 1,
      label: "Product",
      icon: <KeyIcon width={16} height={16} />,
      path: "/",
    },
    {
      id: 2,
      label: "Customers",
      icon: <KeyIcon width={16} height={16} />,
      path: "/",
    },
    {
      id: 3,
      label: "Income",
      icon: <KeyIcon width={16} height={16} />,
      path: "/",
    },
    {
      id: 4,
      label: "Promote",
      icon: <KeyIcon width={16} height={16} />,
      path: "/",
    },
    {
      id: 5,
      label: "Help",
      icon: <KeyIcon width={16} height={16} />,
      path: "/",
    },
  ];

  return (
    <main className={classes.sidebarWrapper}>
      <div className={classes.logoWrapper}>
        <div className={classes.icon}>
          <Dashboard width={24} height={24} fill="#fff" />
        </div>
        <h1 className={classes.logo}>Dashboard</h1>
      </div>
      <nav className={classes.nav}>
        {links.map((link) => (
          <div
            key={link.label}
            className={classes.row}
            onClick={() => setActive(link.id)}
            style={{
              backgroundColor: active === link.id ? "#2d2d69" : "transparent",
            }}
          >
            <div className={classes.icon}>{link?.icon}</div>
            <div className={classes.label}>{link?.label}</div>
          </div>
        ))}
      </nav>
    </main>
  );
};

export default Sidebar;
