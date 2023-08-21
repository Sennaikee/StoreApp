import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ProductPage from "./Pages/ProductsPage";
import SingleProduct from "./Components/SingleProduct";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Cart from "./Pages/Cart";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Foot from "./Components/Foot";
import Navbar from "./Components/NavBar";

const url = "https://course-api.com/react-store-products";
function App() {
  
  const [content, setContent] = useState([]);

  const getContents = async () => {
    const response = await fetch(url);
    const content = await response.json();
    setContent(content);
       // console.log(content.length);
  };
  useEffect(() => {
    getContents();
  }, []);

  return (
    <div className="App">
      <Navbar content = {content} />
      <Routes>
        <Route exact path="/" element={<Home content={content} />} />
        <Route path="/about" element={<About />} />
        <Route path="/propa" element={<ProductPage content={content} />} />
        <Route path="/singleproduct" element={<SingleProduct />} />
        <Route path="/login" element={<LogIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route />
      </Routes>
      <Foot></Foot>
    </div>
  );
}

export default App;
