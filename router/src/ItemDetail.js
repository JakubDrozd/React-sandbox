import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export function ItemDetail() {
  const params = useParams();

  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    images: {},
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${params.id}`
    );
    const item = await fetchItem.json();
    setItem(item.data.item);
    console.log(item.data.item);
  };

  console.log(item);

  return (
    <div className="item-container">
      <h1>{item.name}</h1>
      <img src={item.images.icon} alt="item-icon" width="40%" h1="40%" />
      <h2 style={{ fontStyle: "italic" }}>"{item.description}"</h2>
    </div>
  );
}
