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
  };

  return (
    <div className="container">
      <ul>
        {items.map((item) => {
          return <li>{item.item.name}</li>;
        })}
      </ul>
    </div>
  );
}
