import styles from "./Table.module.css";

const Table = () => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.searchBox}>
        <input type="text" placeholder="Search..." />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product 1</td>
            <td>100</td>
            <td>$10</td>
            <td>500</td>
          </tr>
          <tr>
            <td>Product 2</td>
            <td>50</td>
            <td>$20</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Product 3</td>
            <td>75</td>
            <td>$15</td>
            <td>400</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
