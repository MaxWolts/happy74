import Image from "next/image";
import styles from "./styles.module.css";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <span>Style for you</span>
      <div className={styles.bannerImage}>
        <Image src={"/banner/banner2.jpg"} alt={"imagen promocional"} fill/>
      </div>
    </div>
  )
};
