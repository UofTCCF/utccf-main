import { useState } from "react";
import styles from "./nav.module.css";
import Arrow from "../arrow/arrow";
const links = [
  ["Gatherings", "large-group"],
  ["Ministries", "ministries"],
  ["Small groups", "investment-groups"],
  ["Committee", "committee"],
];
export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <nav className={styles.navBar} aria-label="Main navigation">
        <a
          className={styles.brand}
          href="#header"
          onClick={() => setOpen(false)}
        >
          <img src="/images/logolight.png" alt="" width="36" height="36" />
          <img
            className={styles.brandWordmark}
            src="/images/utccf-wordmark.svg"
            alt="UTCCF"
            width="6719"
            height="1516"
          />
          <span>Firewood 2026–27</span>
        </a>
        <button
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="navigation-links"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
        <div
          id="navigation-links"
          className={`${styles.links} ${open ? styles.open : ""}`}
        >
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className={styles.contact}
            href="#contact-us"
            onClick={() => setOpen(false)}
          >
            Contact <Arrow />
          </a>
        </div>
      </nav>
    </header>
  );
}
