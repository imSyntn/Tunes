import { useEffect, useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useFetch } from '../../Utils/useFetch';
// import SongCard from './SongCard';
import ImgAlbumDetails from '../ImgAlbumDetails';
import Artists from '../Artists';
import Lyrics from './Lyrics';
import SimilarSongs from './SimilarSongs';
import SongFromAlbum from './SongFromAlbum';
import { useAppContext } from '../../Context/ContextProvider';
import { GoArrowUpRight } from "react-icons/go";
import { ResultsInDataType } from '../../App.types';
import Loader from '../Loader';
import '../../Styles/SongRoute/SongQuerryPage.scss'

const SongQuerryPage = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    if (!id) {
        return <p>Invalid Song</p>
    }

    const { setTracks, setSongIndex } = useAppContext();

    const fetchUrl = `${import.meta.env.VITE_DATA_URL}/api/songs/${id}`;
    const { loading, error, data } = useFetch(fetchUrl);

    const [allSongData, setAllSongData] = useState<ResultsInDataType[] | []>([])

    useEffect(() => {
        if (!loading && !error && data && Array.isArray(data)) {
            setAllSongData([...(data as ResultsInDataType[])])
        }
    }, [data])

    const audioSet = useCallback(() => {
        setTracks(allSongData)
        setSongIndex(0)
    },[allSongData])

    if (loading) return <Loader />;
    if (error) return <p className='Loading-Error'>Error loading album details.</p>;


    return (

        <div className='SongQuerryPage'>
            {
                (!loading && !error && data && Array.isArray(data)) && (
                    <>
                        <ImgAlbumDetails audioSet={audioSet} data={(data[0] as ResultsInDataType)} />
                        {
                            (data[0] as ResultsInDataType)?.hasLyrics && (
                                <>
                                    <h2>Lyrics</h2>
                                    <Lyrics id={(data[0] as ResultsInDataType).id} />
                                </>
                            )
                        }
                        {
                            (data[0] && (data[0] as ResultsInDataType)?.album?.id) && (
                                <>
                                    <h2>More from <span onClick={() => navigate(`/album/${(data[0] as ResultsInDataType)?.album?.id}`)}>{(data[0] as ResultsInDataType)?.album?.name}<GoArrowUpRight /></span></h2>
                                    <SongFromAlbum id={(data[0] as ResultsInDataType)?.album?.id ?? ''} currentSongId={id} />
                                </>
                            )
                        }
                        <h2>Similar songs</h2>
                        <SimilarSongs id={id} setAllSongData={setAllSongData} />
                        <h2>Artists</h2>
                        <Artists data={data[0]} />
                    </>
                )
            }
        </div>
    )
}

export default SongQuerryPage