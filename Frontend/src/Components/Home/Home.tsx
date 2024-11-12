import NewReleases from "./NewReleases"
import TopArtists from "./TopArtists"
import Trending from "./Trending"
import '../../Styles/Home/Home.scss'

const Home = () => {

  return (
    <div className='Home'>
      <Trending />
      <NewReleases />
      <TopArtists />
    </div>
  )
}

export default Home