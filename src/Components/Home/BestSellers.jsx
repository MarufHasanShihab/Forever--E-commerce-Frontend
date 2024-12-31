import { useContext, useEffect, useState } from "react";
import { shopContext } from "./../../Context/ShopContext";
import Title from "../utilits/Title";
import ProductItem from "../utilits/ProductItem";

const BestSellers = () => {
  const { products } = useContext(shopContext);
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    setBestSellers(products.filter((item) => item.bestseller));
  }, [products]);
  return (
    <div>
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>
      {/* rendering best-sellers products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSellers?.map((item, index) => (
          <ProductItem key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
