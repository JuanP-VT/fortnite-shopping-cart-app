import React from "react";
import { ShopItem } from "../../Interfaces";
type Props = {
  ShoppingCart: ShopItem[];
  setShoppingCart: React.Dispatch<React.SetStateAction<ShopItem[]>>;
};

function Cart({ ShoppingCart }: Props) {
  return <div>Cart</div>;
}

export default Cart;
