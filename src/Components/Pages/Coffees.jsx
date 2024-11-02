import { useLoaderData } from "react-router-dom";

const Coffees = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border m-8">
        {data.map((coffee, index) => {
          return (
            <div
              key={index}
              className="border p-4 rounded-lg hover:scale-105 transition-transform duration-700"
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
          );
        })}
      </div>
    </div>
  );
};

export default Coffees;
