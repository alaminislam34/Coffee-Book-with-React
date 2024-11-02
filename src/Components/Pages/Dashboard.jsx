import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const Dashboard = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const favoriteList = JSON.parse(localStorage.getItem("favorite")) || [];
    setCoffees(favoriteList);
  }, []);
  const handleRemove = (id) => {
    const remove = coffees.filter((coffee) => coffee.id !== id);
    setCoffees(remove);
    localStorage.setItem("favorite", JSON.stringify(remove));
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-4 my-6 md:my-10 lg:my-12 mx-4 text-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">
          Welcome to Dashboard
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-black/70">
          Manage coffees that you have previously added as favorite. You can
          view or remove them from here.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-8">
        {coffees.map((coffee, index) => {
          return (
            <div
              key={index}
              className="relative border hover:shadow-xl rounded-lg hover:scale-105 transition-transform duration-700"
            >
              <button
                onClick={() => handleRemove(coffee.id)}
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-red-100 hover:bg-red-200 duration-300 flex justify-center items-center"
              >
                <RiDeleteBinLine className="text-xl text-red-600" />
              </button>
              <img
                className="aspect-video object-cover rounded-lg"
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
                <p>Price: {coffee.price} $</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
