import styles from "./cardSkeleton.module.css";
import Vision from "../vision/vision";
export default function CardSkeleton({
  name,
  visionFile,
  visionUrl,
  children,
}) {
  return (
    <div className={styles.inlineBlockBordered}>
      <div>
        <h3 className={styles.cardName}>{name}</h3>
        <Vision fileName={visionFile} href={visionUrl}>
          Vision
        </Vision>
      </div>
      {children}
    </div>
  );
}
