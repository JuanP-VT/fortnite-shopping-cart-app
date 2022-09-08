import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AppWrap } from "./App.Style";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Shop from "./components/Shop/Shop";
import { GlobalStyle } from "./GlobalStyles";
import { ShopItem } from "./Interfaces";
import { useLocation } from "react-router-dom";

function App() {
  // This hook will call fortnite API and filter the response
  const [ShopItems, setShopItems] = useState<ShopItem[]>([]);
  useEffect(() => {
    callApi();
    async function callApi() {
      // the 'special featured'  property in the response contains all the daily deals
      const response = await fetch("https://fortnite-api.com/v2/shop/br");
      const myData = await response.json();
      const allEntries = myData.data.specialFeatured.entries;
      //Filter bundles
      const noBundle: ShopItem[] = allEntries.filter(
        (item: ShopItem) => item.bundle === null
      );
      // Filter items with no price
      const filtered = noBundle.filter((item) => item.regularPrice > 0);
      setShopItems(filtered);
    }
  }, []);
  // This hook is to manage current router location
  const currentLocation = useLocation();
  const pathName = currentLocation.pathname;
  const [CurrentRoute, setCurrentRoute] = useState(pathName);
  useEffect(() => {
    setCurrentRoute(pathName);
  }, [pathName]);
  return (
    <AppWrap>
      <GlobalStyle />
      <Nav currentRoute={CurrentRoute} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </AppWrap>
  );
}

export default App;
