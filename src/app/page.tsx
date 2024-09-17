import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Welcome to My Photography Portfolio</h1>
      <p>Explore my works across different categories.</p>
      <ul>
        <li>
          <Link href="/portfolios">Portfolios</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
