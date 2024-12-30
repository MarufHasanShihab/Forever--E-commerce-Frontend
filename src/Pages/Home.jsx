import BestSellers from "../Components/Home/BestSellers";
import Hero from "../Components/Home/Hero";
import LatestCollections from './../Components/Home/LatestCollections';


const Home = () => {
    return (
        <div>
            <Hero/>
            <LatestCollections/>
            <BestSellers/>
        </div>
    );
};

export default Home;