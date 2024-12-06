import styles from "../styles/header.module.css"
import Image from "next/image";
import Link from "next/link";
export default function Header(){
    return(
        <main>
            <section className={styles.headerbg}>
                <div>
                    <Image 
                    src={"/images/Tje DIY Store.png"}
                    width={90}
                    height={90}
                    alt="Logo"
                    className={styles.logodiv}
                    />
                </div>
                <div className={styles.brandname}>
                    THE DIY STUDIO
                </div>
              <nav>
                    <ul className={styles.ul}>
                    <li>
              <Link href="/" className={styles.lihover}>Home</Link>
                    </li>
                    <li>
              <Link href="/careers" className={styles.lihover}>Careers</Link>
                    </li>
                    <li>
              <Link href="/about" className={styles.lihover}>About</Link>
                    </li>
                    <li>
              <Link href="/collection" className={styles.lihover}>Collection</Link>
                    </li>
                    </ul>
                </nav>
            </section>    
        </main>
    )
}