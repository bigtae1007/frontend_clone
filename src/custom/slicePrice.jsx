import React from "react";

const useSlicePrice = (price) => {
  const priceList = price.split("").reverse();
  const newPriceList = priceList.map((v, l) => {
    return l % 3 === 0 && l !== 0 ? `${v},` : v;
  });

  return newPriceList.reverse().join("");
};

export default useSlicePrice;
