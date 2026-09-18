import ContactButton from "../contactButton/contactButton";
import styles from "./committee.module.css";
import CardSkeleton from "../cardSkeleton/cardSkeleton";

export default function CommitteeMember({ commMember }) {
  return (
    <CardSkeleton name={commMember.name} visionUrl={commMember.visionUrl}>
      <p className={styles.positionName}>{commMember.position} </p>
      {commMember.contact.map((c) => (
        <ContactButton key={c.type} type={c.type} link={c.link} />
      ))}
    </CardSkeleton>
  );
}
