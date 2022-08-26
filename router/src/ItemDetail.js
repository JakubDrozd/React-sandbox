import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export function ItemDetail() {
  const params = useParams();

  useEffect(() => {
    fetchItem();
    console.log(params.id);
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${params.id}`
    );
    const item = await fetchItem.json();
    console.log(item);
  };

  return (
    <div className="container">
      <h1>Item</h1>
    </div>
  );
}
