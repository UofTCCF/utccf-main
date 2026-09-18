import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./contactButton.module.css";

export default function ContactButton({ type, link, showLabel = false }) {
  if (type === "Phone") {
    return (
      <a
        className={styles.iconLink}
        href={`tel:${link}`}
        aria-label={`Call ${link}`}
      >
        <FontAwesomeIcon icon={faPhone} />{" "}
        <span className={styles.littleText}>{link}</span>
      </a>
    );
  }

  function renderIcon(type) {
    if (type === "Instagram") {
      return <FontAwesomeIcon icon={faInstagram} />;
    } else if (type === "Facebook") {
      return <FontAwesomeIcon icon={faFacebook} />;
    } else if (type === "Email") {
      return <FontAwesomeIcon icon={faEnvelope} />;
    } else if (type === "Discord") {
      return <FontAwesomeIcon icon={faDiscord} />;
    }
  }

  return (
    <a className={styles.iconLink} href={link} aria-label={type}>
      {renderIcon(type)}
      {showLabel && <span>{type}</span>}
    </a>
  );
}
