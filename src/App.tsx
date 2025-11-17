// src/App.tsx
import { useEffect, useState } from "react";
import type {Item } from "./types";
export const data =[];
function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/items/")
      .then((res) => res.json())
      .then((data: Item[]) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Items from Django:</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
