import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@components/Layout/Layout";
import ProductSummary from "@components/ProductSummary/ProductSummary";

const ProductPage = () => {
  const {
    query: { id },
  } = useRouter();

  const [product, setProduct] = useState<TProduct | null>(null);

  useEffect(() => {
    window.fetch(`/api/avo/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setProduct(response);
      });
  }, [id]);


  return <Layout>
    {product == null ? null : <ProductSummary product={product} />}
  </Layout>;
};

export default ProductPage;
