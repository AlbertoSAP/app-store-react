import React, { useEffect, useState } from "react";
import { CardProduct } from "../Shared/CardProduct";
import { productCallEndPoint } from "../services/Product";
import { IProduct } from "../interface/IProduct";

export const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const { getAllProducts } = productCallEndPoint();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
      const productList = await getAllProducts() 
      setProducts(productList)
      } catch (error) {}
    };
    fetchProducts();
  }, [getAllProducts]);

  return (<>
  {
    products.length > 0 ?
    <CardProduct listProducts={products} />
    : <div>No hay productos que mostrar</div>
  }
  </>);
};
