import React, { Fragment } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import "./ConfirmOrder.css";
// import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { createOrder } from "../../actions/orderAction";

const ConfirmOrder = ({ history }) => {
  const { shippingInfo, cartItems, productInfo } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const dispatch = useDispatch();

  // const subtotal = cartItems.reduce(
  //   (acc, item) => acc + item.quantity * item.price,
  //   0
  // );



  console.log("Now", productInfo.isPay)

  // const amounttotal = productInfo.price;

  const newAmount = productInfo.price;


  // const shippingCharges = subtotal > 1000 ? 0 : 200;

  // const tax = subtotal * 0.18;

  // const totalPrice = amounttotal;

  const address = `${shippingInfo.leaderName}, ${shippingInfo.collegeName}, ${shippingInfo.contactNo}`;

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: productInfo.price,
    totalPrice: productInfo.price,
  };

  console.log("Here", newAmount)

  const proceedToPayment = () => {
    const data = {
      newAmount,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));
    console.log("orderInfo in sessionStorage:", sessionStorage.getItem("orderInfo"));
    // history.push("/process/payment");
    if (productInfo.isPay === "true") {
      history.push("/process/payment");

    } else {

      dispatch(createOrder(order));
      history.push("/success")

    }
  };

  return (
    <Fragment>
      <MetaData title="Confirm Order" />
      <CheckoutSteps activeStep={1} />
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Info</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography>Your Cart Items:</Typography>


            <div className="confirmCartItemsContainer">
              {productInfo &&

                <h1>{productInfo.name}</h1>}

            </div>
          </div>
        </div>

        <div>
          <div className="orderSummary">
            <Typography>Order Summery</Typography>


            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>₹{newAmount}</span>
            </div>

            <button onClick={proceedToPayment} className="disable">Proceed To Payment</button>

          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;