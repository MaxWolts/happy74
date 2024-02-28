import { Item } from "./Item";
import exampleImage from "app/../public/clothes/photo-1520591799316-6b30425429aa.webp";

export const Shop = () => {
  return (
    <div>
      <Item name="example" img={exampleImage.src} />
    </div>
  )
};
