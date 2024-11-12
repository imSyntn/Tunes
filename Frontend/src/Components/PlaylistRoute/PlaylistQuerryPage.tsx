import { useParams } from 'react-router-dom'
import { useFetch } from '../../Utils/useFetch'
import ImgAlbumDetails from '../ImgAlbumDetails'
import SongCard from '../SongCard'
import Artists from '../Artists'
import { useAppContext } from '../../Context/ContextProvider';
import Loader from '../Loader'
import { ResultsInDataType } from '../../App.types'
import '../../Styles/PlaylistRoute/PlaylistQuerryPage.scss'

const PlaylistQuerryPage = () => {

    const { id } = useParams()

    // const songContext = useContext(Context);

    // if (!songContext) {
    //     return 
    // }
    const { setTracks } = useAppContext();

    const fetchUrl = `${import.meta.env.VITE_DATA_URL}/api/playlists?id=${id}&limit=100`
    const { loading, error, data } = useFetch(fetchUrl)

    if (loading) {
        return <Loader />
    }
    if (error) {
        return <p className='Loading-Error'>Error in loading.</p>
    }

    const audioSet = () => {
        if (!loading && !error && data && 'songs' in data && Array.isArray(data.songs)) {
            setTracks(data.songs)
        }
    }

    return (
        <div className='PlaylistQuerryPage'>
            {
                !loading && !error && data && !Array.isArray(data) && (
                    <>
                        <ImgAlbumDetails data={data} audioSet={audioSet} />
                        <h2>Songs</h2>
                        {
                            data.songs?.map((item: ResultsInDataType) => (
                                <SongCard result={item} key={item.id} />
                            ))
                        }
                        <h2 style={{ marginTop: '30px' }}>Artists</h2>
                        <Artists data={data} />
                    </>
                )
            }
        </div>
    )
}

export default PlaylistQuerryPage