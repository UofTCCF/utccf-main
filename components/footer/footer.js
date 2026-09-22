import styles from "./footer.module.css";
import PdfLink from "../pdfLink/pdfLink";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.brand} href="#header">
        <img
          src="/images/utccf-wordmark.svg"
          alt="UTCCF"
          width="6719"
          height="1516"
        />
      </a>
      <p>
        University of Toronto
        <br />
        Chinese Christian Fellowship
      </p>
      <PdfLink fileName="UTCCF-Constitution.pdf">Constitution</PdfLink>
    </footer>
  );
}
