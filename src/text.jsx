{
    
  content
    .filter((con) => con.company === "liddy")
    .map((filtered) => {
      return (
        <Products key={filtered.id} userInfo={filtered} allData={content} />
      );
    });
}

{
  /* <div>
            <div className="products">
              {filterProducts(content, productFilters)
                .slice(startIndex, endIndex)
                .map((item) => (
                  <Products
                    className="ll"
                    key={item.id}
                    userInfo={item}
                    allData={content}
                  />
                ))}
            </div>
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? "active" : ""}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div> */
}