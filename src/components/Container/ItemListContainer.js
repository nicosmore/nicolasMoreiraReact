import ItemList from "./ItemList";
import Loading from "../Animaciones/Loading";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({ mensaje }) => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [laoded, setLoaded] = useState(true);

  useEffect(() => {
    const productCollection = categoryName
      ? query(
          collection(db, "productos"),
          where("categoria", "==", categoryName)
        )
      : collection(db, "productos");

    getDocs(productCollection)
      .then((result) => {
        const lista = result.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setProducts(lista);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoaded(false));
  }, [categoryName]);

  if (laoded) {
    return <Loading />;
  }
  return (
    <div className="container">
      <h4 className="d-flex justify-content-center border-top pt-3 fw-normal">
        {mensaje}
      </h4>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
