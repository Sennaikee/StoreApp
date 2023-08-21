import { useLocation } from "react-router-dom";
const Cart = () => {
  const location = useLocation();
  const singleproduct = location.state;
  const { userInfo, cartcolor } = singleproduct;
  return (
    <>
      {console.log(cartcolor)}
      <section>
        <div>
          <img src={userInfo.image} alt="" />
          <div>
            <h2>{userInfo.name}</h2>
            <h2>
              Color:
              <span
                className="color-span"
                style={{ backgroundColor: cartcolor }}
              ></span>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
