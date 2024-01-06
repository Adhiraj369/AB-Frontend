import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// import React from 'react';
import showstopperImgSrc from '../../assets/EventPageAsst/showstopper.png'
import starpodImgSrc from '../../assets/EventPageAsst/starpod.png'
import beatsmithshowdownImgSrc from '../../assets/EventPageAsst/beatboxshowdown.png'
import munImg from '../../assets/EventPageAsst/munmainbg.png';
import rhymeriotImg from '../../assets/EventPageAsst/rhymeriotbg.png';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import defaultImg from '../../assets/EventPageAsst/A.png';
// import { useNavigate } from 'react-router-dom';

const eventImages = {
  showstopper: showstopperImgSrc,
  starpod: starpodImgSrc,
  beatsmithShowdown: beatsmithshowdownImgSrc,
  mun: munImg,
  rhymeriot: rhymeriotImg
};


const ProductCard = ({ product }) => {
  // const options = {
  //   value: product.ratings,
  //   readOnly: true,
  //   precision: 0.5,
  // };

  // const nav = useNavigate();
  const imgSrc = eventImages[product.images] || defaultImg;

  const contentStyle = {
    backgroundImage: `url(${imgSrc})`,
    width: '100%',
    backgroundPosition: 'center',
  };



  return (
    <>
      <Link className='EventSlide' to={`/product/${product._id}`}>
        {product.images && product.images[0] && product.images[0].url ? (
          <div className='EventSlide__Img'>
            <img className='EventImage' src={product.images[0].url} />
          </div>) : (<div>No Image Availabe</div>)
        }
        <div className='EventSlide__Content' style={contentStyle}>
          <div className="blur">

            <div className='EventSlide__text'>
              <div className={`EventSlide__name ${product.name?.length > 15 ? "longcardename" : "shortcardename"}`}>{product.name}</div>
              <div className='EventSlide__desc'>Description</div>
              <div className='EventSlide__learnmore'>Learn More  </div>
              {/* <ArrowForwardIcon className='EventSlide__learnmore-Arrow' fontSize='small' /> */}
            </div>
            <div className='EventSlide__btn'>
              <button className='EventRegBtn'>
                Register
              </button>
            </div>
          </div>
        </div>








        {/* {product.images && product.images[0] && product.images[0].url ? (
        <div className="category__product--image">< img src={product.images[0].url} alt={product.name} />
        </div>) : (<div>No Image Availabe</div>)
      }
      <div className="category__product--description">
        <p>{product.name}</p>
        <div>
          <span className="productCardSpan">
            {" "}
            ({product.numOfReviews} Reviews)
          </span>
        </div>
        <span>{`₹${product.price}`}</span>

      </div> */}
      </Link >
    </>
  );
};

export default ProductCard;
