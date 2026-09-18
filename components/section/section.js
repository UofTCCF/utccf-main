import styles from "./section.module.css";
export default function Section({ title, description, children }) {
  const id = title.replace(/\s+/g, "-").toLowerCase();
  return (
    <section className={styles.section} id={id} aria-labelledby={`${id}-title`}>
      <div className={styles.heading}>
        <h2 className={styles.sectionTitle} id={`${id}-title`}>
          {title}
        </h2>
        {description && (
          <p className={styles.sectionDescription}>{description}</p>
        )}
      </div>
      <div className={styles.grid}>{children}</div>
    </section>
  );
}
