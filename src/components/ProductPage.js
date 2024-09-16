import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Fouro4 from "./Fouro4";

function ProductPage() {
  const [product, setProduct] = useState([]);
  const { productID } = useParams();
  console.log(productID);

  useEffect(() => {
    fetch("/iphone.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        const productList = data.products;
        const singleProduct = productList.filter(
          (product) => product.product_url === productID
        );
        setProduct(singleProduct);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, [productID]);

  console.log(product);

  if (product.length) {
    return (
      <div>
        <section className="internal_page-wrapper">
          <div className="container">
            {product?.map((product) => (
              <div key={product.product_id}>
                <div className="justify-content-center text-center">
                  <div className="col-12 mt-5 pt-5">
                    <div className="title-wraper font-weight-bold">
                      {product.product_name}
                    </div>
                    <div className="brief_description">
                      {product.product_brief_description}
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center text-center product-holder h-100 m-5">
                  <div className="starting-price">
                    {`Starting at $${product.starting_price}`}
                  </div>
                  <div className="monthly-price">{product.price_range}</div>
                  <div className="product-detail">
                    {product.product_description}
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="product-image">
                      <img src={product.product_img} alt="product" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  } else {
    return <Fouro4 />;
  }
}

export default ProductPage;
