import React, { useEffect, useState } from "react";
import { ShopItem } from "./Interfaces";
function App() {
  const [ShopItems, setShopItems] = useState<ShopItem[]>([]);
  // This hook will call fortnite API and filter the response
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
  return <></>;
}

export default App;
