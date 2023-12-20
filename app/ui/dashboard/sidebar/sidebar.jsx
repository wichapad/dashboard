import Image from "next/image";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";

const menuItems = [
  {
    title: "Pages",
    list: [
      { title: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
      { title: "Users",path: "/dashboard/users" ,icon: <MdSupervisedUserCircle /> },
      { title: "Products",path: "/dashboard/products" , icon: <MdShoppingBag /> },
      { title: "Transactions",path: "/dashboard/transactions" , icon: <MdAttachMoney /> },
    ],
  },
  {
    title: "Analytics",
    list: [
      { title: "Revenue",path: "/dashboard/revenue" , icon: <MdWork /> },
      { title: "Reports",path: "/dashboard/reports" , icon: <MdAnalytics /> },
      { title: "Teams",path: "/dashboard/teams" , icon: <MdPeople /> },
    ],
  },
  {
    title: "Users",
    list: [
      { title: "Settings",path: "/dashboard/settings" , icon: <MdOutlineSettings /> },
      { title: "Help",path: "/dashboard/help" , icon: <MdHelpCenter /> },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.jpeg"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.userName}>Username</span>
          <span className={styles.userTitle}>Adminisrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((items) => (
          <li key={items.title}>
            <span className={styles.items}>{items.title}</span>
            {items.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form>
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
