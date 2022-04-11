/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Affix, Button } from "antd";
import axios from "axios";
import { USER_SERVER } from "../../../Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function RightMenu(props) {
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <div style={{ display: "flex" }}>
        <Affix>
          <Button
            type="primary"
            onClick={() => {
              props.history.push("/login");
            }}
          >
            Signin
          </Button>
        </Affix>
        <div style={{ width: "15px" }} />
        <Affix>
          <Button
            type="primary"
            onClick={() => {
              props.history.push("/register");
            }}
          >
            Signup
          </Button>
        </Affix>
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex" }}>
        <Affix>
          <Button
            type="primary"
            onClick={() => {
              props.history.push("/product/upload");
            }}
          >
            Upload
          </Button>
        </Affix>
        <div style={{ width: "15px" }} />
        <Affix>
          <Button type="primary" onClick={logoutHandler}>
            Logout
          </Button>
        </Affix>
      </div>
    );
  }
}

export default withRouter(RightMenu);
