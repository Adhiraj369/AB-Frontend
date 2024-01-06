// import React, { Fragment } from "react";
// import "./Cart.css";
// import CartItemCard from "./CartItemCard";
// import { useSelector, useDispatch } from "react-redux";
// import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
// import { Typography } from "@material-ui/core";
// import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
// import { Link } from "react-router-dom";

// const Cart = ({ history }) => {
//   const dispatch = useDispatch();
//   // const { cartItems } = useSelector((state) => state.cart);


//   // const deleteCartItems = (id) => {
//   //   dispatch(removeItemsFromCart(id));
//   // };

//   const checkoutHandler = () => {
//     history.push("/login?redirect=shipping");
//   };

//   return (
//     <Fragment>
//       {cartItems.length === 0 ? (
//         <div className="emptyCart">
//           <RemoveShoppingCartIcon />

//           <Typography>No Product in Your Cart</Typography>
//           <Link to="/products">View Products</Link>
//         </div>
//       ) : (
//         <Fragment>


//           <main>
//             <section className="container">
//               <div className="box__pink" />
//               <div className="box__cream border__pink" />
//               <div className="box__green border__green">
//                 <h1>your box of happiness</h1>
//                 <p>always remember, the more the merrier :))</p>
//                 <div className="cart__product">
//                   {/* <img src="../images/image1.jpg" className="cart__product--img" /> */}
//                   {/* <div className="cart__product--description">
//                     <h3>product name</h3>
//                     <p>finish</p>
//                     <p>variant if any</p>
//                     <p>quantity</p>
//                   </div> */}
//                   <div className="cart__product--price">
//                     <p>{`₹${cartItems.reduce(
//                       (acc, item) => acc + item.quantity * item.price,
//                       0
//                     )}`}</p>
//                     <p>price per unit</p>
//                   </div>
//                 </div>
//                 {cartItems &&
//                   cartItems.map((item) => (
//                     <div className="cartContainer cart__product" key={item.product}>
//                       <CartItemCard item={item} deleteCartItems={deleteCartItems} />

//                       <p className="cartSubtotal">{`₹${item.price * item.quantity
//                         }`}</p>
//                     </div>
//                   ))}
//                 <hr />

//                 <div className="cart__product--checkbox">
//                   <input type="checkbox" name="gift" />
//                   <label htmlFor="gift">add a gift note/ gift packaging</label>
//                   <br />
//                 </div>
//                 <div className="cart__product--related">
//                   <h1>smallu things you might like...</h1>
//                   <div className="cart__product--related--images">
//                     <a href="../product/product.html" className="image-container">
//                       <img src="../images/image1.jpg" />
//                       <div className="overlay">
//                         <p>
//                           product name
//                           <br />
//                         </p>
//                         <p>cost</p>
//                       </div>
//                     </a>
//                     {/* {cartItems &&
//                       cartItems.map((item) => (
//                         <div className="cartContainer" key={item.product}>
//                           <CartItemCard item={item} deleteCartItems={deleteCartItems} />
//                           <div className="cartInput">
//                             <button
//                               onClick={() =>
//                                 decreaseQuantity(item.product, item.quantity)
//                               }
//                             >
//                               -
//                             </button>
//                             <input type="number" value={item.quantity} readOnly />
//                             <button
//                               onClick={() =>
//                                 increaseQuantity(
//                                   item.product,
//                                   item.quantity,
//                                   item.stock
//                                 )
//                               }
//                             >
//                               +
//                             </button>
//                           </div>
//                           <p className="cartSubtotal">{`₹${item.price * item.quantity
//                             }`}</p>
//                         </div>
//                       ))} */}
//                     <a href="/products" className="image-container">
//                       <img src="../pimages/image1.jpg" />
//                       <div className="overlay">
//                         <p>product name</p>
//                         <p>cost</p>
//                       </div>
//                     </a>
//                     <a href="/products" className="image-container">
//                       <img src="../pimages/image1.jpg" />
//                       <div className="overlay">
//                         <p>product name</p>
//                         <p>cost</p>
//                       </div>
//                     </a>
//                     <a href="/products" className="image-container">
//                       <img src="../pimages/image1.jpg" alt="One" />
//                       <div className="overlay">
//                         <p>product name</p>
//                         <p>cost</p>
//                       </div>
//                     </a>
//                   </div>
//                 </div>
//                 <div className="cart__total">
//                   <div className="cart__total--left">
//                     <p>cart total</p>
//                     {/* <p className="small__text">shipping</p>
//                     <p className="small__text">discount</p>
//                     <p>to be paid</p> */}
//                   </div>
//                   <div className="cart__total--right">
//                     {/* <p>599</p> */}
//                     {/* <p className="small__text">50</p> */}
//                     {/* <p className="small__text">70</p> */}
//                     <p>{`₹${cartItems.reduce(
//                       (acc, item) => acc + item.quantity * item.price,
//                       0
//                     )}`}</p>
//                   </div>
//                 </div>
//                 <div className="cart__btn2">
//                   {/* <a
//                     href="../orderSummary/orderSummary.html"
//                     className="btn checkout__btn"
//                   >
//                     checkout
//                   </a> */}
//                   <a href="/products" className="back__btn  new__width">
//                     back to shop
//                   </a>
//                   <button onClick={checkoutHandler} className="btn  checkout__btn new__width">Check Out</button>

//                 </div>
//               </div>
//             </section>
//           </main>




//           {/* <div className="cartPage">
//             <div className="cartHeader">
//               <p>Product</p>
//               <p>Quantity</p>
//               <p>Subtotal</p>
//             </div>

//             {cartItems &&
//               cartItems.map((item) => (
//                 <div className="cartContainer" key={item.product}>
//                   <CartItemCard item={item} deleteCartItems={deleteCartItems} />
//                   <div className="cartInput">
//                     <button
//                       onClick={() =>
//                         decreaseQuantity(item.product, item.quantity)
//                       }
//                     >
//                       -
//                     </button>
//                     <input type="number" value={item.quantity} readOnly />
//                     <button
//                       onClick={() =>
//                         increaseQuantity(
//                           item.product,
//                           item.quantity,
//                           item.stock
//                         )
//                       }
//                     >
//                       +
//                     </button>
//                   </div>
//                   <p className="cartSubtotal">{`₹${item.price * item.quantity
//                     }`}</p>
//                 </div>
//               ))}

//             <div className="cartGrossProfit">
//               <div></div>
//               <div className="cartGrossProfitBox">
//                 <p>Gross Total</p>
//                 <p>{`₹${cartItems.reduce(
//                   (acc, item) => acc + item.quantity * item.price,
//                   0
//                 )}`}</p>
//               </div>
//               <div></div>
//               <div className="checkOutBtn">
//                 <button onClick={checkoutHandler}>Check Out</button>
//               </div>
//             </div>
//           </div> */}
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };

// export default Cart;
