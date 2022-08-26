import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    const items = await data.json();
    setItems(items.data);
    // console.log(items.data);
  };

  return (
    <div className="container">
      <ul>
        {items.map((item) => {
          return (
            <Link to={`/${item.itemId}`} key={item.itemId}>
              <li>{item.item.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
