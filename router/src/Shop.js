import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        <div className="card" key={item.offerId}>
          <h3 className="item-name">Items: </h3>
          <h3 className="item-name" key={item.id}>
            {item.items.map((item) => (
              <Link to={`shop/${item.id}`}>
                <li>{item.name}</li>
              </Link>
            ))}
          </h3>
          <h4 className="item-price">Price: {item.regularPrice}</h4>
          <div className="giftable">
            {item.giftable ? <h4>Giftable</h4> : <h4>Not Giftable</h4>}
          </div>
        </div>
      ))}
    </div>
  );
}
