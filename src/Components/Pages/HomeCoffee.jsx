import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeCoffee = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch("/coffee.json")
      .then((data) => data.json())
      .then((data) => setCoffees(data.slice(0, 9)));
  }, []);
  const handleSortedByPopularity = () => {
    const sort = [...coffees].sort((a, b) => a.popularity - b.popularity);
    setCoffees(sort);
  };

  const handleSortedByRating = () => {
    const sort = [...coffees].sort((a, b) => a.rating - b.rating);
    setCoffees(sort);
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-wrap justify-between items-center gap-4 mt-6 my-4 mx-4">
        <div>
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
            Sorted by Rating & Popularity{" "}
          </h2>
        </div>
        <div className="flex flex-row gap-2">
          <button
            onClick={handleSortedByPopularity}
            className="btn hover:bg-green-500 hover:text-white font-semibold"
          >
            Sort by popularity
          </button>
          <button
            onClick={handleSortedByRating}
            className="btn hover:bg-green-500 hover:text-white font-semibold"
          >
            Sort by rating
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffees.map((coffee, index) => {
          return (
            <Link to={`/category/${coffee.id}`} key={index}>
              <div className="border shadow-md hover:shadow-xl rounded-lg hover:scale-105 transition-transform duration-700 overflow-hidden">
                <img
                  className="aspect-video object-cover"
                  src={coffee.image}
                  alt=""
                />
                <div className="p-6">
                  <p className="text-sm md:text-lg lg:text-xl font-medium">
                    Category: {coffee.name}
                  </p>
                  <h2>{coffee.category}</h2>
                  <p>Type: {coffee.type}</p>
                  <p>Origin: {coffee.origin}</p>
                  <p>Rating: {coffee.rating} </p>
                  <p>Popularity: {coffee.popularity}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCoffee;
