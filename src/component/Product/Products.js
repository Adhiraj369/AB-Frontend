import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";

import { useRef } from 'react';
// import eventsArray from "../assets/EventDetails.json";
// import '../css/AllEvents.css';
// import EventSlide from './EventSlide';
// import LogoComponent from './LogoComponent';
// import StickyHeader from './StickyHeader';
// import Footer from './Footer';

const categories = [
  "secented candles",
  "stickers",
  "notebooks",
  "notepads",
  "art prints",
  "upcoming",

];

// const MenuItems = [
//   {
//     name: "All Events",
//     slug: "one"
//   },
//   {
//     name: "Solo Events",
//     slug: "two"
//   },
//   {
//     name: "Team Events",
//     slug: "three"
//   },
// ];

// const MenuItem = (props) => {
//   const { item, selected = false, onItemSelect } = props;

//   return (
//     <div
//       className={`EventTypeBtns-item ${selected ? "EventTypeBtns-item--selected" : ""}`}
//       data-slug={item.slug}
//       onClick={() => {
//         onItemSelect(item);
//       }}
//     >
//       {item.name}
//     </div>
//   );
// };

// const Menu = (props) => {
//   const { items, onSelectedItem, initialItemSlug = null } = props;
//   const [selectedItem, setSelectedItem] = useState(null);
//   const menuItemsRef = useRef();
//   const selectedItemRef =
//     menuItemsRef.current && selectedItem
//       ? menuItemsRef.current.querySelector(`[data-slug=${selectedItem.slug}]`)
//       : null;

//   const calculateDashPosition = (element, dashWidth) => {
//     return element.offsetLeft + element.offsetWidth / 2 - dashWidth / 2;
//   };

//   const calculateDashWidth = (element) => {
//     return element.offsetWidth;
//   };

//   const dashWidth = selectedItemRef ? calculateDashWidth(selectedItemRef) : 0;

//   const dashPosition = selectedItemRef
//     ? calculateDashPosition(selectedItemRef, dashWidth)
//     : 0;

//   const selectItem = (item) => {
//     setSelectedItem(item);
//     onSelectedItem(item);
//   };

//   useEffect(() => {
//     const initialItem = initialItemSlug
//       ? items.find((item) => item.slug === initialItemSlug)
//       : items[0];
//     setSelectedItem(initialItem);
//   }, []);

//   const renderItems = items.map((item) => (
//     <MenuItem
//       item={item}
//       selected={selectedItem && selectedItem.slug === item.slug}
//       onItemSelect={selectItem}
//     />
//   ));

//   return (
//     <div className="EventTypeBtns">
//       <div className="EventTypeBtns-items" ref={menuItemsRef}>
//         {renderItems}
//         <div
//           className="EventTypeBtns-underline"
//           style={{
//             width: dashWidth,
//             transform: `translate3d(${dashPosition}px, 0 , 0)`
//           }}
//         />
//       </div>
//     </div>
//   );
// };

const Products = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  console.log("Products from Redux state:", products);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category));
  }, [dispatch, keyword, currentPage, price, category, alert, error]);


  //New Consts
  // const [eventType, setEventType] = useState('');

  // const filteredEvents = eventType === "Solo" ? eventsArray.filter(event => event.Team === "Solo") : eventsArray.filter(event => event.Team !== "Solo");
  // const events = eventType ? filteredEvents : eventsArray;

  // const handleClick = (slug) => {
  //   if (slug === "one") setEventType('');
  //   else if (slug === "two") setEventType('Solo');
  //   else if (slug === "three") setEventType('Team');
  // }



  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>

          <div className='AllEvents'>
            <div className='AllEvents__heading'>
              <fieldset className='AllEventsFS'>
                <legend className='AllEventsL'>
                  All Events
                </legend>
              </fieldset>
            </div>
            <div className='EventTypeControl'>
              {/* <Menu
                items={MenuItems}
                onSelectedItem={(item) => {
                  handleClick(item.slug);
                }}
              /> */}
            </div>
            <div className='EventSlides'>

              <div>
                {products &&
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </div>

            </div>
          </div>



          {/* <div className="filterBox">

          </div>


          <main>
            <section className="category__position">
              <div className="category__position--left">
                <label>
                  <input type="checkbox" className="checkbox" />
                  <div className="toggle">
                    <span className="top_line common"></span>
                    <span className="middle_line common"></span>
                    <span className="bottom_line common"></span>
                  </div>

                  <div className="category__slide">
                    <h1>shop by category</h1>
                    <ul className="category__slide--ul">
                      {categories.map((category) => (
                        <li
                          className="category__slide--li"
                          key={category}
                          onClick={() => setCategory(category)}
                        >
                          <button>{category}</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </label>

              </div>
              <div className="category__position--right scented__candles border__left"><div className="products">
                {products &&
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                {resultPerPage < count && (
                  <div className="paginationBox">
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={resultPerPage}
                      totalItemsCount={productsCount}
                      onChange={setCurrentPageNo}
                      nextPageText="Next"
                      prevPageText="Prev"
                      firstPageText="1st"
                      lastPageText="Last"
                      itemClass="page-item"
                      linkClass="page-link"
                      activeClass="pageItemActive"
                      activeLinkClass="pageLinkActive"
                    />
                  </div>
                )}
              </div>
              </div>

            </section>

          </main> */}



        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
