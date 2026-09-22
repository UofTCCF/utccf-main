import Head from "next/head";
import { useEffect, useRef } from "react";
import Footer from "../components/footer/footer";
import Arrow from "../components/arrow/arrow";
import styles from "../styles/vision.module.css";

export default function Vision() {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!page || reduceMotion) return undefined;

    let frame;
    const updateBackground = () => {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = Math.min(window.scrollY / maxScroll, 1);

      page.style.setProperty("--ember-y", `${9 + progress * 30}%`);
      page.style.setProperty("--wood-y", `${47 + progress * 22}%`);
      page.style.setProperty("--grain-shift", `${progress * 38}px`);
      frame = undefined;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateBackground);
    };

    updateBackground();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Firewood — UTCCF 2026–27 Vision</title>
        <meta
          name="description"
          content="Read Firewood, the UTCCF vision for 2026–27: deny yourself, follow Him, and lose your life to find it."
        />
      </Head>

      <header className={styles.header} id="header">
        <div className={styles.nav}>
          <a className={styles.brand} href="/">
            <img src="/images/logolight.png" width="36" height="36" alt="" />
            <img
              className={styles.brandWordmark}
              src="/images/utccf-wordmark.svg"
              width="6719"
              height="1516"
              alt="UTCCF"
            />
            <span>Firewood 2026–27</span>
          </a>
          <a className={styles.back} href="/">
            Back to home <Arrow />
          </a>
        </div>
      </header>

      <main className={styles.page} ref={pageRef}>
        <article className={styles.article}>
          <header className={styles.articleHeader}>
            <h1>Firewood</h1>
          </header>

          <div className={styles.prose}>
            <p>
              Last year, we focused on revival, praying for spiritual awakening
              and transformation through the power of Christ. However, this
              does not mean that we are to wait passively for Christ to
              transform us; only when we actively surrender and partner with
              God will true revival occur.
            </p>

            <p>
              For the most part, our communion with God has been through an
              altar; it is a holy place, set apart for fellowship with the Holy
              One. In the Old Testament, wood was placed on the altar with
              offerings to be consumed by holy fire. Isaac carried the wood for
              his own sacrifice (Genesis 22:6-9); Elijah rebuilt the altar and
              laid the wood down beneath the offering before God sent fire from
              heaven (1 Kings 18:30-39); the Levitical priests added fresh wood
              daily and arranged offerings in obedience to God’s commands
              (Leviticus 6:12). Time and again, Firewood points to offerings
              laid on the altar, representing the worshiper’s act of sacrifice
              and wholehearted devotion towards God.
            </p>

            <p>
              This year our vision, Firewood, involves the willful surrender of
              our lives before God, just as Jesus did. The spotless, sinless
              Lamb of God willingly offered up His Spirit in submission to the
              Father’s will, bearing all of our sin before the Father’s holy
              fire (Hebrews 7:26-27). His work on the cross not only gives
              believers everlasting atonement, but also changes the way we
              commune with God: the veil is torn, and we no longer need the
              Levitical priests to intercede on our behalf because we have
              Jesus as our High Priest (Hebrews 7:25). God, who once dwelt with
              us in the person of Christ, now dwells in us by His Spirit,
              making our very bodies living temples, built together as a
              spiritual house to offer spiritual sacrifices (1 Corinthians
              6:19; 1 Peter 2:5). As such, our hearts and lives can now be the
              very altars where His holy fire falls to refine and ignite
              lasting devotion (Hebrews 12:28-29).
            </p>

            <p>
              But, like the disciples, we often resist the sacrifice that this
              kind of devotion requires. When Jesus told the disciples that He
              must suffer and die, Peter pulled Him aside and rebuked Him. Yet
              Jesus instead warned Peter, telling him, “You are not setting
              your mind on the things of God, but the things of man” (Mark
              8:33). Like Peter, we often reject God’s truth because it is
              uncomfortable, preferring a relationship with Him on our own
              terms.
            </p>

            <p>
              Knowing this, Jesus calls us to willingly offer our lives as
              sacrifice:
            </p>
          </div>

          <blockquote className={styles.scripture}>
            <p>
              “And he said to all, If anyone would come after me, let him deny
              himself and take up his cross daily and follow me. For whoever
              would save his life will lose it, but whoever loses his life for
              my sake will save it.”
            </p>
            <cite>Luke 9:23–24 (ESV)</cite>
          </blockquote>

          <section className={styles.movement}>
            <div className={styles.movementHeading}>
              <h2>Deny Yourself</h2>
            </div>
            <div className={styles.prose}>
              <p>
                Fresh wood cannot be used as Firewood. When burned, it will
                produce toxic smoke and must first be dried of its moisture. In
                the same way, we must recognize that our sinful nature corrupts
                all that we bring to God. Only through His cleansing can we
                offer sacrifice and worship acceptable to Him. In a world that
                teaches us to build our lives around ourselves, Jesus calls us
                to deny ourselves. This begins with honest self-examination and
                recognition that we have not made Christ the center of our
                lives (Lamentations 3:40). Instead, we have placed ourselves,
                our selfish desires, and other idols at His feet. However,
                acknowledgement by itself is not enough. To follow Him
                wholeheartedly, we must abandon our sin with desperation and
                come before God emptied of self-sufficiency (Matthew 5:3; Psalm
                51:17). Only when we recognize the urgency of laying ourselves
                as offerings on the altar will God begin His work of cleansing
                us through His refining fire (1 John 1:9; Malachi 3:3).
              </p>
            </div>
          </section>

          <section className={styles.movement}>
            <div className={styles.movementHeading}>
              <h2>Take Up Your Cross and Follow Him</h2>
            </div>
            <div className={styles.prose}>
              <p>
                The Firewood must then be personally carried to the altar by
                the one who offers sacrifice. Jesus carried His cross to
                Calvary. He suffered, endured persecution, and bore the
                punishment of our sins for us. This perfect offering was made
                not because we deserved it, but out of agape love for us,
                knowing we could never earn it (1 John 4:10). And now He calls
                us to follow in His footsteps (1 John 2:6). To take up our cross
                is to follow Christ in the same pattern of sacrificial love:
                willing to bear self-denial, hardship, and opposition for His
                sake, and the sake of the gospel (Ephesians 5:1-2). We do not
                carry our wooden cross out of grim obligation, but in joyful
                response to His overwhelming grace and mercy (Hebrews 12:2).
                When we truly understand this gift of grace, our desire will be
                to please Him and worship Him, to present our bodies as living
                sacrifices in service to God (Romans 12:1).
              </p>
            </div>
          </section>

          <section className={styles.movement}>
            <div className={styles.movementHeading}>
              <h2>Lose Your Life to Find It</h2>
            </div>
            <div className={styles.prose}>
              <p>
                As fuel, Firewood must be consumed in order to sustain the fire
                that gives off light. In the same way, we must lose our lives
                to find true life, so that the transforming power of the gospel
                shines brightly through us. This begins with redefining what we
                believe true life really is. True life involves the recognition
                that the fleshly pleasures and false securities of the
                temporary world are inferior in comparison to the joy and
                fulfillment that comes from doing the will of God (1 John
                2:15-17). Jesus declared that His true food and sustenance was
                to do the will of the Father who sent Him (John 4:31-34). If
                doing God’s will can satisfy us so completely that we can forgo
                essential physical needs, then it will all the more satisfy us
                to forgo worldly desires that only tempt and corrupt us. This
                is the true life God invites us into, for we were created for
                His glory to do His will (Isaiah 43:6-7; 1 Corinthians 10:31).
                We enter it fervently, anticipating Christ’s return and the
                eternal weight of glory that awaits us in heaven (Colossians
                3:4). Therefore, we do not lose our lives reluctantly. We lose
                them eagerly, knowing exactly who it is for and what we are
                gaining.
              </p>
            </div>
          </section>

        </article>
      </main>
      <div className={styles.visionFooter}>
        <Footer />
      </div>
    </>
  );
}
