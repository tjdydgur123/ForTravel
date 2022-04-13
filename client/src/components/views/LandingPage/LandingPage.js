import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Card, Row, Button } from "antd";
import { RocketOutlined } from "@ant-design/icons";
import ImageSlider from "../../utils/ImageSlider";

const { Meta } = Card;

function LandingPage() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/product/products").then((response) => {
      if (response.data.success) {
        setProducts(response.data.productInfo);
      } else {
        alert("Failed to fetch the products data");
      }
    });
  }, []);

  const renderCards = Products.map((product, index) => {
    console.log(product);

    return (
      <Col key={index} lg={6} md={8} xs={24}>
        <Card hoverable cover={<ImageSlider images={product.images} />}>
          <Meta title={product.title} description={`$${product.price}`} />
        </Card>
      </Col>
    );
  });

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2>
          Let's Travel Anywhere <RocketOutlined />
        </h2>
      </div>

      {/* Filter */}

      {/* Search */}

      <Row gutter={(16, 16)}>{renderCards}</Row>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button>More</Button>
      </div>
    </div>
  );
}

export default LandingPage;
