import React, { useEffect } from "react";
import { ShopWrap } from "./Shop.Style";
import { ShopItem } from "../../Interfaces";
type Props = {
  catalog: ShopItem[];
};

function Shop({ catalog }: Props) {
  useEffect(() => {
    const container = document.querySelector("#catalogContainer");
    console.log(catalog);
    //Crete a display card for each item
    catalog.forEach((item, index) => {
      const itemCard = document.createElement("div");
      itemCard.classList.add("itemCard");
      itemCard.setAttribute("index", index.toString());
      //Image container
      const imgContainer = document.createElement("div");
      imgContainer.classList.add("imgContainer");
      const image = document.createElement("img");
      image.src = item.items[0].images.featured;
      imgContainer.append(image);
      itemCard.append(imgContainer);

      //Description Box
      const descBox = document.createElement("div");
      descBox.classList.add("descBox");
      const itemName = document.createElement("span");
      itemName.textContent = item.items[0].name;
      const itemDescription = document.createElement("p");
      itemDescription.textContent = item.items[0].description;
      const itemPrice = document.createElement("p");
      itemPrice.classList.add("itemPrice");
      itemPrice.textContent = item.finalPrice.toString();
      descBox.append(itemName, itemDescription, itemPrice);
      itemCard.append(descBox);
      //Cart Status Box
      const cartBox = document.createElement("div");
      cartBox.classList.add("cartBox");
      const addButton = document.createElement("button");
      addButton.textContent = "Add To Cart";
      cartBox.append(addButton);
      itemCard.append(cartBox);

      //
      container?.append(itemCard);
    });
  }, [catalog]);
  return (
    <ShopWrap>
      <div id="catalogContainer"></div>
    </ShopWrap>
  );
}

export default Shop;
