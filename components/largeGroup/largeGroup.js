import styles from "./largeGroup.module.css";
export default function LargeGroup({ largeGroup }) {
  return (
    <section
      className={styles.gathering}
      id="large-group"
      aria-labelledby="gathering-title"
    >
      <div>
        <h2 id="gathering-title">Fridays at CCF</h2>
        <p>{largeGroup.description}</p>
      </div>
      <div className={styles.details}>
        <p className={styles.time}>{largeGroup.meetingInfo.time}</p>
        <p className={styles.location}>{largeGroup.meetingInfo.location}</p>
        <a href="https://instagram.com/utccf_">
          Weekly updates <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
