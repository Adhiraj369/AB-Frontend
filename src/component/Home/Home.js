import React, { Fragment, useEffect, useState } from "react";

import "./Home.css";

import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { newEmail } from "../../actions/emailAction";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  const [showPopup, setShowPopup] = useState(false);


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  const [emails, setEmail] = useState({
    email: ""
  });

  const { email } = emails;

  const emailSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("email", email);
    console.log("Email Submitted");
    dispatch(newEmail(myForm));

  };

  const addEmail = (e) => {

    setEmail({ ...email, [e.target.name]: e.target.value });
  };


  useEffect(() => {
    const timeLimit = 5;
    let i = 0;

    const timer = setInterval(() => {
      i++;
      if (i === timeLimit) {
        clearInterval(timer);
        setShowPopup(true);
      }
      console.log(i);
    }, 1000);

    const handleClickOutside = (event) => {
      const popup = document.getElementById('popup');
      if (!event.target.closest('.popup__box') && popup.classList.contains('show')) {
        setShowPopup(false);
        console.log('remove');
      }
    };

    // const handleClickOutside = (event) => {
    //   const popup = document.getElementById('popup');
    //   if (!event.target.matches('.popup__box') && popup.classList.contains('show')) {
    //     setShowPopup(false);
    //     console.log('remove');
    //   }
    // };

    window.addEventListener('click', handleClickOutside);

    return () => {
      clearInterval(timer);
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: './images/image1.jpg',
      text: 'panton stickers',
      text2: 'stickers',
      link: ''
    },
    {
      src: './images/image2.jpg',
      text: 'panton stickers',
      text2: 'Lorem ipsum dolor sit amet consectetur.',
      link: './product/product.html',
    },
    {
      src: './images/image3.jpg',
      text: 'panton stickers',
      text2: 'dolor sit amet consectetur adipisicing elit.',
      link: './product/product.html',
    },
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };


  const [showPrickliness, setShowPrickliness] = useState(true);
  const [showUpcoming, setShowUpcoming] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showShopCategories, setShowShopCategories] = useState(false);

  // Define event handlers
  const handlePricklinessClick = () => {
    setShowPrickliness(true);
    setShowUpcoming(false);
    setShowReviews(false);
  };

  const handleUpcomingClick = () => {
    setShowPrickliness(false);
    setShowUpcoming(true);
    setShowReviews(false);
  };

  const handleReviewsClick = () => {
    setShowPrickliness(false);
    setShowUpcoming(false);
    setShowReviews(true);
  };

  const handleShopMouseOver = () => {
    clearTimeout(timeoutId);
    setShowShopCategories(true);
  };

  const handleShopMouseOut = () => {
    timeoutId = setTimeout(() => {
      setShowShopCategories(false);
    }, 2000);
  };

  // const handleDocumentClick = (event) => {
  //   if (event.target !== shopBtnRef.current && event.target !== shopCategoriesRef.current) {
  //     setShowShopCategories(false);
  //   }
  // };

  let timeoutId;



  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (<>

        <div className={showPopup ? 'popup show' : 'popup'} id="popup">
          <div className="main__popup">
            <div className="popup__box">
              <div className="popup__box--h1">
                <h1>Love rant sessions?</h1>
                <h1>us too...</h1>
              </div>
              <div className="popup__box--h3">
                <h3>
                  <span>so why not do it together?</span>
                </h3>
              </div>
              <div className="popup__box--p">
                <p>
                  subscribe to our news letter for weekly rant sessions, exclusive shop
                  updates and (sshh don't tell anyone) discount codes
                </p>
              </div>

              <form onSubmit={emailSubmit} >
                <div className=" btn popup__box--button margin">
                  <input
                    className="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={addEmail}
                  />

                </div>
                <input type="submit" value="Subscribe" className="signUpBtn btn popup__box--button" />
              </form>
            </div>
          </div>
        </div>

        <section className="description__main">
          <div>
            <div className="description__img">
              <img src="/home.png" alt="home" />
            </div>
            <div className="description__intro">
              <div className="shop__categories">
                <div className="shop__categories--left">
                  <h3>shop by category</h3>
                  <ul className="shop__by__category">
                    <li>
                      <a href="./categories/categories.html">scented candles</a>
                    </li>
                    <li>
                      <a href="./categories/categories.html">stickers</a>
                    </li>
                    <li>
                      <a href="./categories/categories.html">notebooks</a>
                    </li>
                    <li>
                      <a href="./categories/categories.html">notepads</a>
                    </li>
                    <li>
                      <a href="./categories/categories.html">art prints</a>
                    </li>
                    <li>
                      <a href="./categories/categories.html">upcoming</a>
                    </li>
                  </ul>
                </div>
                <div className="shop__categories--right">
                  <h3>shop all</h3>
                  <h3>custom gifts</h3>
                  <ul className="custom__gifts">
                    <li>
                      <a>build your own basket</a>
                    </li>
                    <li>
                      <a>contact us</a>
                    </li>
                    <li>
                      <a>bulk orders</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="description">
                <h1>welcome pricks!</h1>
                <p className="description__para">
                  you're now visiting a one-stop shop to satisfy our need for some
                  maximalist (or minimalist) dopamine decir art and stationary
                  cravings, the product of years and years of being completely
                  random- we present to you a wholesome collection of <br />
                  <span className="description_collection">
                    • stickers • memo pads • notebooks • notepads • zins • scented
                    candles
                  </span>
                </p>
                <a
                  href="/products"
                  className="btn description__btn"
                >
                  shop now
                </a>
              </div>
            </div>
          </div>
          {/* <svg height='' width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f2ff33" fill-opacity="1"
              d="M0,128L80,117.3C160,107,320,85,480,80C640,75,800,85,960,74.7C1120,64,1280,32,1360,16L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
          </path>
      </svg> */}
          <div className="marque">
            {/* <div class="marquee"> */}
            <marquee className="bestseller">BESTSELLERS BESTSELLERS BESTSELLERS BESTSELLERS BESTSELLERS BESTSELLERS</marquee>
            {/* </div> */}
          </div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f2ff33" fill-opacity="1"
              d="M0,128L80,117.3C160,107,320,85,480,80C640,75,800,85,960,74.7C1120,64,1280,32,1360,16L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
          </path>
      </svg> */}
        </section>

        {/* <section className="product"> */}
        {/* <div className="product__image">
            <div className="navigation_buttons">
              <div className="previous nav-btn">
                <i className="fa-solid fa-chevron-left" />
              </div>
              <div className="next nav-btn">
                <i className="fa-solid fa-chevron-right" />
              </div>
            </div>
            <div className="product__image__slider">
              <div className="image main">
                <img src="../pimages/image1.jpg" className="img" />
              </div>
              <div className="image">
                <img src="../pimages/image2.jpg" className="img" />
              </div>
              <div className="image">
                <img src="../pimages/image3.jpg" className="img" />
              </div>
            </div>
          </div> */}
        {/* <div className="product__description">
            <div className="product__class main flex-align">
              <h1 className="product__name"> pantone stickers</h1>
              <div className="product__info circle">
                <div className="circle text">
                  hand-made
                  <br />
                  waterproof
                  <br />
                  vinyl stickers
                </div>
              </div>
              <a href="./product/product.html" className="btn product__btn">
                shop now
              </a>
            </div>
            <div className="product__class flex-align">
              <h1 className="product__name">Lorem ipsum</h1>
              <div className="product__info circle">
                <div className="circle">
                  Lorem ipsum
                  <br /> dolor sit
                  <br /> amet consectetur.
                </div>
              </div>
              <a href="./product/product.html" className="btn product__btn">
                shop now
              </a>
            </div>
            <div className="product__class flex-align">
              <h1 className="product__name">dolor sit</h1>
              <div className="product__info circle">
                <div className="circle">
                  dolor sit
                  <br /> amet consectetur
                  <br /> adipisicing elit.
                </div>
              </div>
              <a href="/products" className="btn product__btn">
                shop now
              </a>
            </div>
            {/* <a href="./product/product.html" class="btn product__btn">shop now</a> */}
        {/* </div> */}
        {/* <div className="product__image">
            <div className="navigation_buttons">
              <div className="previous nav-btn">
                <i className="fa-solid fa-chevron-left" />
              </div>
              <div className="next nav-btn">
                <i className="fa-solid fa-chevron-right" />
              </div>
            </div>
            <div className="product__image__slider">
              <div className="image main">
                <img src="../pimages/image1.jpg" className="img" />
              </div>
              <div className="image">
                <img src="../pimages/image2.jpg" className="img" />
              </div>
              <div className="image">
                <img src="../pimages/image3.jpg" className="img" />
              </div>
            </div>
          </div> */}
        {/* </section> */}

        <section className="product">
          <div className="product__image">
            <div className="navigation_buttons">
              <div className="previous nav-btn" onClick={previousImage}>
                <i className="fa-solid fa-chevron-left"></i>
              </div>
              <div className="next nav-btn" onClick={nextImage}>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
            <div className="product__image__slider">
              {images.map((image, index) => (
                <div key={index} className={`image ${index === currentIndex ? 'main' : ''}`}>
                  <img src={image.src} className="img" alt={`${index}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="product__description">
            {images.map((image, index) => (
              <div key={index} className={`product__class ${index === currentIndex ? 'main' : ''}`}>
                <h1 className="product__name">{image.text}</h1>
                <div className="product__info circle">
                  <div className="circle">{image.text2}</div>
                </div>
                <a href={"/products"} className="btn product__btn">shop now</a>
              </div>
            ))}
          </div>


        </section>



        <section className="new__launches">
          <h1>new launches</h1>
          <div className="new__launches__images">
            {/* <div className="new_nav new_nav__pre">
              <i className="fa-solid fa-chevron-left" />
            </div> */}
            <div className="new__images__wrap">
              <div className="new__images">
                <div className="image__item">
                  <img src="../pimages/image1.jpg" className="new__image" alt="New" />
                  <p className="new__image__text">safe space notepad</p>
                  <p className="new__image__price">₹ 250</p>
                </div>
                <div className="image__item">
                  <img src="../pimages/image2.jpg" className="new__image " alt="New" />
                  <p className="new__image__text">holographic sticker pack</p>
                  <p className="new__image__price">₹ 250</p>
                </div>
                <div className="image__item">
                  <img src="../pimages/image3.jpg" className="new__image" alt="New" />
                  <p className="new__image__text">nothing notebook</p>
                  <p className="new__image__price">₹ 250</p>
                </div>
                {/* <div class="image__item">
                      <img src="./images/image4.jpg" class="new__image" />
                      <p class="new__image__text">nothing notebook</p>
                      <p class="new__image__price">Rs. 250</p>
                  </div> */}
              </div>
            </div>
            {/* <div className="new_nav new_nav__next">
              <i className="fa-solid fa-chevron-right" />
            </div> */}
          </div>
          <a href={"/products"} className="btn new__launches__btn">
            shop now
          </a>
        </section>

        <section className="categories">
          <h1>categories</h1>
          <div className="categories__classes custom__border">
            <a href={"/products"} className="categories__class curve__right">scented <br />candles</a>
            <a href={"/products"} className="categories__class curve__right">stickers</a>
            <a href={"/products"} className="categories__class curve__right">notebooks <br />and<br /> journals</a>
            <a href={"/products"} className="categories__class curve__left">notepads</a>
            <a href={"/products"} className="categories__class curve__left">art <br />prints</a>
          </div>
          <div className="categories__products">
            <nav className="categories__buttons">
              <ul>
                <li className="categories__li--1"><button className="categories__btn" id="prickliness" onClick={handlePricklinessClick}>need some custom
                  prickliness?</button></li>
                <li className="categories__li--2"> <button className="categories__btn" id="upcoming" onClick={handleUpcomingClick}>upcoming</button>
                </li>
                <li className="categories__li--3"> <button className="categories__btn" id="reviews" onClick={handleReviewsClick}>reviews</button>
                </li>
                <li className="categories__li--4"><button className="categories__btn" id="prick">become a prick</button>
                </li>
              </ul>
            </nav>
            <div className="categories__section">
              <div className="categories__upcoming">
                <div className="categories__images">
                  <img src="../pimages/image1.jpg" className="categories__img" alt="Categories" />
                  <p className="categories__img__text">2024 dated journal</p>
                </div>
                <div className="categories__images">
                  <img src="../pimages/image2.jpg" className="categories__img" alt="Categories" />
                  <p className="categories__img__text">tote bags</p>
                </div>
                <div className="categories__images">
                  <img src="../pimages/image3.jpg" className="categories__img" alt="Categories" />
                  <p className="categories__img__text">room sprays</p>
                </div>
              </div>
              <div className="categories__prickliness">
                <div className="categories__prickliness--left">
                  <img src="../pimages/prickliness.png" className="categories__prickliness--img" alt="Categories" />
                </div>
                <div className="categories__prickliness--right">
                  <p>need some content/ copy writing done for your business or projects? or maybe a custom
                    gift that hits all the right spots? hit us up, and we'll get it done</p>
                  <p>with 3+ years of experience in advertising and digital marketing, i have had the
                    opportunity to build and execute campaigns for a number of brands. I also offer graphic
                    design and branding services. all out products are handmade and hence can be fully
                    customised to your need.</p>
                  <a href={"/about"} className="btn categories__prickliness--btn">contact us</a>
                </div>
              </div>
              <div className="categories__review">
                <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae fugit quaerat consectetur
                  odit
                  similique laboriosam soluta, accusantium impedit fugiat possimus voluptate aperiam inventore
                  a cumque obcaecati corrupti quam corporis libero, totam est tenetur magni ea doloremque
                  accusamus. Id tempora iusto magni ipsum officia nemo autem, rem, harum officiis consequuntur
                  aperiam."
                </p>
                <p className="categories__review--person">-random</p>
              </div>
            </div>
          </div>
        </section>


      </>

        // <Fragment>
        //   <MetaData title="ECOMMERCE" />

        //   <div className="banner">
        //     <p>Welcome to Ecommerce</p>
        //     <h1>FIND AMAZING PRODUCTS BELOW</h1>

        //     <a href="#container">
        //       <button>
        //         {/* Scroll <CgMouse /> */}
        //       </button>
        //     </a>
        //   </div>

        //   <h2 className="homeHeading">Featured Products</h2>

        //   <div className="container" id="container">
        //     {products &&
        //       products.map((product) => (
        //         <ProductCard key={product._id} product={product} />
        //       ))}
        //   </div>
        // </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
