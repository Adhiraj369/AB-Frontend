import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
  SAVE_PRODUCT_INFO,
} from "../constants/cartConstants";
import axios from "axios";

// // Add to Cart
// export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
//   const { data } = await axios.get(`/api/v1/product/${id}`);

//   dispatch({
//     type: ADD_TO_CART,
//     payload: {
//       product: data.product._id,
//       name: data.product.name,
//       price: data.product.price,
//       image: data.product.images[0].url,
//       stock: data.product.Stock,
//       variant: data.product.variant,
//       pack: data.product.pack,
//       quantity,
//     },
//   });

//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };

// // REMOVE FROM CART
// export const removeItemsFromCart = (id) => async (dispatch, getState) => {
//   dispatch({
//     type: REMOVE_CART_ITEM,
//     payload: id,
//   });

//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };

// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};


// SAVE_PRODUCT_INFO
export const saveProductInfo = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/v1/product/${id}`);
    dispatch({
      type: SAVE_PRODUCT_INFO,
      payload: {
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
        stock: data.product.Stock,
        variant: data.product.variant,
        pack: data.product.pack,
        isPay: data.product.isPay
      },
    });

    localStorage.setItem("productInfo", JSON.stringify(getState().cart.productInfo));
  } catch (error) {
    console.error("Error fetching product details:", error);
    // Handle error, show a message, etc.
  }
};


// export const saveProductInfo = (id) => async (dispatch, getState) => {
//   const { data } = await axios.get(`/api/v1/product/${id}`);
//   dispatch({
//     type: SAVE_PRODUCT_INFO,
//     payload: {
//       product: data.product._id,
//       name: data.product.name,
//       price: data.product.price,
//       image: data.product.images[0].url,
//       stock: data.product.Stock,
//       variant: data.product.variant,
//       pack: data.product.pack,

//     },
//   });

//   localStorage.setItem("productInfo", JSON.stringify(getState().productInfo));
// }
