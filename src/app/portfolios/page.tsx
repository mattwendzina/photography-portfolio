import Link from "next/link";

export default function Portfolios() {
  return (
    <div>
      <h1>My Portfolios</h1>
      <ul>
        <li>
          <Link href="/portfolios/landscape">Landscape</Link>
        </li>
        <li>
          <Link href="/portfolios/nature">Nature</Link>
        </li>
        <li>
          <Link href="/portfolios/people">People</Link>
        </li>
      </ul>
    </div>
  );
}
