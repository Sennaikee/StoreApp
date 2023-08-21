import { useState} from "react";
import { useLocation } from "react-router-dom";
import NumberToCurrency from "./NumberConversion";
import { Link } from "react-router-dom";
const SingleProduct = () => {
  const [increase, setIncrease] = useState(1)
  const [cartcolor, setCartColor] = useState("")
  const location = useLocation()
  const singleproduct = location.state
  const {userInfo, allData} = singleproduct
  // const that = location.secondstate
  
  // console.log('sts', singleproduct)
  
    return (
      <>
        <div>{singleproduct.name}</div>
        <div className="second-navigation">
          <h2>Home/Products/dummy text</h2>
        </div>
        <section className="sp">
          <div style={{ textAlign: "left" }}>
            <button className="but" style={{padding: "10px 20px", letterSpacing:"4px"}}>back to products</button>
          </div>
          <section className="sp-main">
            <div className="sp-left">
              <img className="sp-left-img" src={userInfo.image} alt="" />
              <div className="sp-left-bottom">
                <img src={userInfo.image} alt="" />
                {allData.slice(3, 7).map((data) => {
                  return <img src={data.image} alt="" />;
                })}
              </div>
            </div>

            <div className="sp-right">
              <h1>{userInfo.name}</h1>
              <p>
                <NumberToCurrency value={userInfo.price} />
              </p>
              <p>{userInfo.description}</p>
              <p>Availabe: In stock</p>
              <p>SKU: {userInfo.id}</p>
              <p>Brand: {userInfo.company}</p>
              <div className="line"></div>
              <p>
                Colors:{" "}
                {userInfo.colors.map((x) => {
                  return (
                    <span onClick={() => setCartColor(x)}
                      className="color-span"
                      style={{ backgroundColor: x }}
                    ></span>
                  );
                })}
              </p>
              <div className="increase">
                <button
                  disabled={increase <= 1}
                  onClick={() => {
                    setIncrease(increase - 1);
                  }}
                >
                  <i class="fa-solid fa-minus"></i>
                </button>
                <h2 style={{ fontSize: "40px" }}>{increase}</h2>
                <button
                  disabled={increase === 3}
                  onClick={() => {
                    setIncrease(increase + 1);
                  }}
                >
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
              <button className="but" style={{padding: "10px 20px", letterSpacing:"4px"}} 
              onClick={() => console.log(userInfo.name)}>
                <Link to="/cart" state={{userInfo: userInfo, allData: allData, cartcolor: cartcolor}}>ADD TO CART</Link></button>
            </div>
          </section>
        </section>
      </>
    );
    
};

export default SingleProduct;
