import { useState, useReducer } from "react";
import { productReducer, defaultProduct } from "../reducers/ProductReducer";

import styles from "./Product.module.css";
import Card from "./Card";
import ViewList from "./ViewList";

function Product() {
  const [list, setList] = useState([]);
  const [sumTotal, setSumTotal] = useState(0);

  const [state, dispatch] = useReducer(productReducer, defaultProduct);

  const handlerPlus = () => {
    dispatch({ type: "PLUS_COUNT" });
  };

  const handlerMinus = () => {
    dispatch({ type: "MINUS_COUNT" });
  };

  const handlerChangeName = (value) => {
    dispatch({ type: "SET_NAME", name: value });
  };

  const handlerChangePrice = (value) => {
    dispatch({ type: "SET_PRICE", price: value });
  };

  const handlerAddProduct = () => {
    // Create new list item
    const newItem = {
      name: state.name,
      quantity: state.count,
      price: state.price,
      discount: state.discount,
      total: (state.count * state.price * (100 - state.discount)) / 100,
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
        name={state.name}
        count={state.count}
        discount={state.discount}
        price={state.price}
        handlerMinus={handlerMinus}
        handlerPlus={handlerPlus}
        handlerChangeName={handlerChangeName}
        handlerChangePrice={handlerChangePrice}
        handlerAddProduct={handlerAddProduct}
      />
      <ViewList list={list} sum={sumTotal} />
    </div>
  );
}

export default Product;
