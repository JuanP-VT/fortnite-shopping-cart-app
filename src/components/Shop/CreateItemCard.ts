// This function returns a 'Item Card' HTMLDivElement
import React from "react";
import { ShopItem } from "../../Interfaces";
export const CreateItemCard = (
  index: number,
  imgSrc: string,
  name: string,
  description: string,
  price: number,
  rarity: string,
  catalog: ShopItem[],
  shoppingCart: ShopItem[],
  setShoppingCart: React.Dispatch<React.SetStateAction<ShopItem[]>>
): HTMLDivElement => {
  const itemCard = document.createElement("div");
  itemCard.classList.add("itemCard");
  itemCard.setAttribute("index", index.toString());
  //Image container
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("imgContainer");
  const image = document.createElement("img");
  image.src = imgSrc;
  imgContainer.append(image);
  itemCard.append(imgContainer);
  //Description Box
  const descBox = document.createElement("div");
  descBox.classList.add("descBox");
  const itemName = document.createElement("span");
  itemName.textContent = name;
  const itemDescription = document.createElement("p");
  itemDescription.textContent = description;
  const itemPrice = document.createElement("p");
  itemPrice.classList.add("itemPrice");
  itemPrice.textContent = price.toString();
  descBox.append(itemName, itemDescription, itemPrice);
  itemCard.append(descBox);
  //Cart Status Box
  const cartBox = document.createElement("div");
  cartBox.classList.add("cartBox");
  const addButton = document.createElement("button");
  addButton.textContent = "Add To Cart";
  // Handle Add to cart event
  addButton.addEventListener("click", (e: Event) => {
    const target = e.target as HTMLDivElement;
    const parent = target.parentElement?.parentElement as HTMLDivElement;
    const index = parseInt(parent.getAttribute("index") as string);
    const newCart = shoppingCart;
    //Check if item is already in cart
    if (shoppingCart.includes(catalog[index])) {
      return;
    } else {
      newCart.push(catalog[index]);
      setShoppingCart(newCart);
    }
  });
  cartBox.append(addButton);
  itemCard.append(cartBox);
  return itemCard;
};
