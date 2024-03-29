import { useState, useContext } from "react";
// import { productReducer, defaultProduct } from "../reducers/ProductReducer";
import ProductContext from "../context/ProductContext";

import styles from "./Product.module.css";
import Card from "./Card";
import ViewList from "./ViewList";

function Product() {
  const [list, setList] = useState([]);
  const [sumTotal, setSumTotal] = useState(0);

  const ctx = useContext(ProductContext);

  const handlerAddProduct = () => {
    // Create new list item
    const newItem = {
      name: ctx.name,
      quantity: ctx.count,
      price: ctx.price,
      discount: ctx.discount,
      total: (ctx.count * ctx.price * (100 - ctx.discount)) / 100,
    };

    // Copy previous list and append new item to its end
    const newList = [...list, newItem];
    console.log("  newList:", newList);
    setList(newList);

    // Add the item total to the running listTotal
    const sum = sumTotal + newItem.total;
    console.log("  sumTotal:", sumTotal);
    setSumTotal(sum);
  };

  return (
    <div className={styles.container}>
      <Card
        // name={ctx.name}
        // count={ctx.count}
        // discount={ctx.discount}
        // price={ctx.price}
        // handlerMinus={handlerMinus}
        // handlerPlus={handlerPlus}
        // handlerChangeName={handlerChangeName}
        // handlerChangePrice={handlerChangePrice}
        handlerAddProduct={handlerAddProduct}
      />
      <ViewList list={list} sum={sumTotal} />
    </div>
  );
}

export default Product;
