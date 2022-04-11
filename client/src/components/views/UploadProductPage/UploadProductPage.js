import React, { useState } from "react";
import { Typography, Button, Form, Input } from "antd";

const { TextArea } = Input;

function UploadProductPage() {
  const [Title, setTitle] = useState("");
  const [Describtion, setDescribtion] = useState("");
  const [Price, setPrice] = useState(0);
  const [Continent, setContinent] = useState(1);

  const [Image, setImage] = useState([]);

  const titleChangeHandler = (event) => {
    setTitle(event.currentTarget.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescribtion(event.currentTarget.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.currentTarget.value);
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2>Upload Travel Product</h2>
      </div>

      <Form>
        {/* DropZone */}
        <label>Title</label>
        <Input onChange={titleChangeHandler} value={Title} />
        <br />
        <br />
        <label>Describtion</label>
        <TextArea onChange={descriptionChangeHandler} value={Describtion} />
        <br />
        <br />
        <label>{`Price($)`}</label>
        <Input onChange={priceChangeHandler} value={Price} />
        <br />
        <br />
        <select>
          <option></option>
        </select>
        <br />
        <br />
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
