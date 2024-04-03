import { FaWallet } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import { RiExchangeDollarLine } from "react-icons/ri";
import { TbShoppingBag } from "react-icons/tb";
import Box from "./Box";
import styles from "./box.module.css";
const BoxRow = () => {
  return (
    <div className={styles.container}>
      <Box
        icon={<RiExchangeDollarLine size={40} color="green" />}
        text1="Earnings"
        text2="$198k"
        text3="+37% this month"
        iconColor="#e3fff0"
      />
      <Box
        icon={<FaNewspaper size={40} color="purple" />}
        text1="Order"
        text2="$198k"
        text3="+37% this month"
        iconColor="#e7dbff"
      />
      <Box
        icon={<FaWallet size={40} color="navy" />}
        text1="Balance"
        text2="$198k"
        text3="+37% this month"
        iconColor="#cef4ff"
      />
      <Box
        icon={<TbShoppingBag size={40} color="orange" />}
        text1="Total Sales"
        text2="$198k"
        text3="+37% this month"
        iconColor="#febadf"
      />
    </div>
  );
};

export default BoxRow;
