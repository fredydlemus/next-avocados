import Layout from "@components/Layout/Layout";
import React, { useState, useEffect } from "react";
import Header from "@components/Header/Header";
import ProductList from "@components/ProductList/ProductList";


const HomePage = () => {

  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window.fetch('api/avo')
      .then(response => response.json())
      .then(({ data }: TAPIAvoResponse) => {
        setProductList(data);
      })
  }, []);

  return (
    <Layout>
      <Header />
      <ProductList products={productList} />
    </Layout>
  );
};

export default HomePage;
