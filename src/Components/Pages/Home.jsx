import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Heading from "./Heading";
import Categories from "./Categories";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Heading
        title={"This is Title"}
        subTitle={"Title cailei change korte parbi cinta korte lagbe na.."}
      ></Heading>
      <Categories categories={data}></Categories>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
