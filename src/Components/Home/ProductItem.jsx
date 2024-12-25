import PropTypes from "prop-types";
import { useContext } from "react";
import { shopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { _id, image, name, price } = product || {};
  const { currency } = useContext(shopContext);
  return (
    <Link to={`/product/${_id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt="product_image"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object
};

export default ProductItem;
