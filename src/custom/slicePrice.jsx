import React from "react";

// 금액 3자리마다 , 찍기
const useSlicePrice = (price) => {
  const priceList = price.split("").reverse();
  const newPriceList = priceList.map((v, l) => {
    return l % 3 === 0 && l !== 0 ? `${v},` : v;
  });

  return newPriceList.reverse().join("");
};

export default useSlicePrice;
