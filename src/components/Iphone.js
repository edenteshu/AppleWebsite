import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/iphone.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch(() => console.log("error: unable to fetch!!"));
  }, []); // Add an empty dependency array to run the effect only once on mount.

  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <h1 className="font-weight-bold">iPhones</h1>
              <div className="brief-description mb-5">
                The best for the brightest.
              </div>
            </div>
          </div>

          {products?.map((product, index) => (
            <div
              key={product.product_url}
              className="row justify-content-center text-center product-holder h-100"
            >
              <div
                className={`col-sm-12 col-md-6 my-auto order-${
                  index % 2 === 0 ? "1" : "2"
                }`}
              >
                <div className="product-title">{product.product_name}</div>
                <div className="product-brief">
                  {product.product_brief_description}
                </div>
                <div className="starting-price">{`Starting at ${product.starting_price}`}</div>
                <div className="monthly-price">{product.price_range}</div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <Link to={`/iphones/${product.product_url}`}>
                        Learn more
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`col-sm-12 col-md-6 order-${
                  index % 2 === 0 ? "2" : "1"
                }`}
              >
                <div className="product-image">
                  <img src={product.product_img} alt={product.product_name} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Iphone;
