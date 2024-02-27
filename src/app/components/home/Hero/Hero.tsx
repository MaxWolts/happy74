import Image from "next/image";
import { Carousel } from "./Carousel";
import styles from "./styles.module.css";
import img1 from "app/../public/hero/slide1.webp";
import img2 from "app/../public/hero/slide2.webp";
import img3 from "app/../public/hero/slide3.webp";
import arrow from "app/../public/hero/svg/arrow.svg";
import longHeart from "app/../public/hero/svg/heart-with-line.svg";
import face from "app/../public/hero/svg/face.svg";
import heartSvg from "app/../public/hero/svg/heart.svg";

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
            <a href="#" className={styles.link}>
              <img src={arrow.src} alt="arrow" className={styles.arrowSvg} />
              START
            </a>
          </div>
          <div className={styles.containerLines}>
            <div className={styles.lines}></div>
          </div>
        </div>
        <div className={styles.carouselContainer}>
          <img src={face.src} alt="heart with lines" className={styles.faceSvg} />
          <img src={longHeart.src} alt="happy face" className={styles.longHeartSvg} />
          <img src={heartSvg.src} alt="heart" className={styles.heartSvg} />
          <Carousel imgs={imgs} />
        </div>
    </section>
  )
};
