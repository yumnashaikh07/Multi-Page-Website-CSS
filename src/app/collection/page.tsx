import styles from "../../styles/collection.module.css"
import ProductCard from "@/components/productcard";
import Link from "next/link";
const products = [
  {
    title: 'Keychain',
    description: 'It is a Great Quality Product. Perfect for Back to School Gift.',
    price: '19.99',
    image: "/images/key.jpg",
  },
  {
    title: 'Tapes',
    description: 'High-quality product with variety of colors.',
    price: '49.99',
    image: "/images/tape.webp",
  },
  {
    title: 'Box',
    description: 'An essential product for your school supplies',
    price: '29.99',
    image: "/images/box.webp",
  },
];

export default function Collection() {
  return (
    <main >
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
    <Link href={"/"} ><button className={styles.button} >
        MORE PRODUCTS
    </button></Link>
    </main>
  );
}
