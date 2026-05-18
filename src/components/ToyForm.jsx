import { useState } from "react";

function ToyForm({ onAddToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newToy = {
      name,
      image,
    };

    onAddToy(newToy);

    setName("");
    setImage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Toy</h2>

      <input
        type="text"
        placeholder="Enter a toy's name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter a toy's image URL..."
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      {/* ✅ FIXED TEXT */}
      <button type="submit">Create New Toy</button>
    </form>
  );
}

export default ToyForm;