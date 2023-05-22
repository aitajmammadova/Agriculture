import React from "react";
import { Link } from "react-router-dom";
function Product({ data }) {
    return (
        <Link to={`/shop-single/${data.id}`}>


            <div className="shop_product">
                <div className="shop_product_tag">
                    <p>{data.category}</p>
                </div>
                <div className="shop_product_images">
                    <img src={data.images} />
                </div>

                <div className="shop_product_content">
                    <div className="shop_product_name">{data.name}</div>
                    <div className="shop_product_pricing_rating">
                        <div className="shop_product_pricing">
                            <div className="old_price">${data.oldprice.toFixed(2)}</div>
                            <div className="new_price">${data.newprice.toFixed(2)}</div>
                        </div>
                        <div className="shop_product_rating">
                            <img src="/stars.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Product;
