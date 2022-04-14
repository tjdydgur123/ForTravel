import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductImage from "./Section/ProductImage";
import ProductInfo from "./Section/ProductInfo";
import { Row, Col } from "antd";

function DetailProductPage(props) {
  const [Product, setProduct] = useState({});
  console.log(Product);
  // getting productId from current URL
  const productId = props.match.params.productId;
  //   console.log(props.match.params.productId);

  useEffect(() => {
    axios
      .get(`/api/product/products_by_id?id=${productId}&type=single`)
      .then((response) => {
        if (response.data.success) {
          setProduct(response.data.product[0]);
          // console.log(response.data.product);
        } else {
          alert("Failed to bring the product detail page...");
        }
      });
  }, []);

  return (
    <div style={{ width: "100%", padding: "3rem 4rem" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>{Product.title}</h1>
      </div>

      <Row gutter={[16, 16]}>
        <Col lg={12} sm={24}>
          {/* ProductImage */}
          <ProductImage detail={Product} />
        </Col>

        <Col lg={12} sm={24}>
          {/* ProductInfo */}
          <ProductInfo />
        </Col>
      </Row>
    </div>
  );
}

export default DetailProductPage;
