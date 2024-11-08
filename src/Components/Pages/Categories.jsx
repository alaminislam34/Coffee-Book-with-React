/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "./Common.css";
import { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((data) => data.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div
        role="tablist"
        className="tabs tabs-lifted border-b-green-500 common_class py-4"
      >
        {categories.map((category) => {
          return (
            <NavLink
              key={category.id}
              to={`/category/${category.categories}`}
              role="tab"
              className="tab border font-bold md:text-lg lg:text-xl"
            >
              {category.categories}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
