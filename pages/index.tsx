import Layout from "@components/Layout/Layout";
import React, { useState, useEffect } from "react";
import Header from "@components/Header/Header";
import ProductList from "@components/ProductList/ProductList";

export const getServerSideProps = async () => {
  const response = await fetch('https://avo-shop-xi.vercel.app/api/avo');
  const { data: productList }: TAPIAvoResponse = await response.json();

  return {
    props: {
      productList,
    }
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {

  return (
    <Layout>
      <Header />
      <ProductList products={productList} />
    </Layout>
  );
};

export default HomePage;
