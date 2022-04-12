import React from "react";
import { Affix, Button } from "antd";
import { withRouter } from "react-router-dom";

function LeftMenu(props) {
  return (
    <Affix>
      <Button
        type="primary"
        onClick={() => {
          props.history.push("/");
        }}
      >
        Home
      </Button>
    </Affix>
  );
}

export default withRouter(LeftMenu);
