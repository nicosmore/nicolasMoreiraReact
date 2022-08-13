import React, { createContext, useEffect, useState } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartComponentContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  const quantityProducts = () => {
    let qty = 0;
    products.forEach((product) => {
      qty += product.quantity;
    });
    setQuantity(qty);
  };

  const total = () => {
    let pesos = 0;
    products.forEach((product) => {
      pesos += product.precio * product.quantity;
    });
    setValorTotal(pesos);
  };

  useEffect(() => {
    quantityProducts();
    total();
  }, [products]);

  const addItem = (product) => {
    if (isInCart(product.id)) {
      const prodAux = [...products];
      const found = prodAux.find((x) => x.id === product.id);
      found.quantity += product.quantity;
      setProducts(prodAux);
    } else {
      setProducts([...products, product]);
    }
  };

  const removeItem = (id) => {
    const newList = products.filter((p) => p.id !== id);
    setProducts(newList);
    console.log(id);
  };

  const clear = () => {
    setProducts([]);
    quantityProducts(0);
  };

  const isInCart = (id) => {
    return products.some((product) => product.id === id);
  };

  return (
    <Provider
      value={{ quantity, products, addItem, removeItem, clear, valorTotal }}
    >
      {children}
    </Provider>
  );
};

export default CartComponentContext;
