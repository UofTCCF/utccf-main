import Head from "next/head";
import LargeGroup from "../components/largeGroup/largeGroup";
import Ministries from "../components/ministries/ministries";
import InvestmentGroups from "../components/investmentGroups/investmentGroups";
import Committee from "../components/committee/committee";
import Footer from "../components/footer/footer";
import Nav from "../components/nav/nav";
import Contact from "../components/contact/contact";
import largeGroup from "../data/2026-27/largeGroup.json";
import ministries from "../data/2026-27/ministries.json";
import igs from "../data/2026-27/igs.json";
import committee from "../data/2026-27/committee.json";
import contacts from "../public/docs/2025-26/info/contacts.json";
import styles from "../styles/utils.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>UTCCF — Firewood 2026–27</title>
        <meta
          name="description"
          content="University of Toronto Chinese Christian Fellowship. Join us Fridays, 6:30–9:30 p.m. Find this year's vision, small groups, ministries, and committee."
        />
      </Head>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <section
          className={styles.hero}
          id="header"
          aria-labelledby="hero-title"
        >
          <div className={styles.heroCopy}>
            <h1
              id="hero-title"
              className={styles.wordmark}
              aria-label="Firewood 2026–27"
            >
              <span className={styles.wordmarkGraphic} aria-hidden="true">
                <img
                  src="/images/firewood-wordmark.png"
                  width="2048"
                  height="768"
                  alt=""
                />
                <span className={styles.wordmarkYear}>2026–27</span>
              </span>
            </h1>
            <p className={styles.intro}>
              Deny yourself.
              <br />
              Take up your cross.
              <br />
              Follow Him.
            </p>
            <p className={styles.scripture}>Luke 9:23–24</p>
            <div className={styles.actions}>
              <a className="button" href="#large-group">
                Learn more about Firewood <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className={styles.photos}>
            <img
              className={styles.campfire}
              src="/images/community/campfire.webp"
              width="1800"
              height="1200"
              alt="CCF members singing together around a campfire"
            />
            <img
              src="/images/community/friends.webp"
              width="900"
              height="600"
              alt="Students sharing a laugh at a CCF gathering"
            />
            <img
              src="/images/community/worship.webp"
              width="1200"
              height="801"
              alt="CCF gathered for outdoor worship on campus"
            />
          </div>
        </section>
        <LargeGroup largeGroup={largeGroup} />
        <InvestmentGroups igs={igs} />
        <Ministries ministries={ministries} />
        <Committee comm={committee} />
        <Contact contacts={contacts} />
      </main>
      <Footer />
    </>
  );
}
