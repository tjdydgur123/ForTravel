import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCartItems } from "../../../_actions/user_actions";
import UserCardBlock from "./Sections/UserCardBlock";

function CartPage(props) {
  const dispatch = useDispatch();
  const [Total, setTotal] = useState(0);

  useEffect(() => {
    let cartItems = [];
    // check if "cart" object or data is in the User state in Redux
    if (props.user.userData && props.user.userData.cart) {
      if (props.user.userData.cart.length > 0) {
        props.user.userData.cart.forEach((item) => {
          cartItems.push(item._id);
        });

        dispatch(getCartItems(cartItems, props.user.userData.cart)).then(
          (response) => calculateTotal(response.payload)
        );
      }
    }
  }, [props.user.userData]);

  let calculateTotal = (cartDetail) => {
    let total = 0;

    cartDetail.map((item) => {
      total += parseInt(item.price, 10) * item.quantity;
    });

    setTotal(total);
  };

  return (
    <div style={{ width: "100%", padding: "3rem 4rem" }}>
      <h1>My Cart</h1>
      <div>
        <UserCardBlock products={props.user.cartDetail} />
      </div>
      <div style={{ marginTop: "3rem" }}>
        <h2>Total Amount: ${Total}</h2>
      </div>
    </div>
  );
}

export default CartPage;
