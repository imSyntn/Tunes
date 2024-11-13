import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../Utils/useFetch'
import { SiTicktick } from "react-icons/si";
import DynamicContent from './DynamicContent';
import { useAppContext } from '../../Context/ContextProvider';
import Loader from '../Loader';
import { ResultsInDataType } from '../../App.types';
import { motion } from 'framer-motion'
import '../../Styles/ArtistRoute/ArtistQuerryPage.scss'

// interface typeStateType {
//     song: boolean,
//     album: boolean
// }

const ArtistQuerryPage = () => {

    const { id } = useParams()

    // const songContext = useContext(Context);
    // // const counter = useRef(false)

    // if (!songContext) {
    //     return null
    // }
    const { tracks, setTracks } = useAppContext();

    if (!id) {
        return null
    }

    const [type, setType] = useState<string>('songs')
    const [childData, setChildData] = useState<ResultsInDataType[]>([])

    const fetchUrl = `/api/artists?id=${id}`;
    const { loading, error, data } = useFetch(fetchUrl)

    if (loading) {
        return <Loader />
    }
    if (error) {
        return <p className='Loading-Error'>Error in loading.</p>
    }

    const audioSet = () => {
        if (!loading && !error && Array.isArray(childData) && childData.length == 10) {
            setTracks(childData)
        }
    }

    const childToParentDataSend = (childSentData: ResultsInDataType[]) => {
        setChildData(childSentData)
    }

    return (
        <div className='ArtistQuerryPage'>
            {
                !loading && !error && data && !Array.isArray(data) && (
                    <>
                        <div className="imgText">
                            <img src={data.image?.[2]?.url || data.image?.[1]?.url || data.image?.[0]?.url || '../../../music.png'} alt="" />
                            <img className='wrapper' src={data.image?.[2]?.url || '../../../music.png'} alt={'img wrapper'} />
                            <div className="text">
                                <h1>{data.name} {data.isVerified && <SiTicktick />}</h1>
                                <p>{data.fanCount} Listeners</p>
                                <motion.button whileTap={{ scale: 0.7 }} transition={{ duration: 0.01 }} style={(type != 'songs') ? { opacity: 0.2, cursor: 'inherit' } : {}} disabled={(type != 'songs' && childData.length == 0) ? true : false} onClick={audioSet}>PLay</motion.button>
                            </div>
                        </div>
                        {
                            (data.bio?.[0]?.text) && (
                                <>
                                    <h2>Introduction</h2>
                                    <p>{data.bio?.[0]?.text}</p>
                                </>
                            )
                        }
                        <div className="type">
                            <div className="contentSwitcher">
                                <button onClick={() => setType('songs')} style={type === 'songs' ? { borderColor: '#2bc5b4' } : { borderColor: 'white' }}>Songs</button>
                                <button onClick={() => setType('albums')} style={type === 'albums' ? { borderColor: '#2bc5b4' } : { borderColor: 'white' }}>Albums</button>
                            </div>
                            <div className="content">
                                <DynamicContent type={type} id={id} childToParentDataSend={childToParentDataSend} childData={childData} setTracks={setTracks} tracks={tracks} />
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default ArtistQuerryPage