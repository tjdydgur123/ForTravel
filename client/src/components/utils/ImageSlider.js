import React from "react";
import { Carousel } from "antd";

function ImageSlider(props) {
  return (
    <div>
      <Carousel autoplay>
        {props.images.map((image, index) => {
          return (
            <div key={index}>
              <img
                style={{ width: "100%", maxHeight: "150px" }}
                src={
                  process.env.NODE_ENV === "development"
                    ? `http://localhost:4000/${image}`
                    : `https://fortravel.herokuapp.com/${image}`
                }
                alt=""
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
