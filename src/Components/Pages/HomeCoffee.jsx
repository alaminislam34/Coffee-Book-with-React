import { useEffect, useState } from "react";

const HomeCoffee = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch("/coffee.json")
      .then((data) => data.json())
      .then((data) => setCoffees(data.slice(0, 9)));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-8">
        {coffees.map((coffee, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-green-100 hover:scale-105 transition-transform duration-700"
          >
            <img
              className="aspect-video object-cover"
              src={coffee.image}
              alt=""
            />
            <p>Category: {coffee.category}</p>
            <h2>{coffee.name}</h2>
            <p>Rating: {coffee.rating}</p>
            <p>Price: {coffee.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCoffee;
