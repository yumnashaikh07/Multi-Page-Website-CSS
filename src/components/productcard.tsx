import styles from '../styles/collection.module.css';
import Image from 'next/image';

interface Product {
  image: string;
  title: string;
  description: string;
  price: string;}
const ProductCard = ({product}:{product :Product}) => {
  return (
    <div className={styles.card}>
      <Image src={product.image} alt={product.title} className={styles.productImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>${product.price}</p>
        <button className={styles.addToCartButton}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;