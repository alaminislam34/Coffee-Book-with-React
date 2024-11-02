import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoffeeDetails = () => {
  const [favorite, setFavorite] = useState(null);

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
  return (
    <div className="my-6 md:my-10 lg:my-12 w-11/12 mx-auto">
      <h2 className="text-xl md:text-2xl lg:text-4xl my-4 md:my-6 lg:my-12">
        {description}
      </h2>
      <img
        className="h-[80vh] w-full object-cover rounded-lg"
        src={image}
        alt=""
      />
      <p className="text-xl md:text-2xl lg:text-3xl font-semibold">{name}</p>
      <p>Popularity: {popularity}</p>
      <p>Rating: {rating}</p>
      <p className="text-xl md:text-2xl lg:text-3xl">Making Process:</p>
      <p>{making_process}</p>
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
    </div>
  );
};

export default CoffeeDetails;
