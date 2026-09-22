import styles from "./pdfLink.module.css";
import Arrow from "../arrow/arrow";
export default function PdfLink({ fileName, href, children }) {
  if (!href && !fileName) return null;
  return (
    <a
      className={styles.pdfLink}
      href={href || `/docs/2025-26/visions/${fileName}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children} <Arrow />
    </a>
  );
}
