import Card from "./Card";
import { useEffect, useState } from "react";
import { fetchItems } from "../services/api";

export default function MainContent({ onItemSelect }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems().then(data => setItems(data));
  }, []);

  return (
    <div className="main-content">
      <h1>Dashboard</h1>
      <div className="cards-container">
        {items.map(item => (
          <Card key={item.id} item={item} onClick={() => onItemSelect(item)} />
        ))}
      </div>
    </div>
  );
}
