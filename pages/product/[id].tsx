import React from "react";
import { useRouter } from "next/router";

const ProductPage = () => {
  const {
    query: { id },
  } = useRouter();

  return <section>This is product page: {id}</section>;
};

export default ProductPage;
