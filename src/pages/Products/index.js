import React, { useEffect, useState } from "react";
import Spinner from "../../shared/Spinner";

const ProductList = () => {
  const [productList, setProductList] = useState();

  useEffect(() => {
    const productsList = fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((json) => {
        console.log("json: ", json);
        setProductList(json);
      });
  }, []);

  const renderProductCard = (item, index) => {
    return (
      <div className="col-md-6 col-xl-4 grid-margin stretch-card" key={index}>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{item?.title || ""}</h4>
            <div className="item">
              <img
                src={
                  item?.image ||
                  require("../../assets/images/dashboard/Rectangle.jpg")
                }
                className="w-100 h-100"
                alt="carousel-item"
              />
            </div>
            <div className="d-flex py-4">
              <div className="preview-list w-100">
                <div className="preview-item p-0">
                  <div className="preview-item-content d-flex flex-grow">
                    <div className="flex-grow">
                      <p className="text-muted">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Spinner />
      <div className="row">
        {productList &&
          productList.length > 0 &&
          productList.map((product, index) =>
            renderProductCard(product, index)
          )}
      </div>
    </div>
  );
};

export default ProductList;
