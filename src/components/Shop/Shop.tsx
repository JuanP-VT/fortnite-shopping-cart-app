import React from "react";
import { ShopWrap } from "./Shop.Style";
import { ShopItem } from "../../Interfaces";
type Props = {
  catalog: ShopItem[];
};

function Shop({}: Props) {
  return (
    <ShopWrap>
      <div id="catalogContainer"></div>
    </ShopWrap>
  );
}

export default Shop;
