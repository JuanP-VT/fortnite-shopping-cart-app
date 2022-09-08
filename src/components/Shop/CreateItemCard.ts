// This function returns a 'Item Card' HTMLDivElement
export const CreateItemCard = (
  index: number,
  imgSrc: string,
  name: string,
  description: string,
  price: number,
  rarity: string
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
  cartBox.append(addButton);
  itemCard.append(cartBox);
  return itemCard;
};
