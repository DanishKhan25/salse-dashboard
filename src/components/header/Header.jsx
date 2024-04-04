"use client";
import { useState } from "react";
import styles from "./header.module.css";
const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <main className={styles.headerWrapper}>
      <div className={styles.heading}>Hello World 👋,</div>
      <div className={styles.searchBar}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="&#128269; Search..." // Unicode for search icon
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </main>
  );
};

export default Header;
