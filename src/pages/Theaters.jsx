
import TheaterList from '../components/theater/TheaterList'
import MovieOverview from '../components/theater/MovieOverview'
import { useMeta } from '../hooks/UseMeta';

function Theaters() {
  useMeta({
    title: ` | thster`,
    description: "theter",
    'og:title': "hsdfds",
    'og:description': "hdgfdgfdme3",
    'og:image': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrY_x7g1HJQ7Ct7pqm-l-9OsQunOFjk0DZXQ&s",
    'twitter:card': 'summary_large_image',
    'twitter:image':"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrY_x7g1HJQ7Ct7pqm-l-9OsQunOFjk0DZXQ&s" ,
  });
  return (
    <div>
        <MovieOverview/>
        <div className=' mt-10'>


        <TheaterList name={'ARC Coronation 4K Dolby Atmos'}/>
        <TheaterList name={'Aashirvad Cineplexx: Kozhikode'}/>
       
        </div>
    </div>
  )
}

export default Theaters