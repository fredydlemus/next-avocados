import React, { useState, useEffect } from "react";


const HomePage = () => {

  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window.fetch('api/avo')
      .then(response => response.json())
      .then(({ data, length }) => {
        setProductList(data);
      })
  }, []);

  return (
    <div>
      <>
        <h1>HelloWorld!</h1>
        {productList.map((product) => (
          <div>{product.name}</div>
        ))}
      </>
    </div>
  );
};

export default HomePage;
