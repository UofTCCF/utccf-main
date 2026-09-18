import styles from "./footer.module.css";
import PdfLink from "../pdfLink/pdfLink";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.brand} href="#header">
        UTCCF
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
