import React, { useEffect, useState } from "react";

import Product from "../components/Product";
function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1313/products")
      .then((a) => a.json())
      .then((a) => setProducts(a));
  }, []);
  return (
    <>
      <section class="shop_banner"></section>
      <section class="shop_main container">
        <div class="shop_products">
          {products.map((a) => (
            <Product data={a} key={a.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Shop;
