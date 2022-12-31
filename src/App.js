import "./styles.css";

export default function App() {
  const fruits = [
    { id: 1, name: "banana" },
    { id: 2, name: "apple" },
    { id: 3, name: "kiwi" },
    { id: 4, name: "rasberry" },
    { id: 5, name: "pineapple" },
    { id: 6, name: "blueberry" }
  ];

  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <div key={fruit.id}>
            <h2>name: {fruit.name}</h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
