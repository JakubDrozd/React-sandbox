import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ItemDetail() {
  const params = useParams();

  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    images: {},
    ratings: {},
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
      <div className="cost">
        {item.obtained}
        <img
          src={require("./coins.png")}
          alt="v-bucks"
          width={"15%"}
          height={"15%"}
        ></img>
      </div>
      <img src={item.images.icon} alt="item-icon" width="40%" h1="40%" />
      <h2 style={{ fontStyle: "italic" }}>
        {item.description ? item.description : null}
      </h2>
      <div>
        <h2>Ratings: </h2>
        <ul>
          <li>Average stars: {item.ratings.avgStars}</li>
          <li>Total points: {item.ratings.totalPoints}</li>
          <li>Votes: {item.ratings.numberVotes}</li>
        </ul>
      </div>
    </div>
  );
}
