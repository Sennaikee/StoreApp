// import React, { useEffect } from "react";
// import { useState } from "react";
// import Products from "../Components/Products";
// import { Slider } from "@mui/material";
// const ProductPage = ({ content }) => {
//   const x = [...new Set(content.map((item) => item.category))];
//   const companyName = [...new Set(content.map((item) => item.company))];
//   const color = ["#ff0000", "#00ff00", "#0000ff", "#000", "#ffb900"];
//   const [value, setValue] = useState(30);
//   const [object, setObject] = useState("kids");
//   const [entry, setEntry] = useState("");
//   const [currData, setCurrData] = useState(content)

//   const handleSliderChange = (event, newValue) => {

//     setValue(newValue);
//     setProductFilters({ ...productFilters, price: newValue });
//   };
//   // console.log(content)

//   // const handleInputChange = (event) => {
//   //   setValue(event.target.value === "" ? "" : Number(event.target.value));
//   // };

//   const [productFilters, setProductFilters] = useState({
//     category: "all",
//     company: "",
//     colors:"",
//     price:"",
//   });

//   const handleCategory = (cat) => {
//      const result = content.filter(function (contents) {
//        return contents.category === cat;
//      });
//      setCurrData(result)
//   }

//     const handleCompany = (comp) => {
//      const result = currData.filter(function (contents) {
//        return contents.company === comp;
//      });
//      setCurrData(result)
//      console.log(result)
//   }

//   const filterProducts = (product, filters) => {
//     let filteredProducts = product ?? [];

//     if (filters?.category === "all") {
//       filteredProducts = product;
//     } else {
//       filteredProducts = product.filter(
//         (item) =>
//           item?.category.toLocaleLowerCase() ===
//           filters?.category.toLocaleLowerCase()
//       );
//     }

//     if (filters.company && filters.company !== "all") {
//       filteredProducts = filteredProducts.filter(
//         (item) => item.company === filters.company
//       );

//     }
//     if (filters.colors && filters.colors !== "all") {

//       filteredProducts = filteredProducts.filter(
//         (item) =>
//           item.colors[0] === filters.colors ||
//           item.colors[1] === filters.colors ||
//           item.colors[2] === filters.colors
//       );
//       console.log(filteredProducts)
//     }
//      if (filters.price) {
//        filteredProducts = filteredProducts.filter(
//          (item) => item.price <= parseInt(filters.price * 100)
//        );
//      }

//     return filteredProducts;
//   };

//   return (
//     <>
//       <div className="second-navigation" style={{ marginTop: "20px" }}>
//         <h2>Home/Products</h2>
//       </div>
//       <section className="products-page">
//         <section className="products-left">
//           <input type="text" placeholder="Search" />
//           <h1>Category</h1>
//           <h2 onClick={()=> setCurrData(content)}
//           >All</h2>
//           {x.map((item) => {
//             return (
//             <>
//                 <p onClick={() => handleCategory(item)}>{item}</p>
//               </>
//             );
//           })}
//           <h1>Company</h1>
//           <select
//             onChange={(e) =>
//               handleCompany(e.target.value)
//             }

//           >
//             <option value="all">all</option>
//             {companyName.map((item) => {
//               return <option value={`${item}`}>{item}</option>;
//             })}
//           </select>
//           <h1>Colors</h1>
//           <h2
//             onClick={() =>
//               setProductFilters({
//                 ...productFilters,
//                 colors: "all",
//               })
//             }
//           >
//             All
//           </h2>
//           {color.map((item) => {
//             return (
//               <span
//                 onClick={() => {
//                   setObject(item);
//                   setProductFilters({ ...productFilters, colors: item });
//                   // console.log(item)
//                 }}
//                 className="color-span"
//                 style={{ backgroundColor: item }}
//               ></span>
//             );
//           })}
//           <h1>Price</h1>
//           <h3 style={{ fontSize: "16px", fontWeight: "300" }}>{`$${value}`}</h3>
//           <Slider
//             onChange={handleSliderChange}
//             aria-labelledby="input-slider"
//             step={18.29}
//             min={0.0}
//             max={3099.99}
//           />
//           {/* <input value={`$${value}`} sidze="small" /> */}
//           {/* <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" step={18.29} min={0.00 }max={3099.99}/> */}
//           {/* {content.forEach((obj) => {
//               for (const key in obj) {
//                 const value = obj[key];
//                 // console.log(`Key: ${key}, Value: ${value}`);
//               }
//             })} */}
//           {/* {content.map(filtered => {console.log(filtered.category)})} */}
//         </section>
//         <section>
//           <div className="products">
//             {console.log(currData)}
//             {currData.map((filtered) => {
//               return (
//                 <Products
//                   key={filtered.id}
//                   userInfo={filtered}
//                   allData={content}
//                 />
//               );
//             })}
//             {/* {products?.map((filtered) => {
//               return (
//                 <Products
//                   key={filtered.id}
//                   userInfo={filtered}
//                   allData={content}
//                 />
//               );
//             })} */}
//             {/* {content.map((contents) => {
//                 return (
//                   <Products
//                     className="ll"
//                     key={contents.id}
//                     userInfo={contents}
//                     allData={content}
//                   />
//                 );
//               })} */}
//           </div>
//         </section>
//       </section>
//     </>
//   );
// };

// export default ProductPage;
