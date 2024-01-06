import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../actions/productAction";
import { saveProductInfo } from "../../actions/cartAction";
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { addItemsToCart } from "../../actions/cartAction";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";

const ProductDetails = ({ match, history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );

  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [selectedPack, setSelectedPack] = useState('');

  const packOptions = ['3', '5', '10'];

  //Product Info
  function redirectHandler() {
    history.push("/login?redirect=shipping");
  };

  const { productInfo } = useSelector((state) => state.cart);

  const handleProductInfo = () => {
    dispatch(saveProductInfo(match.params.id));
    alert.success("Item Added");
    redirectHandler();

  };

  // const increaseQuantity = () => {
  //   if (product.Stock <= quantity) return;

  //   const qty = quantity + 1;
  //   setQuantity(qty);
  // };

  // const decreaseQuantity = () => {
  //   if (1 >= quantity) return;

  //   const qty = quantity - 1;
  //   setQuantity(qty);
  // };

  const dropdownOptions = [];
  for (let i = 1; i <= product.Stock; i++) {
    dropdownOptions.push(i);
  }

  const variantOptions = [];
  for (let x = 1; x <= product.variant; x++) {
    variantOptions.push(x);
  }

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  const handleVariantChange = (event) => {
    const newVariant = parseInt(event.target.value);
    setVariant(newVariant);
  };

  // const addToCartHandler = () => {
  //   dispatch(addItemsToCart(match.params.id, quantity));
  //   alert.success("Item Added To Cart");
  // };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", match.params.id);

    dispatch(newReview(myForm));

    setOpen(false);
  };


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert, reviewError, success]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${product.name} -- ECOMMERCE`} />

          <main>
            <section className="product__cart">
              <div className="cart__items">
                <div className="cart__item">
                  <p>item 1</p>
                  <img src="" alt="" className="cart__item--img" />
                  <div>
                    <p>quantity</p>
                    <p>price</p>
                  </div>
                </div>
                <hr />
                <div className="cart__item">
                  <p>item 1</p>
                  <img src="" alt="" className="cart__item--img" />
                  <div>
                    <p>quantity</p>
                    <p>price</p>
                  </div>
                </div>
                <hr />
                <div className="cart__item">
                  <p>item 1</p>
                  <img src="" alt="" className="cart__item--img" />
                  <div>
                    <p>quantity</p>
                    <p>price</p>
                  </div>
                </div>
                <hr />
                <div className="cart__total">
                  <div>
                    <p>cart total</p>
                    <p>price</p>
                  </div>
                  <a href="" className="btn checkout__btn2">
                    check out
                  </a>
                </div>
              </div>
              <div className="product__cart--nav">
                <a>
                  <i className="fa-solid fa-chevron-left" />
                </a>
                <a>home/</a>
                <a>shop/</a>
                <a>categories/</a>
                <a>notebooks</a>
              </div>
              {/* <div className="product__cart--image">
                <div className="product__cart--image--main">
                  <div className="navigation_buttons">
                    <div className="product__cart--nav-btn product__cart--prebtn">
                      <i className="fa-solid fa-chevron-left" />
                    </div>
                    <div className="product__cart--nav-btn product__cart--nextbtn">
                      <i className="fa-solid fa-chevron-right" />
                    </div>
                  </div>
                  <div className="product__image__slider">
                    <div className="image main">
                      <img src="../images/image1.jpg" className="product__image--main" />
                    </div>
                    <div className="image">
                      <img src="../images/image2.jpg" className="product__image--main" />
                    </div>
                    <div className="image">
                      <img src="../images/image3.jpg" className="product__image--main" />
                    </div>
                    <div className="image">
                      <img src="../images/image4.jpg" className="product__image--main" />
                    </div>
                  </div>
                </div>
                {/* <img src="../images/image1.jpg" class="product__image--main"> */}

              {/* </div> */}
              <div className="product__cart--image">
                <div className="product__image__slider2">
                  <Carousel className=" main">
                    {product.images &&
                      product.images.map((item, i) => (
                        <img
                          className="product__images product__image--main"
                          key={i}
                          src={item.url}
                          alt={`${i} Slide`}
                        />
                      ))}
                  </Carousel>
                </div>
                <div className="product__cart--images">
                  {/* <i class="fa-solid fa-chevron-left product__nav-btn"></i> */}
                  <img src="../images/image1.jpg" className="product__images" />
                  <img src="../images/image2.jpg" className="product__images" />
                  <img src="../images/image3.jpg" className="product__images" />
                  <img src="../images/image4.jpg" className="product__images" />
                  {/* <i class="fa-solid fa-chevron-right product__nav-btn"></i> */}
                </div>
              </div>
              <div className="product__cart--description">
                <div className="product__cart--description1">
                  <div>
                    <h1>{product.name}</h1>
                    {/* <div className="product__cart--count">
                      <p>sad and single</p>
                      <p>pack of 3</p>
                      <p>pack of 6</p>
                      <p>pack of 10</p>
                    </div> */}
                  </div>
                  {console.log(dropdownOptions)};
                  <div className="product__cart--option">
                    <div className="product__cart--options">
                      <div className="product__options--button">
                        <label htmlFor="quantity">quantity</label>
                        <select id="quantity"
                          name="quantity"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}>
                          {dropdownOptions.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    {console.log("product.variant:", product.variant)
                    };
                    <div className="product__cart--options">
                      <div className="product__options--button">
                        <label htmlFor="variant">Variants</label>
                        {/* {console.log("this is variant", variant)} */}
                        <select id="variant"
                          name="variant"
                          value={variant}
                          onChange={(e) => setVariant(e.target.value)}>
                          {/* // value={setVariant}
                          // onChange={handleVariantChange} */}
                          <option value="">0</option>
                          {variantOptions.map((variant, index) => (
                            <option key={index} value={variant}>
                              {variant}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="product__cart--options">
                      <div className="product__options--button">
                        <label htmlFor="variant">Pack of</label>
                        <select
                          value={selectedPack}
                          onChange={(e) => setSelectedPack(e.target.value)}
                        >
                          <option value="">1</option>
                          {packOptions.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="product__cart--pricebtn">
                    <div className="product__cart--price">
                      <p>price</p>
                      <p>
                        <span>{`₹${product.price}`}</span>
                      </p>
                    </div>
                    {/* <div> */}

                    {/* <button className="btn product__cart--btn"
                      onClick={addToCartHandler}
                    >
                      <span>add to cart</span>
                    </button> */}

                    <button className="btn product__cart--btn"
                      onClick={handleProductInfo}
                    >
                      <span>Register</span>
                    </button>
                    {/* <a href="" className="btn product__cart--btn">
                      + <span>add to cart</span> -
                    </a> */}
                    {/* </div> */}
                  </div>
                </div>
                <div className="border__bottom" />
                <div className="border__top--description" />
                <div className="product__cart--description2">
                  <h1>description</h1>
                  <p>
                    {product.description}
                  </p>
                </div>
              </div>
              <div className="product__cart--related">
                <h1>related products</h1>
                <div className="product__cart--related__image">
                  <div>
                    <div className="navigation_buttons">
                      <div className="product__cart--nav-btn product__cart--related--prebtn">
                        <i className="fa-solid fa-chevron-left" />
                      </div>
                    </div>
                    <div className="image-container">
                      <img src="../images/image1.jpg" />
                      <div className="overlay">
                        <p>product name</p>
                        <p>cost</p>
                      </div>
                    </div>
                    <div className="image-container">
                      <img src="../images/image1.jpg" />
                      <div className="overlay">
                        <p>product name</p>
                        <p>cost</p>
                      </div>
                    </div>
                    <div className="image-container">
                      <img src="../images/image1.jpg" />
                      <div className="overlay">
                        <p>product name</p>
                        <p>cost</p>
                      </div>
                    </div>
                    <div className="image-container">
                      <img src="../images/image1.jpg" />
                      <div className="overlay">
                        <p>product name</p>
                        <p>cost</p>
                      </div>
                    </div>
                    <div className="navigation_buttons">
                      <div className="product__cart--nav-btn product__cart--related--nextbtn">
                        <i className="fa-solid fa-chevron-right" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product__cart--reviews">
                <div className="navigation_buttons">
                  <div className="product__cart--nav-btn product__cart--review--prebtn">
                    <i className="fa-solid fa-chevron-left" />
                  </div>
                </div>
                <div>
                  <h1>review</h1>
                  <div className="product__cart--review">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum
                    vel possimus neque, fugit officia animi recusandae culpa tempora,
                    deleniti sunt doloribus facilis labore? Aliquam consequatur ullam
                    autem animi culpa, expedita ipsam porro error excepturi quod
                    perferendis explicabo sunt fuga perspiciatis labore beatae nihil
                    mollitia sapiente aut possimus. Fugiat, iste..
                  </div>
                </div>
                <div className="navigation_buttons">
                  <div className="product__cart--nav-btn product__cart--review--nextbtn">
                    <i className="fa-solid fa-chevron-right" />
                  </div>
                </div>
              </div>
            </section>
            {/* <button onClick={decreaseQuantity}>-</button>
            <input readOnly type="number" value={quantity} />
            <button onClick={increaseQuantity}>+</button> */}
          </main>




          {/* <div className="ProductDetails">
            <div>
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <Rating {...options} />
                <span className="detailsBlock-2-span">
                  {" "}
                  ({product.numOfReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button
                    disabled={product.Stock < 1 ? true : false}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>

              <button onClick={submitReviewToggle} className="submitReview">
                Submit Review
              </button>
            </div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>

          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>

          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )} */}
        </Fragment>
      )
      }
    </Fragment >
  );
};

export default ProductDetails;
