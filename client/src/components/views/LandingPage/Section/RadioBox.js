import React, { useState } from "react";
import { Collapse, Radio } from "antd";

const { Panel } = Collapse;

function RadioBox(props) {
  const [Value, setValue] = useState(0);

  const handleToggle = (priceId) => {
    setValue(priceId);

    props.handleFilters(priceId);
  };

  const renderRadioboxLists = (price) => {
    return (
      <React.Fragment key={price._id}>
        <Radio.Group onChange={() => handleToggle(price._id)} value={Value}>
          <Radio value={price._id}>{price.name}</Radio>
        </Radio.Group>
      </React.Fragment>
    );
  };

  return (
    <div>
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="Prices" key="1">
          {props.list && props.list.map((price) => renderRadioboxLists(price))}
        </Panel>
      </Collapse>
    </div>
  );
}

export default RadioBox;
