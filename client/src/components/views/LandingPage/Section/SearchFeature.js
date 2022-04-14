import React from "react";
import { Input } from "antd";

const { Search } = Input;

function SearchFeature(props) {
  const handleSearchTerm = (event) => {
    props.onUpdate(event.currentTarget.value);
  };

  return (
    <Search
      placeholder="Search by typing..."
      allowClear
      onChange={handleSearchTerm}
      style={{ width: 200 }}
      value={props.value}
    />
  );
}

export default SearchFeature;
