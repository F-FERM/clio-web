// import { GlobalLeadersImageCard } from "./components/GlobalLeadersImageCard";
import { globalLeadersContent } from "./globalLeaders.constants";

import styles from "./marine.module.css";
import Image from "next/image";

export default function MaritimeHero() {
  return (
    <>
      <section className={styles.hero}>
        {/* Right side image */}
        <div className={styles.heroImg}>
          <Image
            src={"/images/about/About1.png"}
            alt="Ship at sea"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Continuous heading */}
        <h1 className={styles.heroTitle}>
          <span className={styles.line}>
            <span className={styles.solid}>Global Leaders&nbsp;</span>
            <span className={styles.outline}>in Ship</span>
          </span>
          <span className={styles.line}>
            <span className={styles.solid}>Management &amp;&nbsp;</span>
            <span className={styles.outline}>Maritime</span>
          </span>
          <span className={styles.line}>
            <span className={styles.solid}>Operations</span>
          </span>
        </h1>
      </section>
      {/* DESCRIPTION */}
      {/* DESCRIPTION */}
      <p className="lg:px-25 px-5 mt-6 max-w-[1200px] text-sm leading-[1.65] text-[#464646] sm:text-[15px] md:text-sm font-normal">
        {globalLeadersContent.description}
      </p>
    </>
  );
}
