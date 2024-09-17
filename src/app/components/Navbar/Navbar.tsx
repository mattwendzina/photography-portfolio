import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {[
          { title: "Home", route: "/" },
          { title: "About", route: "/about" },
          { title: "Contact", route: "/contact" },
          { title: "Portfolios", route: "/portfolios" },
        ].map((item, index) => {
          return (
            <li className={styles.navItem} key={index}>
              <Link href={item.route}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
