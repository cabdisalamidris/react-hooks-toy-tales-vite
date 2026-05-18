import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import ToyForm from "./ToyForm";

const API_URL = "http://localhost:3001/toys";

function App() {
  const [toys, setToys] = useState([]);

  // ✅ Fetch all toys
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((err) => console.error(err));
  }, []);

  // ✅ Add toy
  function handleAddToy(newToy) {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newToy, likes: 0 }),
    })
      .then((res) => res.json())
      .then((data) => setToys([...toys, data]));
  }

  // ✅ Delete toy
  function handleDelete(id) {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    }).then(() => {
      setToys(toys.filter((toy) => toy.id !== id));
    });
  }

  // ✅ Like toy
  function handleLike(toy) {
    fetch(`${API_URL}/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: toy.likes + 1 }),
    })
      .then((res) => res.json())
      .then((updatedToy) => {
        setToys(
          toys.map((t) => (t.id === toy.id ? updatedToy : t))
        );
      });
  }

  return (
    <div>
      <h1>Toy Tales</h1>

      <ToyForm onAddToy={handleAddToy} />

      <div>
        {toys.map((toy) => (
          <ToyCard
            key={toy.id}
            toy={toy}
            onDelete={handleDelete}
            onLike={handleLike}
          />
        ))}
      </div>
    </div>
  );
}

export default App;