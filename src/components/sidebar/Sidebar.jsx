"use client";
import Dashboard from "@/app/assets/icons/Dashboard";
import { useState } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { FaAddressBook, FaArchive, FaWallet } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";

import classes from "./sidebar.module.css";
const Sidebar = () => {
  const [active, setActive] = useState(0);
  const links = [
    {
      id: 0,
      label: "Dashboard",
      icon: <MdDashboard width={20} height={20} />,
      path: "/",
    },
    {
      id: 1,
      label: "Product",
      icon: <FaArchive width={20} height={20} />,
      path: "/",
    },
    {
      id: 2,
      label: "Customers",
      icon: <FaAddressBook width={20} height={20} />,
      path: "/",
    },
    {
      id: 3,
      label: "Income",
      icon: <FaWallet width={20} height={20} />,
      path: "/",
    },
    {
      id: 4,
      label: "Promote",
      icon: <BiSolidOffer width={20} height={20} />,
      path: "/",
    },
    {
      id: 5,
      label: "Help",
      icon: <RiCustomerServiceFill width={20} height={20} />,
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
