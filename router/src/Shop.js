import { useState, useEffect } from "react";

export function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.com/v2/shop/br");

    const items = await data.json();
    console.log(items.data.daily.entries);
    setItems(items.data.daily.entries);
  };

  return (
    <div className="container">
      {items.map((item) => (
        <div className="card">
          <h3 className="item-name">Name: {item.devName}</h3>
          <h4 className="item-price">Price: {item.regularPrice}</h4>
          <div className="giftable">
            {item.giftable ? <h4>Giftable</h4> : <h4>Not Giftable</h4>}
          </div>
        </div>
      ))}
    </div>
  );
}
