import Head from "next/head";
import { useEffect, useState } from "react";
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

const heroSlides = [
  {
    src: "/images/community/campfire.webp",
    alt: "CCF members singing together around a campfire",
    width: 6000,
    height: 4000,
  },
  {
    src: "/images/community/gathering.webp",
    alt: "Students laughing together at a CCF gathering",
    width: 4218,
    height: 2812,
  },
  {
    src: "/images/community/friends.webp",
    alt: "Students sharing a laugh at a CCF gathering",
    width: 4128,
    height: 2752,
  },
  {
    src: "/images/community/worship.webp",
    alt: "CCF gathered for outdoor worship on campus",
    width: 5931,
    height: 3958,
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [activeSlide]);

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
              Follow Him.
              <br />
              Lose Your Life to Find It
            </p>
            <div className={styles.actions}>
              <a className="button" href="#large-group">
                Learn more about Firewood <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className={styles.photos} aria-label="Scenes from CCF">
            {heroSlides.map((slide, index) => (
              <figure
                className={`${styles.photoSlide} ${
                  index === activeSlide ? styles.active : ""
                }`}
                key={slide.src}
                aria-hidden={index !== activeSlide}
              >
                <img
                  src={slide.src}
                  width={slide.width}
                  height={slide.height}
                  alt={slide.alt}
                />
              </figure>
            ))}
            <div className={styles.photoDots} aria-label="Choose a hero photo">
              {heroSlides.map((slide, index) => (
                <button
                  type="button"
                  className={`${styles.photoDot} ${
                    index === activeSlide ? styles.activeDot : ""
                  }`}
                  key={slide.src}
                  aria-label={`Show photo ${index + 1}`}
                  aria-pressed={index === activeSlide}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
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
