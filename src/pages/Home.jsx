import React, { useState, useEffect } from "react";
import { ProductCard } from "../components";
import axios from "axios";
import { API_URl } from "../config";
import { CircularProgress } from "@mui/material";

function Home() {
  const [productsData, setProductsData] = useState([]);

  const getProductData = async () => {
    try {
      const response = await axios.get(API_URl);
      const data = response.data;
      setProductsData(data);
    } catch (err) {
      console.err(err);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

//   console.log(productsData);

  return (
    <div className="container w-full mx-auto flex flex-wrap py-2 px-2  justify-center gap-4">
      {!productsData ? (
        <CircularProgress />
      ) : (
        productsData.map((product) => (
          <ProductCard
            key={product.id}
            name={product.title}
            image={product.image}
            price={product.price}
            id={product.id}
          />
        ))
      )}
    </div>
  );
}

export default Home;
