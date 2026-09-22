import styles from "./arrow.module.css";

export default function Arrow({ direction = "external" }) {
  if (direction === "right") {
    return (
      <svg
        className={styles.arrow}
        viewBox="0 0 16 16"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M2.5 8h10M8.75 4.25 12.5 8l-3.75 3.75" />
      </svg>
    );
  }

  return (
    <svg
      className={styles.arrow}
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 11 11 5M6 5h5v5" />
    </svg>
  );
}
