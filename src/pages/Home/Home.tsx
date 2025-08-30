import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";
import Search from "../../components/Search/Search";

const Home: React.FC = () => {
  return (
    <div className="container">
      <h1>
        Find the best Coffee for you
      </h1>

      <Search />

      <div className="wrapper-list-of-coffees">
        <CoffeeCard title="Capuccino" description="With oat milk" price={12} />
        <CoffeeCard title="Espresso" description="Single shot" price={8} />
      </div>
    </div>
  );
};

export default Home;
