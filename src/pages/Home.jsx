import Swipers from "../components/home/Swipers";
import MoviesCard from "../components/home/MoviesCard";
import { useMeta } from "../hooks/UseMeta";

function Home() {
  useMeta({
    title: ` | MySite`,
    description: "home3",
    'og:title': "home3",
    'og:description': "home3",
    'og:image': "https://t4.ftcdn.net/jpg/04/39/89/01/360_F_439890152_sYbPxa1ANTSKcZuUsKzRAf9O7bJ1Tx5B.jpg",
    'twitter:card': 'summary_large_image',
    'twitter:image':"https://t4.ftcdn.net/jpg/04/39/89/01/360_F_439890152_sYbPxa1ANTSKcZuUsKzRAf9O7bJ1Tx5B.jpg" ,
  });

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
