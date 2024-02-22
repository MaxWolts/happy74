"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

interface Props {
  imgs: string[];
  dots?: boolean;
}

export const Carousel = ({ imgs, dots }: Props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imgs.length]);

  const currentSlide = (n: number) => {
    setSlideIndex(n);
  };

  return (
    <div>
      <div className={styles.slideshowContainer}>
        {imgs.map((img, index) => (
          <div
            key={index}
            className={`${styles.mySlides} ${styles.fade}`}
            style={{ display: index === slideIndex ? "block" : "none" }}
          >
            <Image src={img} alt="img of cloth without text" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.images} />
          </div>
        ))}
      </div>
      <br />
      {}
      {dots && <div style={{ textAlign: "center" }}>
        {imgs.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex ? "active" : ""}`}
            onClick={() => currentSlide(index)}
          ></span>
        ))}
      </div>}
    </div>
  );
};
