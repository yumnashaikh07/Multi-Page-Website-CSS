import { FaPinterest, FaLinkedin, FaInstagram ,FaGithub} from "react-icons/fa";
import Link from "next/link";
import styles from "../styles/footer.module.css";
export default function Footer() {
  return (
    <main className={styles.footermain}>
      <section className={styles.footersection1}>
        <h1 className={styles.h1}>THE DIY STUDIO</h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
     
      <div className={styles.divider}></div>
      <div className={styles.icondiv}>
            <a
              href="https://github.com/yumnashaikh07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <FaInstagram size={21} />
            </a>
            <a
              href="https://github.com/yumnashaikh07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <FaGithub size={21} />
            </a>
            <a
              href="https://www.linkedin.com/in/yumna-shaikh-b90191337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={21} />
            </a>
            <a
              href="https://github.com/yumnashaikh07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pintrest"
            >
              <FaPinterest size={21} />
            </a>
          </div>
          </section>
          <section className={styles.footersection2}>
            <h1 className={styles.footersection2h1}>QUICK LINKS</h1>
          <nav>
                    <ul className={styles.footerul}>
                    <li>
              <Link href="/" className={styles.footerlihover}>Home</Link>
                    </li>
                    <li>
              <Link href="/careers" className={styles.footerlihover}>Careers</Link>
                    </li>
                    <li>
              <Link href="/about" className={styles.footerlihover}>About</Link>
                    </li>
                    <li>
              <Link href="/collection" className={styles.footerlihover}>Collection</Link>
                    </li>
                    </ul>
                </nav>
                </section>
    </main>
  );
}
