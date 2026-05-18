function ToyCard({ toy, onDelete, onLike }) {
  return (
    <div data-testid="toy-card">
      <h2>{toy.name}</h2> {/* ✅ FIXED */}

      <img src={toy.image} alt={toy.name} />

      <p>{toy.likes} Likes </p>

      <button onClick={() => onLike(toy)}>
        Like {"<3"}
      </button>

      <button onClick={() => onDelete(toy.id)}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;