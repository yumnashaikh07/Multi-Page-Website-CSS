import Image from "next/image";
import styles from "../styles/herosection.module.css";
import Link from "next/link";



export default function Herosection() {
  return (
    <main>
      <section className={styles.hero}>
        <Image
          src={"/images/bg1.jpg"}
          width={1500}
          height={700}
          alt="background"
        />

        <div className={styles.overlay}>
          <h1 className={styles.herotitle}>Get Gifts From Us</h1>
          <p className={styles.description}>
            Ignite your creativity at
            <span className={styles.span}>&quot;THE DIY STORE&quot;</span>, your hub for
            top-notch art supplies, craft materials, and chic stationery!
          </p>
          <Link href={"/collection"}>
            <button className={styles.ctabutton}>Buy Now</button>
          </Link>
        </div>
      </section>
      <section>
        <h1 className={styles.h1three}>Categories</h1>
        <div className={styles.three}>
          <div className={styles.itemthree}>
            <Image src={"/images/tape.webp"} width={400} height={400} alt="" />
            <h3>Washi Tapes</h3>
          </div>
          <div className={styles.itemthree}>
            <Image src={"/images/pen.jpg"} width={400} height={400} alt="" />
            <h3>Pens</h3>
          </div>
          <div className={styles.itemthree}>
            <Image src={"/images/box.webp"} width={400} height={400} alt="" />
            <h3>Pencil Box</h3>
          </div>
        </div>
        <div className={styles.three3}>
          <div className={styles.itemthree}>
            <Image src={"/images/paper.webp"} width={400} height={400} alt="" />
            <h3>Paper Cutter</h3>
          </div>
          <div className={styles.itemthree}>
            <Image
              src={"/images/highlight.webp"}
              width={400}
              height={400}
              alt=""
            />
            <h3>Highlighter</h3>
          </div>
          <div className={styles.itemthree}>
            <Image
              src={"/images/stickynote.webp"}
              width={400}
              height={400}
              alt=""
            />
            <h3>StickyNotes</h3>
          </div>
        </div>
      </section>
      <section>
        <h1 className={styles.h1three3}>OUR BEST SELLING</h1>
        <div className={styles.three3}>
          <div className={styles.itemthree1}>
            <Image src={"/images/key.jpg"} width={400} height={400} alt="" />
          </div>
          <div className={styles.itemthree}>
            <Image src={"/images/key2.jpg"} width={400} height={400} alt="" />
          </div>
          <div className={styles.itemthree3}>
            <Image src={"/images/box.webp"} width={400} height={400} alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}
