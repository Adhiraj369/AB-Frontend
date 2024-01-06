import React, { Fragment, useEffect, useState } from "react";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import SideBar from "./Sidebar";
import {
  getOrderDetails,
  clearErrors,
  updateOrder,
} from "../../actions/orderAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import { Button } from "@material-ui/core";
import { UPDATE_ORDER_RESET } from "../../constants/orderConstants";
import "./processOrder.css";

const ProcessOrder = ({ history, match }) => {
  const { order, error, loading } = useSelector((state) => state.orderDetails);
  const { error: updateError, isUpdated } = useSelector((state) => state.order);

  const updateOrderSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("status", status);

    dispatch(updateOrder(match.params.id, myForm));
  };

  const dispatch = useDispatch();
  const alert = useAlert();

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Order Updated Successfully");
      dispatch({ type: UPDATE_ORDER_RESET });
    }

    dispatch(getOrderDetails(match.params.id));
  }, [dispatch, alert, error, match.params.id, isUpdated, updateError]);

  return (
    <Fragment>
      <MetaData title="Process Order" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          {loading ? (
            <Loader />
          ) : (
            <div
              className="confirmOrderPage"
              style={{
                display: order.orderStatus === "Delivered" ? "block" : "grid",
              }}
            >
              <div>
                <div className="confirmshippingArea">
                  <Typography>Registeration Info</Typography>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <h3>Name:</h3>
                      <span>{order.user && order.user.name}</span>
                    </div>
                    <div>
                      <h3>Phone:</h3>
                      <span>
                        {order.shippingInfo && order.shippingInfo.contactNo}
                      </span>
                    </div>
                    <div>
                      <h3>College Name:</h3>
                      <span>
                        {order.shippingInfo &&
                          `${order.shippingInfo.collegeName}`}
                      </span>
                    </div>
                    <div>
                      <h3>Email:</h3>
                      <span>
                        {order.shippingInfo &&
                          `${order.shippingInfo.email}`}
                      </span>
                    </div>
                    <div>
                      <h3>Team Name:</h3>
                      <span>
                        {order.shippingInfo &&
                          `${order.shippingInfo.teamName}`}
                      </span>
                    </div>
                    <div>
                      <h3>Leader's Name:</h3>
                      <span>
                        {order.shippingInfo &&
                          `${order.shippingInfo.leaderName}`}
                      </span>
                    </div>
                    <div>
                      <h3>Contact Number:</h3>
                      <span>
                        {order.shippingInfo &&
                          `${order.shippingInfo.contactNo}`}
                      </span>
                    </div>
                    <div>
                      <h3>Instruments Required:</h3>
                      <span>
                        {order.shippingInfo &&
                          `${order.shippingInfo.instrument}`}
                      </span>
                    </div>
                    <div>
                      <h3>Extra Requirements:</h3>
                      <span>
                        {order.shippingInfo &&
                          `${order.shippingInfo.extraRequirments}`}
                      </span>
                    </div>
                    <div>
                      <h3>Selected Committee 1:</h3>
                      <span>
                        {order.shippingInfo &&
                          `${order.shippingInfo.committeeOne}`}
                      </span>
                    </div>
                    <div>
                      <h3>Selected Committee 2:</h3>
                      <span>
                        {order.shippingInfo &&
                          `${order.shippingInfo.committeeTwo}`}
                      </span>
                    </div>
                    <div>
                      <h3>Selected Committee 3:</h3>
                      <span>
                        {order.shippingInfo &&
                          `${order.shippingInfo.committeeThree}`}
                      </span>
                    </div>
                    <div>
                      <h3>Accomodation Required:</h3>
                      <span>
                        {order.shippingInfo &&
                          `${order.shippingInfo.accomodation}`}
                      </span>
                    </div>
                    <div>
                    </div>
                  </div>

                  <Typography>Payment</Typography>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <p
                        className={
                          order.paymentInfo &&
                            order.paymentInfo.status === "succeeded"
                            ? "greenColor"
                            : "redColor"
                        }
                      >
                        {order.paymentInfo &&
                          order.paymentInfo.status === "succeeded"
                          ? "PAID"
                          : "NOT PAID"}
                      </p>
                    </div>

                    <div>
                      <p>Amount:</p>
                      <span>{order.totalPrice && order.totalPrice}</span>
                    </div>
                  </div>

                  <Typography>Order Status</Typography>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <p
                        className={
                          order.orderStatus && order.orderStatus === "Delivered"
                            ? "greenColor"
                            : "redColor"
                        }
                      >
                        {order.orderStatus && order.orderStatus}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="confirmCartItems">

                  <Typography>Your Cart Items:</Typography>
                  <div className="confirmCartItemsContainer">

                    {order.orderItems &&
                      order.orderItems.map((item) => (
                        <div key={item.product}>
                          <img src={item.image} alt="Product" />
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>{" "}
                          <br />
                          {console.log('Item Variant:', item.variant)}
                          <span>Variant: {item.variant + ''}</span><br />
                          Pack: {item.pack + ''}<br />
                          <span>

                            {item.quantity} X ₹{item.price} ={" "}
                            <b>₹{item.price * item.quantity}</b>
                          </span>

                        </div>
                      ))}
                  </div>
                </div>
              </div>
              {/*  */}
              <div
                style={{
                  display: order.orderStatus === "Delivered" ? "none" : "block",
                }}
              >
                <form
                  className="updateOrderForm"
                  onSubmit={updateOrderSubmitHandler}
                >
                  <h1>Process Order</h1>

                  <div>
                    <AccountTreeIcon />
                    <select onChange={(e) => setStatus(e.target.value)}>
                      <option value="">Choose Category</option>
                      {order.orderStatus === "Processing" && (
                        <option value="Shipped">Shipped</option>
                      )}

                      {order.orderStatus === "Shipped" && (
                        <option value="Delivered">Delivered</option>
                      )}
                    </select>
                  </div>

                  <Button
                    id="createProductBtn"
                    type="submit"
                    disabled={
                      loading ? true : false || status === "" ? true : false
                    }
                  >
                    Process
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ProcessOrder;
