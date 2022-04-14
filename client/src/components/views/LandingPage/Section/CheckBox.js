import React, { useState } from "react";
import { Collapse, Checkbox } from "antd";

const { Panel } = Collapse;

function CheckBox(props) {
  const [Checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    props.handleFilters(newChecked);
  };

  const renderCheckboxLists = (value, index) => {
    return (
      <React.Fragment key={index}>
        <Checkbox
          onChange={() => handleToggle(value._id)}
          checked={Checked.indexOf(value._id) !== -1 ? true : false}
        />
        <span>{value.name}</span>
      </React.Fragment>
    );
  };

  return (
    <div>
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="Continents" key="1">
          {props.list &&
            props.list.map((value, index) => renderCheckboxLists(value, index))}
        </Panel>
      </Collapse>
    </div>
  );
}

export default CheckBox;
