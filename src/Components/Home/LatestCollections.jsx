import { useContext, useEffect, useState } from "react";
import { shopContext } from "../../Context/ShopContext";
import Title from "./../utilits/Title";
import ProductItem from "../utilits/ProductItem";

const LatestCollections = () => {
  const { products } = useContext(shopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);
  return (
    <div className="my-12">
      <div className="text-center py-8 text-3xl">
        <Title text1="LATEST " text2="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>
      {/* rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts?.map((item, index) => (
          <ProductItem key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default LatestCollections;
