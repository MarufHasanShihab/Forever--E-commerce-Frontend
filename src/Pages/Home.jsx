import BestSellers from "../Components/Home/BestSellers";
import Hero from "../Components/Home/Hero";
import OurPolicy from "../Components/Home/OurPolicy";
import LatestCollections from "./../Components/Home/LatestCollections";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSellers />
      <OurPolicy />
    </div>
  );
};

export default Home;
