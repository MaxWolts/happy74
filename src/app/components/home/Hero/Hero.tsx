import Image from "next/image";
import { Carousel } from "./Carousel";
import styles from "./styles.module.css";

const imgs = [
  "/hero/slide1.webp",
  "/hero/slide2.webp",
  "/hero/slide3.webp",
]

export function Hero() {
  return (
    <section className={styles.hero} aria-label="presentación">
        <div className={styles.rightContainer}>
          <div className={styles.containerLines}>
            <div className={styles.lines}></div>
          </div>
          <div className={styles.titleContainer}>
            <h1>HAPPY74</h1>
            <h2>style for you</h2>
          </div>
          <div className={styles.link}>
            <a href="#" className={styles.link}>
              <img src="/hero/svg/arrow.svg" alt="arrow" className={styles.arrowSvg} />
              START
            </a>
          </div>
          <div className={styles.containerLines}>
            <div className={styles.lines}></div>
          </div>
        </div>
        <div className={styles.carouselContainer}>
          <img src="/hero/svg/face.svg" alt="heart with lines" className={styles.faceSvg} />
          <img src="/hero/svg/heart-with-line.svg" alt="happy face" className={styles.longHeartSvg} />
          <img src="/hero/svg/heart.svg" alt="heart" className={styles.heartSvg} />
          <Carousel imgs={imgs} />
        </div>
    </section>
  )
};
