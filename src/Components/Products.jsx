import React from "react";
import { Link } from "react-router-dom";
import NumberToCurrency from "./NumberConversion";

const Products = (props) => {
  const { userInfo, allData } = props;
  
  // console.log(allData)
  
  return (
    <>
      <div className="useless">
        <div className="image-container">
          <img className="image" src={userInfo.image} alt="" />
          <div className="overlay">
            <div className="button-container">
              <span className="button">
                {" "}
                <Link to="/singleproduct" state={{userInfo: userInfo, allData: allData}} >
                  <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                </Link>
              </span>
            </div>
          </div>
        </div>

        <div className="product-text">
          <h1>{userInfo.name}</h1>
          <p>
            <NumberToCurrency value={userInfo.price} />
          </p>
        </div>
      </div>
    </>
  );
};

export default Products;
