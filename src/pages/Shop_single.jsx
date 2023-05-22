import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import { connect } from "react-redux";
function Shop_single({ basket, dispatch }) {
  const [products, setProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState(1);
  const [count, setCount] = useState(1);

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:1313/products`)
      .then((a) => a.json())
      .then((a) => setProducts(a));
  }, []);
  // const inBasket = basket.find((t)=> t.id ===a.id);
  const product = products.find((a) => a.id === +id);
  const addToBasket = (id, e) => {
    e.preventDefault();
    // console.log("id"+id)
    let check = basket.find((a) => a.id === id);
    if (check) {
      check.count = count;
      dispatch({
        type: "SET_BASKET",
        payload: [...basket],
      });
      return;
    }
    dispatch({
      type: "SET_BASKET",
      payload: [...basket, { id: id, count: count }],
    });
    localStorage.setItem(
      "basket",
      JSON.stringify([...basket, { id: id, count: count }])
    );
  };
  const countSet = () => {
    setCount(1);
  };
  return products.length ? (
    <>
      <section className="shop_single_banner">
        <h1 className="shop_single_title">Shop</h1>
      </section>

      <section className="single_shop_main container">
        <div className="single_shop_products">
          <div className="single_product">
            <div className="shop_single_product_tag">
              <p>{product.category}</p>
            </div>
            <a className="shop_single_product_images">
              <img src={product.images} />
            </a>
          </div>
          <div className="single_product_content">
            <a className="shop_single_product_name">{product.name}</a>
            <div className="shop_single_product_pricing_rating">
              <div className="shop_single_product_rating">
                <img src="/stars.svg" />
              </div>
              <div className="shop_single_product_pricing">
                <div className="shop_single_old_price">${product.oldprice}</div>
                <div className="shop_single_new_price">${product.newprice}</div>
              </div>
            </div>
            <p className="single_product_content_text">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>

            <form className="commerce_quantity_card">
              <div className="shop_quantity">
                <label className="quantity_text" htmlFor="quantity">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                />
              </div>
              <div className="shop_card">
                <button
                  onClick={(e) => addToBasket(product.id, e)}
                  className="blue_btn"
                >
                  <p>Add To Cart</p>
                  <i className="fa-solid fa-circle-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="product_information">
          <div className="product_des_info">
            {/* <input
              type="radio"
              classNameName="radioclassName radiopd"
              id="pd"
              name="single_product_additional"
            /> */}
            <div
              onClick={() => setSelectedOption(1)}
              className="product_description"
              id={selectedOption === 1 ? "selected__option" : ""}
              htmlFor="pd"
            >
              Product Description
            </div>
            {/* <input
              type="radio"
              classNameName="radioclassName radioai"
              id="ai"
              name="single_product_additional"
            /> */}
            <div
              onClick={() => setSelectedOption(2)}
              className="add_info"
              id={selectedOption === 2 ? "selected__option" : ""}
              htmlFor="ai"
            >
              Additional Info
            </div>
          </div>
          {selectedOption === 1 ? (
            <p className="product_description_text">
              Welcome to the world of natural and organic. Here you can discover
              the bounty of nature. We have grown on the principles of health,
              ecology, and care. We aim to give our customers a healthy
              chemical-free meal for perfect nutrition. It offers about 8–10%
              carbs. Simple sugars — such as glucose and fructose — make up 70%
              and 80% of the carbs in raw.
            </p>
          ) : (
            <p className="additional_info_text">
              It contains a high concentration of nitrates, which have a blood
              pressure-lowering effect. This may lead to a reduced risk of heart
              attacks, heart failure, and stroke also rich in Vitamin C which
              helps in clearing blemishes and evens out your skin tone while
              giving it a natural glow lowering blood pressure and increasing
              exercise performance.
            </p>
          )}
        </div>
      </section>

      <section className="related_products_main container">
        <h1 className="shop_single_title">Related Products</h1>
        <div className="related_products">
          {products
            .filter((a) => a.id !== product.id)
            .slice(0, 4)
            .map((a) => (
              <Product data={a} key={a.id} onClick={() => countSet()} />
            ))}
        </div>
      </section>
    </>
  ) : null;
}
const t = (a) => a;
export default connect(t)(Shop_single);
