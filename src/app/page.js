
import Image from "next/image";
import styles from "./page.module.css";
import { TransitionLink } from "./components/utils/TransitionLink";

export default function Home() {
  return (
    <>
    <div style={{
      height: "100vh",
    }}>
      asd
    </div>
      <div className={styles.page}>
        <TransitionLink href="/about" className={styles.card}>
          <Image
            src="https://www.wildnatureimages.com/images/xl/130726-063-Denali-National-Park.webp"
            alt={"mountain"}
            width={1920}
            height={100}
          />
        </TransitionLink>
        <TransitionLink href="/about" className={styles.card}>
        <Image
            src="https://www.wildnatureimages.com/images/xl/130726-063-Denali-National-Park.webp"
            alt={"mountain"}
            width={1920}
            height={100}
          />
        </TransitionLink>
        <TransitionLink href="/about" className={styles.card}>
        <Image
            src="https://www.wildnatureimages.com/images/xl/130726-063-Denali-National-Park.webp"
            alt={"mountain"}
            width={1920}
            height={100}
          />
        </TransitionLink>
      </div>
      <div style={{
        height:"100vh"
      }}>asd</div>
    </>
  );
}
