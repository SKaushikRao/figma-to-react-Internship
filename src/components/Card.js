export default function Card({ item, onClick }) {
    return (
      <div className="card" onClick={onClick}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    );
  }
  