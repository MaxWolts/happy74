import { Carousel } from "./Carousel";
import styles from "./styles.module.css";
import img1 from "app/../public/hero/slide1.webp";
import img2 from "app/../public/hero/slide2.webp";
import img3 from "app/../public/hero/slide3.webp";

const imgs = [
  img1.src,
  img2.src,
  img3.src,
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
            <a href="#" className={styles.link}>START</a>
          </div>
          <div className={styles.containerLines}>
            <div className={styles.lines}></div>
          </div>
        </div>
        <div className={styles.carouselContainer}>
          <Carousel imgs={imgs} />
        </div>
    </section>
  )
};
