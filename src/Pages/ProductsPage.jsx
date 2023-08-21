import React from "react";
import { useState } from "react";
import Products from "../Components/Products";
import { Slider } from "@mui/material";
const ProductPage = ({ content }) => {
  const x = [...new Set(content.map((item) => item.category))];
  const companyName = [...new Set(content.map((item) => item.company))];
  const color = ["#ff0000", "#00ff00", "#0000ff", "#000", "#ffb900"];
  const [value, setValue] = useState(30);
  const [object, setObject] = useState("kids");
  const [sortingOption, setSortingOption] = useState("price-lowest");

  const [productFilters, setProductFilters] = useState({
    category: "all",
    company: "",
    colors: "",
    price: "",
  });

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    setProductFilters({ ...productFilters, price: newValue });
  };

  const filterProducts = (product, filters) => {
    let filteredProducts = product ?? [];
    if (filters?.category === "all") {
      filteredProducts = product;
    } else {
      filteredProducts = product.filter(
        (item) =>
          item?.category.toLocaleLowerCase() ===
          filters?.category.toLocaleLowerCase()
      );
    }

    if (filters.company && filters.company !== "all") {
      filteredProducts = filteredProducts.filter(
        (item) => item.company === filters.company
      );
    }
    if (filters.colors && filters.colors !== "all") {
      filteredProducts = filteredProducts.filter(
        (item) =>
          item.colors[0] === filters.colors ||
          item.colors[1] === filters.colors ||
          item.colors[2] === filters.colors
      );
    }
    if (filters.price) {
      filteredProducts = filteredProducts.filter(
        (item) => item.price <= parseInt(filters.price * 100)
      );
    }

    return filteredProducts;
  };


  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
  };

  const sortedProducts = () => {
    const filteredProducts = filterProducts(content, productFilters);
    switch (sortingOption) {
      case 'price-lowest':
        return filteredProducts.sort((a, b) => a.price - b.price);
      case 'price-highest':
        return filteredProducts.sort((a, b) => b.price - a.price);
      case 'name-a':
        return filteredProducts.sort();
      case 'name-z':
        return filteredProducts.reverse();
      default:
        return filteredProducts;
    }
  }


  // const itemsPerPage = 6;
  // const [currentPage, setCurrentPage] = useState(1); 

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const itemsToShow = content.slice(startIndex, endIndex);
  // const totalPages = Math.ceil(content.length / itemsPerPage);

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

  return (
    <>
      <div className="second-navigation" style={{ marginTop: "20px" }}>
        <h2>Home/Products</h2>
      </div>
      <section className="products-page">
        <section className="products-left">
          <input type="text" placeholder="Search" />

          <h1>Category</h1>
          <h2
            onClick={() =>
              setProductFilters({ ...productFilters, category: "all" })
            }
          >
            All
          </h2>
          {x.map((item) => {
            return (
              <>
                <h2
                  key={item.id}
                  onClick={() => {
                    setProductFilters({ ...productFilters, category: item });
                    console.log(object.length);
                  }}
                >
                  {" "}
                  {item}{" "}
                </h2>
              </>
            );
          })}

          <h1>Company</h1>
          <select
            onChange={(e) =>
              setProductFilters({ ...productFilters, company: e.target.value })
            }
          >
            <option value="all">all</option>
            {companyName.map((item) => {
              return <option value={`${item}`}>{item}</option>;
            })}
          </select>

          <h1>Colors</h1>
          <div style={{ display: "flex", height: "25px" }}>
            <h2
              onClick={() =>
                setProductFilters({ ...productFilters, colors: "all" })
              }
              style={{ marginTop: "4px", marginRight: "5px" }}
            >
              All
            </h2>
            {color.map((item) => {
              return (
                <span
                  className="color-span"
                  style={{ backgroundColor: item }}
                  onClick={() => {
                    setObject(item);
                    setProductFilters({ ...productFilters, colors: item });
                    // console.log(item)
                  }}
                ></span>
              );
            })}
          </div>

          <h1>Price</h1>
          <h3 style={{ fontSize: "16px", fontWeight: "300" }}>{`$${value}`}</h3>
          <Slider
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            step={18.29}
            min={0.0}
            max={3099.99}
          />
        </section>

        <section className="products-right">
          <section className="right-top">
            <div className="right-icons">
              <i
                className="fa-solid fa-table-cells-large"
                style={{ border: "1px solid black", padding: "5px", borderRadius:"5px", color:"white", backgroundColor:"black"}}
                // onClick={()=>{document.getElementById('test').style.backgroundColor = 'red'}}
              ></i>
              <i
                className="fa-solid fa-bars"
                style={{ border: "1px solid black", padding: "5px", borderRadius:"5px", color:"black"}}
                // onClick={()=>{document.getElementById('test').style.display="flex"}}
              ></i>
            </div>
            <p>
              {filterProducts(content, productFilters).length} Products found
            </p>
            <p className="border"></p>
            <form action="" style={{}}>
              <label htmlFor="sort"> Sort By </label>
              <select name="sort" id="sort" className="sort-input" value={sortingOption} onChange={handleSortingChange}>
                <option value="price-lowest">price (lowest)</option>
                <option value="price-highest">price (highest)</option>
                <option value="name-a">name (a - z)</option>
                <option value="name-z">name (z - a)</option>
              </select>
            </form>
          </section>
          <div className="products" id="test">
            {sortedProducts().map((filtered) => {
              return (
                <>
                  <Products
                    key={filtered.id}
                    userInfo={filtered}
                    allData={content}
                  />
                </>
              );
            })}
          </div>

          
        </section>
      </section>
    </>
  );
};

export default ProductPage;


