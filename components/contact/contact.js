import ContactButton from "../contactButton/contactButton";
import styles from "./contact.module.css";
export default function Contact({ contacts }) {
  return (
    <section className={styles.contact} id="contact-us">
      <h2>Contact</h2>
      <div className={styles.channels}>
        {contacts.map((c) => (
          <ContactButton key={c.link} type={c.type} link={c.link} showLabel />
        ))}
      </div>
    </section>
  );
}
