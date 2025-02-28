import Swipers from "../components/home/Swipers";
import MoviesCard from "../components/home/MoviesCard";

function Home() {
  return (
    <div>
      <Swipers />
      <div className="mt-16">
        <p className="text-2xl text-center font-bold ">Latest Movies</p>
        <div className="mt-8 flex justify-center  flex-wrap gap-5">
          
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
