import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Heading from "./Heading";
import Categories from "./Categories";

const Home = () => {
  return (
    <div className="my-6 md:my-12">
      <Banner></Banner>
      <Heading
        title={"Choose your Favorite Coffee"}
        subTitle={
          "Indulge in a rich, velvety espresso with notes of dark chocolate and caramel, offering an energizing, aromatic coffee experience."
        }
      ></Heading>
      <Categories></Categories>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
