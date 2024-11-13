import { useNavigate } from 'react-router-dom'
import { useFetch } from '../../Utils/useFetch'
import { top_artists } from '../../App.types'
import '../../Styles/Home/TopArtists.scss'
import '../../Styles/Artists.scss'
import Loader from '../Loader'

const TopArtists = () => {

  const { loading, error, data } = useFetch(`http://localhost:8000/api/top-artists`)

  const navigate = useNavigate()


  if(loading) return <Loader />

  return (
    <div className='TopArtists'>
      <h1>Top Artists</h1>
      <div className="homeArtistCont">
        {
          (!error && data && Array.isArray(data)) ? (
            (data as top_artists[]).slice(0, 15).map((item: top_artists) => (
              <div className="artistCont" key={item.artistid} onClick={() => navigate(`/artist/${item.artistid}`)}>
                <img src={item.image || '../../music.png'} alt="" />
                <p>{item.name}</p>
              </div>
            ))
          ) : (
            <p className='Loading-Error'>Something went wrong!</p>
          )
        }
      </div>
    </div>
  )
}

export default TopArtists