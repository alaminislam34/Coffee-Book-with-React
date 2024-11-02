import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Heading from "./Heading";
import Categories from "./Categories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Heading
        title={"This is Title"}
        subTitle={"Title cailei change korte parbi cinta korte lagbe na.."}
      ></Heading>
      <Categories></Categories>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
