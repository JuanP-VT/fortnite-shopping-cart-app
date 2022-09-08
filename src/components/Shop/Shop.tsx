import React, { useEffect } from "react";
import { ShopWrap } from "./Shop.Style";
import { ShopItem } from "../../Interfaces";
import { CreateItemCard } from "./CreateItemCard";
type Props = {
  catalog: ShopItem[];
  ShoppingCart: ShopItem[];
  setShoppingCart: React.Dispatch<React.SetStateAction<ShopItem[]>>;
};

function Shop({ catalog, ShoppingCart, setShoppingCart }: Props) {
  useEffect(() => {
    const container = document.querySelector("#catalogContainer");
    //Crete a display card for each item
    catalog.forEach((item, index) => {
      const itemCard = CreateItemCard(
        index,
        item.items[0].images.featured,
        item.items[0].name,
        item.items[0].description,
        item.finalPrice,
        item.items[0].rarity.value,
        catalog,
        ShoppingCart,
        setShoppingCart
      );
      container?.append(itemCard);
    });
  }, [catalog, setShoppingCart, ShoppingCart]);
  return (
    <ShopWrap>
      <div id="catalogContainer"></div>
    </ShopWrap>
  );
}

export default Shop;
