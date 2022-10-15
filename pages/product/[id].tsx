import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

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


  return <section>
    <p>This is product page: {id}</p>
    <div>{product?.name}</div>
  </section>;
};

export default ProductPage;
