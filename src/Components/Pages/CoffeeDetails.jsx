import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CoffeeDetails = () => {
  const [favorite, setFavorite] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const { id } = useParams();
  const coffeeId = parseInt(id);
  const [coffee, setCoffee] = useState([]);
  useEffect(() => {
    fetch("/coffee.json")
      .then((data) => data.json())
      .then((data) => setCoffee(data));
  }, []);

  useEffect(() => {
    if (coffee.length > 0) {
      const addFavorite = coffee.find((coffee) => coffee.id === coffeeId);
      setFavorite(addFavorite);
    }
  }, [coffee, coffeeId]);
  if (!favorite) {
    return <p>loading.......</p>;
  }
  const {
    description,
    image,
    name,
    popularity,
    rating,
    making_process,
    ingredients,
    nutrition_info,
  } = favorite;

  const handleAddToFavorite = (coffee) => {
    const addFavoriteCoffee =
      JSON.parse(localStorage.getItem("favorite")) || [];
    const isAlreadyFavorite = addFavoriteCoffee.some(
      (item) => item.id === coffee.id
    );
    if (!isAlreadyFavorite) {
      addFavoriteCoffee.push(coffee);
      localStorage.setItem("favorite", JSON.stringify(addFavoriteCoffee));
      toast("Add to Favorite List");
      setDisabled(true);
    }
  };
  return (
    <div className="my-6 md:my-10 lg:my-12 w-11/12 mx-auto space-y-4 md:space-y-5">
      <h2 className="text-xl md:text-2xl lg:text-4xl">{description}</h2>
      <img
        className="h-[80vh] w-full object-cover rounded-lg"
        src={image}
        alt=""
      />
      <div className="flex justify-between items-center">
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold">{name}</p>
        <button
          onClick={() => handleAddToFavorite(favorite)}
          className={`btn ${
            disabled ? "disabled" : ""
          } hover:bg-green-500 hover:text-white`}
          id="favoriteBtn"
          disabled={disabled}
        >
          Add to favorite
        </button>
      </div>
      <div>
        <p>Popularity: {popularity}</p>
        <p>Rating: {rating}</p>
      </div>
      <div>
        <p className="text-xl md:text-2xl lg:text-3xl">Making Process:</p>
        <p>{making_process}</p>
      </div>
      <div>
        <p>Ingredients:</p>
        <ol className="list-disc list-inside">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ol>
      </div>
      <div>
        <p>Nutrition:</p>
        <ol className="list-disc list-inside">
          <li className="">Calories: {nutrition_info.calories}</li>
          <li className="">Fat: {nutrition_info.fat}</li>
          <li className="">Carbohydrates: {nutrition_info.carbohydrates}</li>
          <li className="">Protein: {nutrition_info.protein}</li>
        </ol>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CoffeeDetails;
