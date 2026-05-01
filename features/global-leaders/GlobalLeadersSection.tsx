// import { GlobalLeadersImageCard } from "./components/GlobalLeadersImageCard";
import { globalLeadersContent } from "./globalLeaders.constants";

// export function GlobalLeadersSection() {
//   return (
//     <section className="w-full px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
//       <div className="mx-auto w-full max-w-[1570px]">

//         {/* OVERLAY CONTAINER */}
//         <div className="relative w-full flex items-center justify-end">

//           {/* IMAGE (background layer) */}
//           <div className="relative w-full max-w-[900px] z-0">
//             <GlobalLeadersImageCard heading={globalLeadersContent.overlayText} />
//           </div>

//           {/* HEADING (on top of image) */}
//           <h1 className="
//             absolute left-0 top-1/2 -translate-y-1/2 z-10
//             max-w-[900px]
//             text-[38px] font-bold leading-[1] tracking-[-0.03em]
//             text-[#3a3c42]
//             sm:text-[52px]
//             md:text-[64px]
//             lg:text-[72px]
//             xl:text-[80px]
//           ">
//             Global Leaders in S
//             <span className="stroke-heading">hip</span>
//             <br />

//             Management & Ma
//             <span className="stroke-heading">ritime</span>
//             <br />

//             Operations
//           </h1>

//         </div>

//         {/* DESCRIPTION */}
//         <p className="mt-10 max-w-[1000px] text-sm leading-[1.65] text-[#464646] sm:text-[15px] md:text-base font-normal">
//           {globalLeadersContent.description}
//         </p>

//       </div>
//     </section>
//   );
// }
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
      <p className="mt-10 max-w-[1000px] text-sm leading-[1.65] text-[#464646] sm:text-[15px] md:text-base font-normal">
        {globalLeadersContent.description}
      </p>
    </>
  );
}
