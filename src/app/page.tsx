import { Hero } from "./components/home/Hero";
import { Shop } from "./components/shop";
import { Banner } from "./components/banner";

export default function Home() {
  return (
    <main>
      <Hero />
      <Banner />
      <Shop />
    </main>
  );
};
