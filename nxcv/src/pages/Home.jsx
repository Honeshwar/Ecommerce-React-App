import { useSelector } from "react-redux";
import { SortBy, Product } from "../components";
import styles from "../styles/home.module.css";

export default function Home() {
 const products =  useSelector((state)=> state.products);
  // const { allProducts, productsSorted } = products;

  return (
    <div className={styles.products}>
      {/* <SortBy productsSorted={false} isCart={true} cartSorted={false}/> */}
      <div className={styles.listOfProducts}>
        {products?.map((product, index) => (
          <Product
            key={index}
            product={product}
            // cart={cart}
          />
        ))}
      </div>
    </div>
  );
}
