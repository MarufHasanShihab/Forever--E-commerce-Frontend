import BestSellers from "../Components/Home/BestSellers";
import Hero from "../Components/Home/Hero";
import OurPolicy from "../Components/Home/OurPolicy";
import NewsLetterBox from "../Components/utilits/NewsLetterBox";
import LatestCollections from "./../Components/Home/LatestCollections";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSellers />
      <OurPolicy />
      <NewsLetterBox/>
    </div>
  );
};

export default Home;
