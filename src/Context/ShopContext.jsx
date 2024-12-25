import PropTypes from "prop-types";
import { createContext } from "react";
import { products } from "../assets/assets";

export const shopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;
  const value = { products, currency, deliveryFee };
  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};

ShopContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ShopContextProvider;
