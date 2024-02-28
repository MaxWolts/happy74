import Image from "next/image";
import styles from "./styles.module.css";

interface Props {
  name: string,
  img: string,
}

export const Item = ({ name, img }: Props) => {
  return (
    <div className={styles.itemContainer}>
      <Image src={img} alt="img of cloth without text" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.itemImage} />
    </div>
  )
};
