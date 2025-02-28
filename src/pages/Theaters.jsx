
import TheaterList from '../components/theater/TheaterList'
import MovieOverview from '../components/theater/MovieOverview'

function Theaters() {
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