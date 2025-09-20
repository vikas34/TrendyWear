import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => (item.bestseller));
    setBestSeller(bestProduct.slice(0,5));
  }, [products]);
  return <div className="my-10 "> 
  <div className="text-center py-8 text-3xl">
    <Title text1={'BEST'} text2={'SELLERS'}/>
    <p className="w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-600">Whether you’re building a capsule wardrobe or refreshing your style, our best sellers highlight what’s in demand right now—because great style never goes out of fashion!</p>

  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
    {
        bestSeller.map((item, index)=>(
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
        ))
    }

  </div>

  </div>;
};

export default BestSeller;
