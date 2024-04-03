import product1 from "@/app/assets/images/camera.jpg";
import product2 from "@/app/assets/images/headphone.jpg";
import Image from "next/image";
import { useState } from "react";
import styles from "./table.module.css";
const SalesTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.headingWrapper}>
        <h3>Sales Table</h3>
        <div className={styles.searchBar}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="&#128269;  Search..." // Unicode for search icon
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.heading1}>Product Name</div>
        <div className={styles.heading2}>Stock</div>
        <div className={styles.heading2}>Price</div>
        <div className={styles.heading2}>Total Sales</div>
      </div>
      <div className={styles.hr}></div>
      <div className={styles.row}>
        <div className={styles.column1}>
          <div className={styles.productName}>
            <div className={styles.image}>
              <Image src={product2} alt="Product 1" width={100} height={50} />
            </div>
            <div className={styles.details}>
              <p className={styles.name}>Headphone</p>
              <p className={styles.disc}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.column2}>12 in stock</div>
        <div className={styles.column2}>$55.99</div>
        <div className={styles.column2}>25</div>
      </div>
      <div className={styles.row}>
        <div className={styles.column1}>
          <div className={styles.productName}>
            <div className={styles.image}>
              <Image src={product1} alt="Product 1" width={100} height={50} />
            </div>
            <div className={styles.details}>
              <p className={styles.name}>camera</p>
              <p className={styles.disc}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.column2}>32 in stock</div>
        <div className={styles.column2}>$45.99</div>
        <div className={styles.column2}>20</div>
      </div>
    </div>
  );
};

export default SalesTable;
